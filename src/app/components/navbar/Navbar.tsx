"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Lumora
      </Link>
      <div className={styles.navLinks}>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
