import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'EBD PRO | Software Labs X',
  description: 'Aplicativo completo para gerenciamento de Escola Bíblica Dominical com controle de frequência, cadastro e relatórios.',
}

const technologies = ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Push Notifications']

const results = [
  { icon: '⏱️', text: '75% de economia de tempo na coleta de dados' },
  { icon: '👥', text: 'Maior envolvimento de professores e coordenação' },
  { icon: '📊', text: 'Relatórios prontos para envio às lideranças' },
  { icon: '📱', text: 'Acesso mobile para professores e coordenadores' },
]

export default function EbdProPage() {
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
              <span className={styles.category}>Mobile App</span>
              <h1 className={styles.title}>EBD PRO</h1>
              <p className={styles.subtitle}>
                Aplicativo completo para gerenciamento de Escola Bíblica Dominical, 
                oferecendo controle de frequência, cadastro de alunos e professores, 
                planejamento de aulas e relatórios detalhados.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=800&q=80"
                alt="EBD PRO"
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
                Igrejas precisam organizar presença, classes e relatórios da EBD, 
                mas os controles eram feitos em papel e planilhas, gerando retrabalho, 
                perda de informações e dificuldade no acompanhamento dos alunos.
              </p>
            </div>
            
            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Desenvolvemos um aplicativo completo que facilita a organização das 
                classes por faixa etária, acompanhamento do desenvolvimento espiritual 
                dos participantes, quizzes interativos e comunicação eficiente entre 
                coordenadores e educadores.
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
            O EBD PRO transformou a gestão das Escolas Bíblicas Dominicais, 
            trazendo eficiência e organização para igrejas de todos os tamanhos.
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
          <p>Vamos conversar sobre como podemos ajudar sua organização.</p>
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