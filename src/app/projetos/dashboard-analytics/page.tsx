import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'Dashboard Analytics | Software Labs X',
  description: 'Plataforma de análise de dados em tempo real com dashboards interativos e relatórios automatizados para tomada de decisão ágil.',
}

export default function DashboardAnalyticsPage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar aos projetos
          </Link>

          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <span className={styles.category}>Web App</span>
              <h1 className={styles.title}>Dashboard Analytics</h1>
              <p className={styles.subtitle}>
                Plataforma de análise de dados em tempo real com dashboards interativos e relatórios automatizados para tomada de decisão ágil.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/dashboard analitycs image.jpg"
                alt="Dashboard Analytics"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={`${styles.contentBlock} ${styles.challenge}`}>
              <div className={`${styles.contentIcon} ${styles.challenge}`}>🎯</div>
              <h2 className={styles.contentTitle}>O Desafio</h2>
              <p className={styles.contentText}>
                Gestores e analistas tomavam decisões com dados espalhados em planilhas, e-mails e sistemas desconectados. Sem visão centralizada, reuniões consumiam horas para consolidar informações e os insights chegavam tarde demais para agir.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Desenvolvemos uma plataforma web que unifica todas as fontes de dados em dashboards interativos com atualização em tempo real. Alertas automáticos notificam o gestor quando métricas fogem do padrão, e relatórios são gerados e enviados sem intervenção manual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Tecnologias</h2>
          <div className={styles.techGrid}>
            {['React', 'Node.js', 'PostgreSQL', 'Chart.js'].map((tech) => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Tem um projeto similar em mente?</h2>
          <p>Vamos conversar sobre como podemos ajudar sua empresa.</p>
          <div className={styles.ctaActions}>
            <Link href="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            <Link href="/projetos" className="btn btn-secondary">Ver Outros Projetos</Link>
          </div>
        </div>
      </section>
    </>
  )
}
