import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'Inspeção Industrial | Software Labs X',
  description: 'Sistema de visão computacional que detecta defeitos em tempo real na linha de produção, substituindo a inspeção manual por precisão de IA.',
}

export default function InspecaoIndustrialPage() {
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
              <span className={styles.category}>Visão Computacional</span>
              <h1 className={styles.title}>Inspeção Industrial</h1>
              <p className={styles.subtitle}>
                Sistema de visão computacional que detecta defeitos em tempo real na linha de produção, substituindo a inspeção manual por precisão de IA.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/Industrial App Image.jpg"
                alt="Inspeção Industrial"
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
                A inspeção visual manual era lenta, custosa e inconsistente. Peças defeituosas passavam despercebidas, gerando retrabalho, desperdício de material e risco de recalls. Inspetores humanos cansavam com a repetição e não conseguiam manter atenção constante em linhas de alta velocidade.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Instalamos câmeras industriais integradas a modelos de visão computacional treinados para identificar defeitos específicos de cada produto em milissegundos. O sistema sinaliza automaticamente itens com não-conformidade, gera relatórios de qualidade por turno e aprende continuamente com novos padrões de falha.
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
            {['Python', 'OpenCV', 'TensorFlow', 'AWS'].map((tech) => (
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
