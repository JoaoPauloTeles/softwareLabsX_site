import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'Chatbot Inteligente | Software Labs X',
  description: 'Assistente virtual com processamento de linguagem natural que resolve dúvidas, qualifica leads e atende clientes 24 horas por dia.',
}

export default function ChatbotInteligentePage() {
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
              <span className={styles.category}>IA</span>
              <h1 className={styles.title}>Chatbot Inteligente</h1>
              <p className={styles.subtitle}>
                Assistente virtual com processamento de linguagem natural que resolve dúvidas, qualifica leads e atende clientes 24 horas por dia.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/chatbot inteligente image.jpg"
                alt="Chatbot Inteligente"
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
                Empresas com alto volume de atendimento enfrentavam filas de espera, custos crescentes com equipe e clientes insatisfeitos por não serem atendidos fora do horário comercial. A equipe ficava sobrecarregada com perguntas repetitivas que impediam o foco em casos complexos.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Desenvolvemos um chatbot com NLP que compreende a intenção do usuário, responde com linguagem natural e resolve automaticamente mais de 70% dos chamados sem intervenção humana. Quando necessário, faz a triagem e transfere para o agente certo com todo o contexto da conversa já registrado.
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
            {['Python', 'NLP', 'GPT API', 'React'].map((tech) => (
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
