'use client'

import styles from './Values.module.css'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Excelência',
    description: 'Compromisso com a qualidade em cada detalhe, buscando sempre superar as expectativas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Integridade',
    description: 'Honestidade, ética e transparência em todas as nossas relações e decisões.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Colaboração',
    description: 'Trabalho em equipe para alcançar resultados extraordinários juntos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Cliente no Centro',
    description: 'Foco total em entender e superar as necessidades de cada cliente.',
  },
]

export default function Values() {
  return (
    <section className={styles.values}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Nossos <span className={styles.accent}>Valores</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Princípios que guiam cada decisão e cada linha de código que escrevemos.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((value) => (
            <article key={value.title} className={styles.card}>
              <div className={styles.icon}>{value.icon}</div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
