'use client'

import Link from 'next/link'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>
            Pronto para <span className={styles.accent}>Começar?</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Entre em contato conosco e descubra como podemos
            transformar suas ideias em soluções tecnológicas de sucesso.
          </p>
          <div className={styles.actions}>
            <Link href="#contato" className="btn btn-primary">
              Iniciar Conversa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
