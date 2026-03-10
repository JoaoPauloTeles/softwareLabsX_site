'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Software Labs X"
              width={48}
              height={48}
              className={styles.logoIcon}
            />
            <span className={styles.logoText}>Software Labs X</span>
          </Link>

          <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="#contato" className="btn btn-primary hide-mobile">
            Fale Conosco
          </Link>

          <button
            className={`${styles.mobileToggle} ${mobileOpen ? styles.active : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
