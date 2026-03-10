'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

const stats = [
  { value: '50+', label: 'Projetos Entregues' },
  { value: '98%', label: 'Clientes Satisfeitos' },
  { value: '5+', label: 'Anos de Experiência' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Inovação em Software
            </div>

            <h1 className={styles.title}>
              Transformando<br />
              <span className={styles.highlight}>Ideias</span> em<br />
              Realidade
            </h1>

            <p className={styles.description}>
              Desenvolvemos soluções tecnológicas de ponta que capacitam 
              empresas a prosperar em um mundo digital em constante evolução.
            </p>

            <div className={styles.actions}>
              <Link href="#contato" className="btn btn-primary">
                Iniciar Projeto
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="#servicos" className="btn btn-secondary">
                Nossos Serviços
              </Link>
            </div>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src="/videos/video_intro_software_labs.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
