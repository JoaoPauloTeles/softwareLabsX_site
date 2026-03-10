import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'EngemanX | Software Labs X',
  description: 'Plataforma robusta para controle de manutenções corretivas e preventivas com agendamento automático.',
}

const technologies = ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']

const results = [
  { icon: '🔧', text: 'Redução média de 35% no tempo de paradas das máquinas' },
  { icon: '📦', text: 'Melhor controle de estoque e previsibilidade de custos' },
  { icon: '📄', text: 'Relatórios automáticos que agilizam auditorias internas' },
  { icon: '⚙️', text: 'Planos de manutenção personalizados por equipamento' },
]

export default function EngemanXPage() {
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
              <h1 className={styles.title}>EngemanX</h1>
              <p className={styles.subtitle}>
                Plataforma robusta para controle de manutenções corretivas e 
                preventivas, com agendamento automático, histórico detalhado de 
                intervenções e gestão de peças e equipamentos.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="EngemanX"
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
                Indústrias precisavam reduzir o tempo de parada das máquinas e 
                centralizar informações de manutenção. O controle era manual e 
                disperso entre planilhas, causando atrasos nas manutenções e 
                custos elevados com paradas não programadas.
              </p>
            </div>
            
            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Desenvolvemos uma plataforma que permite criar planos de manutenção 
                personalizados, controlar custos operacionais, gerar relatórios de 
                performance e armazenar documentos técnicos. Ideal para empresas 
                que precisam otimizar a vida útil de seus ativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className={styles.section}>
        <div className="container">
          <span className="section-label">Resultados</span>
          <h2 className={styles.sectionTitle}>Impacto do Projeto</h2>
          <p className={styles.sectionText}>
            O EngemanX revolucionou a gestão de manutenção industrial, 
            reduzindo paradas não programadas e otimizando recursos.
          </p>
          
          <div className={styles.resultsGrid}>
            {results.map((result, index) => (
              <div key={index} className={styles.resultCard}>
                <div className={styles.resultIcon}>{result.icon}</div>
                <p className={styles.resultText}>{result.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <span className="section-label">Stack</span>
          <h2 className={styles.sectionTitle}>Tecnologias Utilizadas</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Tem um projeto similar em mente?</h2>
          <p>Vamos conversar sobre como podemos otimizar sua operação.</p>
          <div className={styles.ctaActions}>
            <Link href="/contato" className="btn btn-primary">
              Solicitar Orçamento
            </Link>
            <Link href="/projetos" className="btn btn-secondary">
              Ver Outros Projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
