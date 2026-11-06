"use client";

import { useState } from "react";
import { Menu, MoveUpRight, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a href="#home" className="brand" aria-label="Home">
        <span className="brand-mark">{siteConfig.initials}.</span>
        <span>{siteConfig.name}</span>
      </a>

      <nav className="nav-links" aria-label="Primary">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a href="#contact" className="nav-cta">
          Let&apos;s talk <MoveUpRight size={15} />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-index">0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
