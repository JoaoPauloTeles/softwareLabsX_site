import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'Automação de Processos | Software Labs X',
  description: 'Agentes de IA que automatizam fluxos de trabalho repetitivos e integram sistemas, liberando equipes para atividades estratégicas.',
}

export default function AutomacaoProcessosPage() {
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
              <span className={styles.category}>Automação</span>
              <h1 className={styles.title}>Automação de Processos</h1>
              <p className={styles.subtitle}>
                Agentes de IA que automatizam fluxos de trabalho repetitivos e integram sistemas, liberando equipes para atividades estratégicas.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/Automacao de Processos.jpg"
                alt="Automação de Processos"
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
                Equipes desperdiçavam horas diárias em tarefas manuais e repetitivas: copiar dados entre sistemas, enviar e-mails de status, gerar relatórios e aprovar etapas simples. Isso gerava erros, atrasos e desmotivação.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Criamos agentes inteligentes com Claude API e n8n que monitoram eventos, tomam decisões e executam ações automaticamente entre sistemas via APIs. Um processo que levava horas passa a rodar em minutos, com rastreabilidade completa e zero intervenção humana nas etapas repetitivas.
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
            {['Python', 'Claude API', 'n8n', 'REST APIs'].map((tech) => (
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
