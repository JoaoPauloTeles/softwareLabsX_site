import Link from 'next/link'
import styles from './AutomationSpot.module.css'

const offerings = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    title: 'Automação de Processos',
    description:
      'Eliminate tarefas manuais repetitivas e integre sistemas que não conversam entre si. Fluxos automáticos que rodam sem intervenção humana — do gatilho ao resultado.',
    tags: ['RPA', 'Integrações API', 'Webhooks', 'No-code + código'],
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
      </svg>
    ),
    title: 'Agentes de IA',
    description:
      'Agentes autônomos que executam tarefas, tomam decisões e respondem a eventos — treinados com os documentos e regras do seu negócio. Do atendimento ao back-office.',
    tags: ['LLMs', 'RAG', 'Função de ferramentas', 'Multi-agente'],
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
        <path d="M13 13h4M13 17h4M7 13h.01M7 17h.01"/>
      </svg>
    ),
    title: 'Dashboards Analíticos',
    description:
      'Painéis interativos que transformam dados dispersos em visão estratégica. Indicadores em tempo real, filtros dinâmicos e exportação — sem depender de TI para cada consulta.',
    tags: ['KPIs em tempo real', 'Filtros dinâmicos', 'Multi-fonte', 'Exportação'],
  },
]

export default function AutomationSpot() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Em destaque</span>
          <h2 className={styles.title}>
            Três serviços que transformam{' '}
            <span className={styles.accent}>operação em resultado</span>
          </h2>
          <p className={styles.subtitle}>
            Automatize o que é repetitivo, inteligência onde é necessário, visibilidade onde faz diferença.
          </p>
        </div>

        <div className={styles.grid}>
          {offerings.map((item) => (
            <div key={item.num} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{item.num}</span>
                <div className={styles.icon}>{item.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/contato" className={styles.ctaBtn}>
            Fale com a nossa equipe
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/servicos" className={styles.ctaLink}>
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </section>
  )
}
