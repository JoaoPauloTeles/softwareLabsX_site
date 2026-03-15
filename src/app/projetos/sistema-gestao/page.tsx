import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'Sistema de Gestão | Software Labs X',
  description: 'ERP personalizado que integra vendas, estoque, financeiro e RH em uma única plataforma, eliminando retrabalho e dando visibilidade total ao negócio.',
}

export default function SistemaGestaoPage() {
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
              <h1 className={styles.title}>Sistema de Gestão</h1>
              <p className={styles.subtitle}>
                ERP personalizado que integra vendas, estoque, financeiro e RH em uma única plataforma, eliminando retrabalho e dando visibilidade total ao negócio.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/management system image.jpg"
                alt="Sistema de Gestão"
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
                PMEs em crescimento operavam com dados em planilhas desatualizadas, sistemas desconectados e processos manuais que não escalavam. Cada área tinha sua ferramenta, ninguém enxergava o todo, e decisões eram tomadas com informações defasadas.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Construímos um sistema de gestão sob medida que centraliza todas as operações: pedidos de vendas alimentam o estoque em tempo real, o financeiro registra automaticamente e o RH acompanha desempenho. Com acesso via web ou mobile, gestores têm visão completa do negócio de qualquer lugar.
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
            {['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'].map((tech) => (
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
