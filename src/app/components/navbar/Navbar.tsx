"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Lumora
      </Link>

      <button
        aria-label="Toggle menu"
        className={styles.hamburger}
        onClick={() => setOpen(s => !s)}
        aria-expanded={open}>
        <Image
          src="/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          style={{ filter: "invert(100%)" }}
        />
      </button>

      <div className={`${styles.navLinks} ${open ? styles.open : ""}`}>
        <Link href="/about" onClick={() => setOpen(false)}>
          About Us
        </Link>
        <Link href="/services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link href="/careers" onClick={() => setOpen(false)}>
          Careers
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
