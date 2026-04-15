import Link from 'next/link'
import Image from 'next/image'
import styles from '../[slug]/projeto.module.css'
import k from './keepit.module.css'

export const metadata = {
  title: 'KeepIT — IA para Manutenção Industrial | Software Labs X',
  description: 'KeepIT centraliza documentos, equipamentos e histórico operacional em um app mobile com IA. Reduza paradas não planejadas e proteja o conhecimento da sua planta.',
}

const features = [
  {
    num: '01',
    title: 'Assistente Técnico com IA',
    description: 'Chat inteligente treinado com os documentos da sua empresa — manuais, procedimentos, fichas técnicas. Qualquer técnico tem acesso instantâneo ao conhecimento acumulado da planta. Suporte a texto e imagem: fotografe um componente e pergunte o que está errado.',
  },
  {
    num: '02',
    title: 'Biblioteca Técnica Centralizada',
    description: 'Documentos PDF indexados automaticamente por IA com busca semântica. Checklists extraídos automaticamente de procedimentos. Vinculação direta entre documentos e equipamentos via QR Code.',
  },
  {
    num: '03',
    title: 'Gestão Completa de Equipamentos',
    description: 'Cadastro de máquinas com histórico de horímetro, agendamentos de manutenção preventiva por horas ou dias, rastreamento de não-conformidades e histórico de inspeções. Tudo acessível por QR Code fixado no equipamento.',
  },
  {
    num: '04',
    title: 'Checklists Digitais com Evidência',
    description: 'Inspeções executadas no celular, com foto de evidência por item, histórico de sessões e exportação em PDF para auditorias. Funciona offline — os dados sincronizam automaticamente quando a conexão é restaurada.',
  },
  {
    num: '05',
    title: 'Analytics e Rastreabilidade Total',
    description: 'Dashboard com conformidade por período e por equipamento, identificando os pontos críticos da planta. Trilha de auditoria completa de cada ação — quem fez, o que fez, quando fez.',
  },
  {
    num: '06',
    title: 'Gestão de Ocorrências',
    description: 'Registro, acompanhamento e resolução de não-conformidades com atribuição de responsável, prazo e histórico de status. Nenhuma ocorrência cai no esquecimento.',
  },
]

const results = [
  { value: '-40%', label: 'Tempo de Diagnóstico', desc: 'Encontre a informação certa na primeira tentativa, sem perder tempo em pilhas de papel ou pastas de rede.' },
  { value: '-60%', label: 'Tempo de Onboarding', desc: 'Novos técnicos se tornam produtivos em dias, não meses. A curva de aprendizado cai drasticamente.' },
  { value: 'Zero', label: 'Perda de Conhecimento', desc: 'A aposentadoria ou saída de um operador sênior não leva mais o conhecimento da planta junto.' },
  { value: '100%', label: 'Rastreabilidade', desc: 'Cada inspeção, ajuste e ocorrência registrados com evidência fotográfica para auditorias e compliance.' },
]

const forWho = [
  { icon: '🏭', title: 'Porte da Equipe', desc: 'Indústrias com 10 a 500 técnicos de manutenção' },
  { icon: '⚡', title: 'Complexidade Operacional', desc: 'Plantas com múltiplas linhas e equipamentos críticos' },
  { icon: '📄', title: 'Maturidade Digital', desc: 'Empresas que ainda dependem de papel ou planilhas' },
  { icon: '🔍', title: 'Conformidade', desc: 'Operações que precisam comprovar conformidade para auditorias ISO, NR-12 ou clientes' },
]

const differentials = [
  'IA treinada exclusivamente nos seus documentos internos',
  'App mobile nativo para iOS e Android',
  'Funciona offline com sincronização automática',
  'Implementação em dias, não meses',
  'White-label com a identidade visual da sua empresa',
  'Custo acessível para médias empresas — sem surpresas',
]

const included = [
  { icon: '⚙️', text: 'Configuração inicial e importação de documentos' },
  { icon: '👥', text: 'Treinamento da equipe (presencial ou remoto)' },
  { icon: '💬', text: 'Suporte dedicado incluso' },
  { icon: '🔄', text: 'Atualizações contínuas da plataforma' },
  { icon: '🎨', text: 'Identidade visual customizada com logo e cores da sua empresa' },
]

const comparison = [
  { feature: 'IA treinada nos seus documentos', keepit: true, planilha: false, cmms: false },
  { feature: 'App mobile nativo (iOS + Android)', keepit: true, planilha: false, cmms: 'partial' },
  { feature: 'Funciona offline', keepit: true, planilha: true, cmms: false },
  { feature: 'Implementação em dias, não meses', keepit: true, planilha: true, cmms: false },
  { feature: 'White-label com sua identidade visual', keepit: true, planilha: null, cmms: false },
  { feature: 'Custo acessível para médias empresas', keepit: true, planilha: true, cmms: false },
]

function CheckIcon({ value }: { value: boolean | string | null }) {
  if (value === true) return <span className={k.checkYes}>✓</span>
  if (value === false) return <span className={k.checkNo}>✕</span>
  if (value === 'partial') return <span className={k.checkPartial}>Parcial</span>
  return <span style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>—</span>
}

export default function KeepITPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
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
                O conhecimento da sua planta não pode depender da memória de ninguém.
                KeepIT coloca toda a inteligência técnica da sua empresa na palma da mão —
                disponível para qualquer técnico, a qualquer momento.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/Industrial App Image.jpg"
                alt="KeepIT — Inteligência Artificial para Manutenção Industrial"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== URGENCY STRIP ===== */}
      <div className={k.heroStrip}>
        <div className="container">
          <div className={k.heroStripInner}>
            <span className={k.heroStripBadge}>
              Custo real
            </span>
            <p className={k.heroStripText}>
              Uma parada não planejada custa em média{' '}
              <span className={k.heroStripHighlight}>R$ 4.800 por minuto</span>{' '}
              no setor industrial brasileiro — e a maioria é evitável.
            </p>
          </div>
        </div>
      </div>

      {/* ===== O PROBLEMA ===== */}
      <section className={k.problemSection}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className={k.problemLabel}>O Problema</span>
              <h2 className={k.problemHeadline}>
                Por trás de cada parada existe sempre{' '}
                <span className={k.problemHighlight}>a mesma história</span>
              </h2>
              <p className={k.problemBody}>
                Gestores de manutenção convivem todos os dias com os mesmos gargalos —
                não por falta de esforço, mas por falta de uma ferramenta que realmente
                resolva o problema na raiz.
              </p>
              <div className={k.problemSymptoms}>
                <div className={k.symptomItem}>
                  <div className={k.symptomIcon}>1</div>
                  <p className={k.symptomText}>
                    <strong style={{ color: 'white' }}>O técnico certo não estava disponível.</strong>{' '}
                    Só ele sabia como aquele equipamento se comportava.
                  </p>
                </div>
                <div className={k.symptomItem}>
                  <div className={k.symptomIcon}>2</div>
                  <p className={k.symptomText}>
                    <strong style={{ color: 'white' }}>O documento certo não foi encontrado a tempo.</strong>{' '}
                    Manual em pasta, procedimento por e-mail, especificação numa planilha antiga.
                  </p>
                </div>
                <div className={k.symptomItem}>
                  <div className={k.symptomIcon}>3</div>
                  <p className={k.symptomText}>
                    <strong style={{ color: 'white' }}>O histórico do equipamento estava fragmentado.</strong>{' '}
                    Papel, planilha, memória de quem estava lá — informação inacessível quando mais importa.
                  </p>
                </div>
              </div>
              <blockquote className={k.problemQuote}>
                "Hoje, o conhecimento da sua planta vive na cabeça de pessoas — e isso é um risco que você não pode continuar correndo."
              </blockquote>
            </div>
            <div className={k.problemStats}>
              <div className={k.problemStatCard}>
                <div className={k.problemStatValue}>R$ 4.800</div>
                <div className={k.problemStatLabel}>Por minuto de parada</div>
                <p className={k.problemStatDesc}>Custo médio de uma parada não planejada no setor industrial brasileiro.</p>
              </div>
              <div className={k.problemStatCard}>
                <div className={k.problemStatValue}>60%</div>
                <div className={k.problemStatLabel}>Mais lento no onboarding</div>
                <p className={k.problemStatDesc}>Tempo que novos técnicos perdem para se tornar produtivos sem acesso ao conhecimento acumulado da planta.</p>
              </div>
              <div className={k.problemStatCard}>
                <div className={k.problemStatValue}>100%</div>
                <div className={k.problemStatLabel}>Do conhecimento em risco</div>
                <p className={k.problemStatDesc}>Quando um técnico sênior se aposenta ou sai, leva consigo anos de conhecimento tácito sobre os equipamentos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI SHOWCASE ===== */}
      <section className={k.aiShowcase}>
        <div className="container">
          <div className={k.aiShowcaseInner}>
            <div className={k.aiShowcaseText}>
              <span className="solutionLabel">A Solução</span>
              <h2 className={k.aiShowcaseHeadline}>
                A inteligência técnica da sua empresa,<br />
                disponível em segundos
              </h2>
              <p className={k.aiShowcaseBody}>
                O KeepIT é um sistema de gestão de manutenção potencializado por Inteligência Artificial,
                entregue como aplicativo mobile. Ele centraliza pessoas, equipamentos, documentos e
                histórico operacional — e coloca tudo isso disponível para qualquer técnico, na palma da mão.
              </p>
              <p className={k.aiShowcaseBody} style={{ marginBottom: 0 }}>
                O assistente de IA é treinado exclusivamente com <strong>os documentos da sua própria empresa</strong>.
                Pergunte qualquer coisa e receba a resposta com a referência exata do manual técnico.
              </p>
            </div>

            {/* Chat Window */}
            <div className={k.aiChatWindow}>
              <div className={k.aiChatHeader}>
                <div className={k.aiChatDots}>
                  <div className={k.aiChatDot} style={{ background: '#ef4444' }} />
                  <div className={k.aiChatDot} style={{ background: '#f59e0b' }} />
                  <div className={k.aiChatDot} style={{ background: '#10b981' }} />
                </div>
                <span className={k.aiChatTitle}>KeepIT — Assistente Técnico</span>
              </div>
              <div className={k.aiChatBody}>
                <div className={k.aiMessageUser}>
                  Qual é o torque de aperto para a porca de fixação do rotor da bomba centrífuga da Linha 3? E qual a sequência de aperto dos parafusos da carcaça?
                </div>
                <div className={k.aiMessageBot}>
                  <div className={k.aiAvatar}>K</div>
                  <div className={k.aiMessageBotText}>
                    Para a <strong>Bomba Centrífuga CB-3200 (Linha 3)</strong>, conforme o manual técnico do fabricante:
                    <br /><br />
                    • <strong>Torque da impeller nut:</strong> 85 Nm ± 5%
                    <br />
                    • <strong>Sequência de aperto da carcaça:</strong> padrão estrela, em 3 passagens (30%, 70% e 100% do torque final de 45 Nm)
                    <br /><br />
                    Recomenda-se verificar a uniformidade da junta de vedação após o aperto final.
                    <div className={k.aiSourceBadge}>
                      ✓ Manual Técnico CB-3200 · pág. 47
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className={k.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <p className={styles.sectionText}>
            Seis módulos integrados que cobrem toda a operação de manutenção — do diagnóstico ao registro de conformidade.
          </p>
          <div className={k.featuresGrid}>
            {features.map((f) => (
              <div key={f.num} className={k.featureCard}>
                <div className={k.featureNumber}>{f.num}</div>
                <h3 className={k.featureTitle}>{f.title}</h3>
                <p className={k.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTADOS ===== */}
      <section className={k.resultsSection}>
        <div className="container">
          <h2 className={k.resultsSectionTitle}>Resultados Esperados</h2>
          <p className={k.resultsSectionSubtitle}>
            Impacto mensurável já nas primeiras semanas de uso.
          </p>
          <div className={k.resultsGrid}>
            {results.map((r) => (
              <div key={r.label} className={k.resultCard}>
                <div className={k.resultValue}>{r.value}</div>
                <div className={k.resultLabel}>{r.label}</div>
                <p className={k.resultDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM ===== */}
      <section className={k.forWhoSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Para Quem é o KeepIT</h2>
          <p className={styles.sectionText}>
            Desenvolvido para indústrias que entendem que a manutenção é o coração da operação.
          </p>
          <div className={k.forWhoGrid}>
            {forWho.map((f) => (
              <div key={f.title} className={k.forWhoCard}>
                <div className={k.forWhoIconWrap}>{f.icon}</div>
                <div>
                  <p className={k.forWhoTitle}>{f.title}</p>
                  <p className={k.forWhoDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARATIVO ===== */}
      <section className={k.comparisonSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Diferenciais Competitivos</h2>
          <p className={styles.sectionText}>
            Compare o KeepIT com as alternativas que sua equipe usa hoje.
          </p>
          <table className={k.comparisonTable}>
            <thead>
              <tr>
                <th className={k.thFeature}>Funcionalidade</th>
                <th className={k.thKeepIt}>KeepIT</th>
                <th className={k.thOther}>Planilhas / Papel</th>
                <th className={k.thOther}>CMMS Tradicional</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature}>
                  <td className={k.featureRowLabel}>{row.feature}</td>
                  <td><CheckIcon value={row.keepit} /></td>
                  <td><CheckIcon value={row.planilha} /></td>
                  <td><CheckIcon value={row.cmms} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== PROPOSTA COMERCIAL ===== */}
      <section className={k.proposalSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Proposta Comercial</h2>
          <p className={styles.sectionText}>
            Simples, transparente e sem burocracia.
          </p>
          <div className={k.proposalGrid}>
            {/* Card de preço */}
            <div className={k.proposalCard}>
              <h3>Assinatura Simples e Flexível</h3>
              <p>Mensal por empresa, com valores escalonados por número de usuários ativos. Sem surpresas, sem letras miúdas.</p>
              <div className={k.proposalPills}>
                {['Sem custo de implementação.', 'Sem contrato de longo prazo.', 'Resultado visível em 30 dias.'].map((item) => (
                  <div key={item} className={k.proposalPill}>
                    <div className={k.proposalPillCheck}>✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <hr className={k.proposalDivider} />
              <p className={k.proposalIncludedTitle}>O que está incluso:</p>
              <div className={k.proposalIncludedList}>
                {included.map((item) => (
                  <div key={item.text} className={k.proposalIncludedItem}>
                    <div className={k.proposalIncludedIcon}>{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais */}
            <div>
              <h3 className={k.differentialsTitle}>Por que escolher o KeepIT?</h3>
              <p className={k.differentialsSubtitle}>
                Desenvolvido por quem entende de tecnologia e respeita a realidade da operação industrial.
                Sem complexidade desnecessária, sem projetos de 6 meses para entrar em produção.
              </p>
              <ul className={k.differentialsList}>
                {differentials.map((d) => (
                  <li key={d} className={k.differentialItem}>
                    <span className={k.differentialCheck}>✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={k.ctaSection}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <span className={k.ctaBadge}>
              Demonstração gratuita · 30 minutos
            </span>
            <h2 className={k.ctaHeadline}>
              Leve a IA para dentro<br />da sua manutenção.
            </h2>
            <p className={k.ctaSubtitle}>
              Uma demonstração de 30 minutos é suficiente para mostrar como o KeepIT
              funcionaria com os documentos e equipamentos da sua planta.
              Sem complexidade. Sem burocracia.
            </p>
            <div className={k.ctaActions}>
              <Link href="/contato" className={k.btnCtaPrimary}>
                Agendar Demonstração Gratuita
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/projetos" className={k.btnCtaSecondary}>
                Ver Outros Projetos
              </Link>
            </div>
            <div className={k.ctaTrustRow}>
              <div className={k.ctaTrustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Sem custo de implementação
              </div>
              <div className={k.ctaTrustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Sem contrato de longo prazo
              </div>
              <div className={k.ctaTrustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Resultado visível em 30 dias
              </div>
              <div className={k.ctaTrustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Desenvolvido por SoftwareLabsX
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
