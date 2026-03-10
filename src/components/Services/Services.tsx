'use client'

import Link from 'next/link'
import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Aplicativos Web',
    description: 'Desenvolvimento de aplicações web modernas, responsivas e escaláveis utilizando as tecnologias mais avançadas do mercado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com experiências de usuário excepcionais e performance otimizada.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Visão Computacional',
    description: 'Sistemas inteligentes de processamento de imagem e vídeo para automação, análise e reconhecimento de padrões.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
      </svg>
    ),
    title: 'Inteligência Artificial',
    description: 'Soluções de IA e Machine Learning personalizadas para otimizar processos e extrair insights valiosos dos dados.',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicos">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Nossos <span className={styles.accent}>Serviços</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Oferecemos um portfólio completo de serviços de desenvolvimento
            de software para atender às suas necessidades específicas.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <Link href="#contato" className={styles.link}>
                Saiba mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
