import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'Reconhecimento Facial | Software Labs X',
  description: 'Sistema biométrico de controle de acesso que identifica pessoas em tempo real, eliminando cartões, senhas e registros manuais de presença.',
}

export default function ReconhecimentoFacialPage() {
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
              <h1 className={styles.title}>Reconhecimento Facial</h1>
              <p className={styles.subtitle}>
                Sistema biométrico de controle de acesso que identifica pessoas em tempo real, eliminando cartões, senhas e registros manuais de presença.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/Facial Recognition Image.jpg"
                alt="Reconhecimento Facial"
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
                Empresas dependiam de cartões de acesso perdidos, senhas compartilhadas e registros manuais de ponto. Isso gerava falhas de segurança, fraudes, falta de rastreabilidade e processos de RH ineficientes para controle de presença.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Implantamos câmeras com modelos de deep learning que reconhecem e autenticam colaboradores em menos de 1 segundo, com precisão superior a 99%. O sistema libera o acesso automaticamente, registra entradas e saídas, gera relatórios de presença e dispara alertas para acessos não autorizados.
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
            {['Python', 'OpenCV', 'Deep Learning', 'Raspberry Pi'].map((tech) => (
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
