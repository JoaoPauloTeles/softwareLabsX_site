'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const footerLinks = {
  empresa: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ],
  servicos: [
    { label: 'Aplicativos Web', href: '#servicos' },
    { label: 'Aplicativos Mobile', href: '#servicos' },
    { label: 'Visão Computacional', href: '#servicos' },
    { label: 'Inteligência Artificial', href: '#servicos' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
}

const socialLinks = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
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
            <p className={styles.brandDescription}>
              Transformando ideias em soluções digitais inovadoras. 
              Seu parceiro em desenvolvimento de software, IA e tecnologia.
            </p>
            <div className={styles.social}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={styles.socialLink}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Empresa</h4>
            <ul className={styles.columnList}>
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Serviços</h4>
            <ul className={styles.columnList}>
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.columnList}>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Software Labs X. Todos os direitos reservados.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
