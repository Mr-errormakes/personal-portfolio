"use client";

import { useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

// Palette mirrors the CSS tokens in globals.css.
const ACCENT = "#c2ff5e";
const SURFACE = "#141914";
const SURFACE_LIGHT = "#1c231b";
const BACKGROUND = "#080a09";

const blockGeometry = new THREE.BoxGeometry(1.55, 1.25, 1.25);
const upperGeometry = new THREE.BoxGeometry(1.05, 0.28, 0.9);
const sideGeometry = new THREE.BoxGeometry(0.55, 0.65, 0.7);
const baseGeometry = new THREE.BoxGeometry(2.3, 0.12, 1.75);

function Edges({ geometry }: { geometry: THREE.BoxGeometry }) {
  return (
    <lineSegments>
      <edgesGeometry args={[geometry]} />
      <lineBasicMaterial color={ACCENT} transparent opacity={0.85} />
    </lineSegments>
  );
}

function Assembly() {
  const follower = useRef<THREE.Group>(null);
  const assembly = useRef<THREE.Group>(null);
  const upperModule = useRef<THREE.Group>(null);
  const sideModule = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (
      !follower.current ||
      !assembly.current ||
      !upperModule.current ||
      !sideModule.current
    ) {
      return;
    }

    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    const ease = 1 - Math.pow(0.02, delta);

    // Slow, controlled idle spin of the assembly.
    assembly.current.rotation.y += delta * 0.12;

    // The whole model drifts toward the cursor and turns to face it.
    const target = follower.current;
    target.position.x = THREE.MathUtils.lerp(target.position.x, x * 0.9, ease);
    target.position.y = THREE.MathUtils.lerp(target.position.y, y * 0.45, ease);
    target.rotation.y = THREE.MathUtils.lerp(target.rotation.y, x * 0.6, ease);
    target.rotation.x = THREE.MathUtils.lerp(target.rotation.x, -y * 0.35, ease);

    // Exploded components gently move in and out.
    upperModule.current.position.y = 1.05 + Math.sin(t * 0.8) * 0.07;
    sideModule.current.position.x = 1.15 + Math.sin(t * 0.65) * 0.06;
  });

  return (
    <group ref={follower}>
      <group ref={assembly} rotation={[0.18, -0.35, -0.08]}>
        {/* Main structural block */}
        <mesh geometry={blockGeometry}>
          <meshStandardMaterial color={SURFACE} metalness={0.5} roughness={0.55} />
        </mesh>
        <Edges geometry={blockGeometry} />

        {/* Glowing internal core */}
        <mesh position={[0, 0, 0.66]}>
          <boxGeometry args={[0.65, 0.55, 0.06]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.6}
            roughness={0.4}
          />
        </mesh>

        {/* Floating upper assembly */}
        <group ref={upperModule} position={[0, 1.05, 0]}>
          <mesh geometry={upperGeometry}>
            <meshStandardMaterial color={SURFACE_LIGHT} metalness={0.55} roughness={0.45} />
          </mesh>
          <Edges geometry={upperGeometry} />
          <mesh position={[0, 0.23, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.18, 8]} />
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.35} />
          </mesh>
        </group>

        {/* Side module */}
        <group ref={sideModule} position={[1.15, 0.05, 0]}>
          <mesh geometry={sideGeometry}>
            <meshStandardMaterial color={SURFACE_LIGHT} metalness={0.45} roughness={0.5} />
          </mesh>
          <Edges geometry={sideGeometry} />
        </group>

        {/* Base plate */}
        <group position={[0, -0.85, 0]}>
          <mesh geometry={baseGeometry}>
            <meshStandardMaterial color="#0e120e" metalness={0.3} roughness={0.7} />
          </mesh>
          <Edges geometry={baseGeometry} />
        </group>

        {/* Exploded-view connector lines */}
        <Line
          points={[[0, 0.65, 0], [0, 0.88, 0]]}
          color={ACCENT}
          lineWidth={1}
          dashed
          dashSize={0.06}
          gapSize={0.04}
        />
        <Line
          points={[[0.78, 0.05, 0], [0.86, 0.05, 0]]}
          color={ACCENT}
          lineWidth={1}
          dashed
        />
      </group>
    </group>
  );
}

type HeroSceneProps = {
  // Element whose pointer movement drives the model (defaults to the canvas).
  eventSource?: RefObject<HTMLElement | null>;
};

export default function HeroScene({ eventSource }: HeroSceneProps) {
  return (
    <Canvas
      eventSource={eventSource as RefObject<HTMLElement> | undefined}
      eventPrefix="client"
      camera={{ position: [4, 3, 6], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Fog in the page background colour dissolves the floor into the page. */}
      <fog attach="fog" args={[BACKGROUND, 8.5, 18]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={2} />
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color={ACCENT} />

      <gridHelper
        args={[48, 96, "#2c3626", "#171c17"]}
        position={[0, -1.12, 0]}
      />
      <Assembly />
    </Canvas>
  );
}
