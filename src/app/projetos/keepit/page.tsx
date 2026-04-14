import Link from 'next/link'
import Image from 'next/image'
import styles from '../[slug]/projeto.module.css'

export const metadata = {
  title: 'KeepIT | Software Labs X',
  description: 'Inteligência Artificial para Manutenção Industrial. Centralize pessoas, equipamentos, documentos e histórico operacional em um único app mobile.',
}

const features = [
  {
    icon: '🤖',
    title: 'Assistente Técnico com IA',
    description: 'Chat inteligente treinado com os documentos da sua empresa — manuais, procedimentos, fichas técnicas. Fotografe um componente e pergunte o que está errado.',
  },
  {
    icon: '📚',
    title: 'Biblioteca Técnica Centralizada',
    description: 'Documentos PDF indexados automaticamente por IA com busca semântica. Vinculação direta entre documentos e equipamentos via QR Code.',
  },
  {
    icon: '⚙️',
    title: 'Gestão de Equipamentos',
    description: 'Cadastro de máquinas com histórico de horímetro, agendamentos de manutenção preventiva e rastreamento de não-conformidades. Tudo via QR Code.',
  },
  {
    icon: '📋',
    title: 'Checklists Digitais',
    description: 'Inspeções no celular com foto de evidência por item. Funciona offline — dados sincronizam automaticamente quando a conexão é restaurada.',
  },
  {
    icon: '📈',
    title: 'Analytics e Rastreabilidade',
    description: 'Dashboard com conformidade por período e equipamento. Trilha de auditoria completa — quem fez, o que fez, quando fez.',
  },
  {
    icon: '🚨',
    title: 'Gestão de Ocorrências',
    description: 'Registro, acompanhamento e resolução de não-conformidades com atribuição de responsável, prazo e histórico de status.',
  },
]

const results = [
  { value: '-40%', label: 'Tempo de Diagnóstico', desc: 'Encontre a informação certa na primeira tentativa' },
  { value: '-60%', label: 'Tempo de Onboarding', desc: 'Novos técnicos produtivos em dias, não meses' },
  { value: 'Zero', label: 'Perda de Conhecimento', desc: 'A saída de um sênior não leva o conhecimento junto' },
  { value: '100%', label: 'Rastreabilidade', desc: 'Cada inspeção e ocorrência registrados com evidência fotográfica' },
]

const forWho = [
  { icon: '🏭', title: 'Porte da Equipe', desc: 'Indústrias com 10 a 500 técnicos de manutenção' },
  { icon: '⚡', title: 'Complexidade Operacional', desc: 'Plantas com múltiplas linhas e equipamentos críticos' },
  { icon: '📄', title: 'Maturidade Digital', desc: 'Empresas que ainda dependem de papel ou planilhas' },
  { icon: '🔍', title: 'Conformidade', desc: 'Operações que precisam comprovar conformidade para auditorias ISO, NR-12 ou clientes' },
]

const differentials = [
  'IA treinada nos seus documentos internos',
  'App mobile nativo para iOS e Android',
  'Funciona offline com sincronização automática',
  'Implementação em dias, não meses',
  'White-label com a identidade visual da sua empresa',
  'Custo acessível para médias empresas',
]

const included = [
  { icon: '⚙️', text: 'Configuração inicial e importação de documentos' },
  { icon: '👥', text: 'Treinamento da equipe (presencial ou remoto)' },
  { icon: '💬', text: 'Suporte dedicado' },
  { icon: '🔄', text: 'Atualizações contínuas da plataforma' },
  { icon: '🎨', text: 'Identidade visual customizada com logo e cores da sua empresa' },
]

export default function KeepITPage() {
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
              <span className={styles.category}>Mobile App + IA Industrial</span>
              <h1 className={styles.title}>KeepIT</h1>
              <p className={styles.subtitle}>
                Inteligência Artificial para Manutenção Industrial. Centralize pessoas,
                equipamentos, documentos e histórico operacional — disponível para qualquer
                técnico, na palma da mão, em segundos.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/Industrial App Image.jpg"
                alt="KeepIT"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '0.375rem 1rem', background: 'rgba(255,255,255,0.15)', borderRadius: 100, fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem' }}>O PROBLEMA</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Uma parada não planejada custa em média <span style={{ color: '#60a5fa' }}>R$ 4.800 por minuto</span> no setor industrial.
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.7 }}>
              O técnico certo não estava disponível. O documento certo não foi encontrado a tempo.
              O histórico do equipamento estava em papel ou planilhas desconexas.
              Hoje, o conhecimento da sua planta vive na cabeça de pessoas — e isso é um risco.
            </p>
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
                Indústrias perdem tempo e dinheiro porque o conhecimento técnico está fragmentado:
                manuais em pastas, procedimentos por e-mail, histórico de máquinas em planilhas
                desatualizadas. Quando um técnico sênior sai, ele leva o conhecimento junto.
                Novos técnicos levam meses para se tornar produtivos.
              </p>
            </div>
            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                O KeepIT é um sistema de gestão de manutenção potencializado por IA, entregue
                como aplicativo mobile. Centralize documentos, equipamentos e histórico operacional.
                Pergunte ao assistente sobre qualquer procedimento técnico e receba a resposta com
                a referência exata do manual da sua própria empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {features.map((f) => (
              <div key={f.title} className={styles.contentBlock} style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 className={styles.contentTitle} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p className={styles.contentText} style={{ fontSize: '1rem' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Resultados Esperados</h2>
          <div className={styles.resultsGrid} style={{ marginTop: '3rem' }}>
            {results.map((r) => (
              <div key={r.label} className={styles.resultCard}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--primary)', marginBottom: '0.5rem' }}>{r.value}</div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{r.label}</div>
                <p className={styles.resultText} style={{ fontSize: '0.9rem' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Para Quem é o KeepIT</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {forWho.map((f) => (
              <div key={f.title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.75rem', background: 'var(--background-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '2rem', lineHeight: 1 }}>{f.icon}</div>
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.4rem' }}>{f.title}</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais + Proposta Comercial */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Diferenciais */}
            <div>
              <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>Nossos Diferenciais</h2>
              <p className={styles.sectionText} style={{ fontSize: '1rem', marginBottom: '2rem' }}>Desenvolvido por quem entende de tecnologia e respeita a operação industrial.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {differentials.map((d) => (
                  <li key={d} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                    <span style={{ color: '#10B981', fontWeight: 700, marginTop: '0.1rem' }}>✓</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposta Comercial */}
            <div className={styles.contentBlock} style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #1e3a8a, #2563eb)', color: 'white', border: 'none' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Assinatura Simples e Flexível</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '1.5rem' }}>Mensal por empresa, escalonada por usuários ativos.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                {['Sem custo de implementação.', 'Sem contrato de longo prazo.', 'Resultado visível em 30 dias.'].map((i) => (
                  <p key={i} style={{ fontWeight: 700, fontSize: '0.95rem' }}>✓ {i}</p>
                ))}
              </div>
              <p style={{ fontWeight: 700, fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>O que está incluso:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {included.map((item) => (
                  <li key={item.text} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', opacity: 0.9 }}>
                    <span>{item.icon}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Leve a IA para dentro da sua manutenção.</h2>
          <p>Uma demonstração de 30 minutos é suficiente para mostrar como o KeepIT funcionaria com os documentos e equipamentos da sua planta.</p>
          <div className={styles.ctaActions}>
            <Link href="/contato" className="btn btn-primary">Agendar Demonstração Gratuita</Link>
            <Link href="/projetos" className="btn btn-secondary">Ver Outros Projetos</Link>
          </div>
        </div>
      </section>
    </>
  )
}
