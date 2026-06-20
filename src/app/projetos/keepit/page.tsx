import Link from 'next/link'
import Image from 'next/image'
import styles from '../[slug]/projeto.module.css'
import k from './keepit.module.css'

export const metadata = {
  title: 'KeepIT — Gestão de Manutenção com IA | Software Labs X',
  description: 'KeepIT centraliza pessoas, equipamentos, documentos e histórico operacional em um app mobile com IA. Do diagnóstico à execução — tudo em um só lugar.',
}

const steps = [
  {
    num: '01',
    title: 'Identifique o risco antes da falha',
    description: 'Com o módulo de FMECA integrado, sua equipe analisa modos de falha, calcula o RPN (Severidade × Ocorrência × Detecção) e classifica os riscos automaticamente em crítico, alto, médio e baixo — com visualização colorida por prioridade.',
  },
  {
    num: '02',
    title: 'Transforme análise em ação com um toque',
    description: 'Identificou um risco crítico? Crie uma Ordem de Serviço diretamente da FMECA, com modo de falha, ação recomendada, equipamento e prioridade já preenchidos automaticamente. Zero retrabalho, zero esquecimento.',
  },
  {
    num: '03',
    title: 'Gerencie as ordens de serviço do início ao fim',
    description: 'Acompanhe todas as OS por status — backlog, abertas, em andamento, concluídas e canceladas. Defina prazos, atribua responsáveis, receba notificações automáticas de OS vencidas ou prestes a vencer. Histórico completo de cada equipamento sempre disponível.',
  },
  {
    num: '04',
    title: 'Consulte o assistente de IA treinado na sua documentação',
    description: 'O chat de IA do KeepIT é treinado exclusivamente nos manuais, procedimentos e históricos da sua empresa. Perguntas técnicas respondidas em segundos — com a linguagem e os equipamentos da sua planta.',
  },
]

const modules = [
  { name: 'Dashboard Operacional', desc: 'Visão imediata dos KPIs: OS abertas, em andamento, vencidas e FMECA críticos — na tela inicial' },
  { name: 'Assistente de IA', desc: 'Chat treinado nos documentos da empresa, com suporte a texto e imagem' },
  { name: 'Ordens de Serviço', desc: 'Criação, atribuição, acompanhamento e histórico completo de OS' },
  { name: 'FMECA', desc: 'Análise de modos de falha com cálculo de RPN e geração de OS integrada' },
  { name: 'Biblioteca Técnica', desc: 'Indexação automática de PDFs com busca semântica inteligente' },
  { name: 'Equipamentos', desc: 'Cadastro completo com acesso por QR Code' },
  { name: 'Agendamentos', desc: 'Manutenções preventivas com alertas automáticos de vencimento' },
  { name: 'Checklists Digitais', desc: 'Inspeções móveis com evidência fotográfica e funcionamento offline' },
  { name: 'Não-Conformidades', desc: 'Registro de ocorrências com responsabilização e histórico' },
  { name: 'Analytics', desc: 'Painel gerencial com indicadores de uso, crescimento e conformidade' },
  { name: 'Exportação', desc: 'Geração de relatórios em PDF e exportação CSV para integração com outros sistemas' },
]

const results = [
  { value: '-40%', label: 'Tempo de Diagnóstico', desc: 'Encontre a informação certa na primeira tentativa, sem perder tempo em pilhas de papel ou pastas de rede.' },
  { value: '-60%', label: 'Tempo de Onboarding', desc: 'Novos técnicos se tornam produtivos em dias, não meses. A curva de aprendizado cai drasticamente.' },
  { value: 'Zero', label: 'Perda de Conhecimento', desc: 'A aposentadoria ou saída de um operador sênior não leva mais o conhecimento da planta junto.' },
  { value: '100%', label: 'Rastreabilidade', desc: 'Cada inspeção, ajuste e ocorrência registrados com evidência fotográfica para auditorias e compliance.' },
]

const forWho = [
  { icon: '🏭', title: 'Porte da Equipe', desc: 'Indústrias com 10 a 500 técnicos de manutenção' },
  { icon: '⚡', title: 'Complexidade Operacional', desc: 'Múltiplas linhas de produção e equipamentos críticos' },
  { icon: '📄', title: 'Conformidade Regulatória', desc: 'Operações que precisam comprovar conformidade para auditorias ISO, NR-12 ou clientes' },
  { icon: '🔍', title: 'Setores Atendidos', desc: 'Manufatura, alimentos e bebidas, papel e celulose, químico, automotivo, utilidades e facilities' },
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
  { icon: '🤖', text: 'Assistente de IA configurado com seus documentos em menos de 48h' },
  { icon: '👥', text: 'Treinamento da equipe (presencial ou remoto)' },
  { icon: '💬', text: 'Suporte dedicado incluso' },
  { icon: '🔄', text: 'Atualizações contínuas da plataforma' },
]

const comparison = [
  { feature: 'IA treinada nos seus documentos', keepit: true, planilha: false, cmms: false },
  { feature: 'App mobile nativo (iOS + Android)', keepit: true, planilha: false, cmms: 'partial' },
  { feature: 'FMECA com geração de OS integrada', keepit: true, planilha: false, cmms: 'rarely' },
  { feature: 'Funciona offline', keepit: true, planilha: true, cmms: 'partial' },
  { feature: 'Implementação em dias, não meses', keepit: true, planilha: true, cmms: 'rarely' },
  { feature: 'White-label com sua identidade visual', keepit: true, planilha: null, cmms: false },
]

function CheckIcon({ value }: { value: boolean | string | null }) {
  if (value === true) return <span className={k.checkYes}>✓</span>
  if (value === false) return <span className={k.checkNo}>✕</span>
  if (value === 'partial') return <span className={k.checkPartial}>Parcial</span>
  if (value === 'rarely') return <span className={k.checkPartial}>Raramente</span>
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
              <span className={styles.category}>Gestão de Manutenção · IA · Mobile App</span>
              <h1 className={styles.title}>KeepIT</h1>
              <p className={styles.subtitle}>
                Do diagnóstico à execução. Tudo em um só lugar.
                A inteligência técnica da sua planta não pode depender da memória de ninguém —
                nem ficar presa em planilhas, grupos de WhatsApp ou arquivos espalhados.
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/images/projects/Industrial App Image.jpg"
                alt="KeepIT — Gestão de Manutenção com Inteligência Artificial"
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
              Estudos do setor (Aberdeen Research) apontam custo médio de{' '}
              <span className={k.heroStripHighlight}>US$ 260 mil por hora</span>{' '}
              em paradas não planejadas — e a causa raiz, na maioria dos casos, é evitável.
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
                Toda parada não planejada parece um acidente isolado — até você notar que a causa raiz é quase sempre a mesma, se repetindo planta após planta:
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
                    <strong style={{ color: 'white' }}>O documento crítico estava inacessível.</strong>{' '}
                    Manual em pasta, procedimento por e-mail, especificação numa planilha antiga.
                  </p>
                </div>
                <div className={k.symptomItem}>
                  <div className={k.symptomIcon}>3</div>
                  <p className={k.symptomText}>
                    <strong style={{ color: 'white' }}>O histórico do equipamento estava fragmentado.</strong>{' '}
                    Papel, planilha, memória de quem estava lá — inacessível quando mais importa.
                  </p>
                </div>
                <div className={k.symptomItem}>
                  <div className={k.symptomIcon}>4</div>
                  <p className={k.symptomText}>
                    <strong style={{ color: 'white' }}>A ordem de serviço chegou tarde — ou nem chegou.</strong>{' '}
                    Sem rastreabilidade, sem responsável, sem prazo.
                  </p>
                </div>
              </div>
              <blockquote className={k.problemQuote}>
                "O KeepIT foi construído para eliminar cada um desses pontos de falha."
              </blockquote>
            </div>
            <div className={k.problemStats}>
              <div className={k.problemStatCard}>
                <div className={k.problemStatValue}>US$ 260 mil</div>
                <div className={k.problemStatLabel}>Por hora de parada</div>
                <p className={k.problemStatDesc}>Custo médio estimado por estudos do setor de manutenção industrial (Aberdeen Research).</p>
              </div>
              <div className={k.problemStatCard}>
                <div className={k.problemStatValue} style={{ fontSize: '1.4rem' }}>Onboarding</div>
                <div className={k.problemStatLabel}>Mais lento sem conhecimento</div>
                <p className={k.problemStatDesc}>Sem acesso ao conhecimento acumulado da planta, um novo técnico pode levar meses para atingir o mesmo nível de produtividade de quem já está lá há anos.</p>
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
                Uma plataforma completa.<br />
                Da análise à ação.
              </h2>
              <p className={k.aiShowcaseBody}>
                A maioria dos sistemas de manutenção gerencia o que já aconteceu.
                O KeepIT gerencia o que vai acontecer — e garante que cada ação seja executada.
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

      {/* ===== CICLO COMPLETO ===== */}
      <section className={k.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ciclo Completo de Manutenção</h2>
          <p className={styles.sectionText}>
            Quatro etapas integradas que cobrem todo o fluxo — do risco identificado à OS encerrada.
          </p>
          <div className={k.featuresGrid}>
            {steps.map((s) => (
              <div key={s.num} className={k.featureCard}>
                <div className={k.featureNumber}>{s.num}</div>
                <h3 className={k.featureTitle}>{s.title}</h3>
                <p className={k.featureDesc}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MÓDULOS ===== */}
      <section className={k.comparisonSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Todos os Módulos da Plataforma</h2>
          <p className={styles.sectionText}>
            Uma solução completa — sem precisar de ferramentas externas ou integrações complexas.
          </p>
          <table className={k.comparisonTable} style={{ marginTop: '3rem' }}>
            <thead>
              <tr>
                <th className={k.thKeepIt} style={{ textAlign: 'left', width: '30%' }}>Módulo</th>
                <th className={k.thKeepIt} style={{ textAlign: 'left' }}>O que faz</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr key={m.name}>
                  <td className={k.featureRowLabel} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.name}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== RESULTADOS ===== */}
      <section className={k.resultsSection}>
        <div className="container">
          <h2 className={k.resultsSectionTitle}>Resultados Esperados</h2>
          <p className={k.resultsSectionSubtitle}>
            Estimativas baseadas em benchmarks do setor de manutenção industrial e no desenho da plataforma.
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
          <div style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.65, fontSize: '0.9rem' }}>
            Apoio à rastreabilidade documental exigida em auditorias ISO, NR-12 e demais requisitos regulatórios
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM ===== */}
      <section className={k.forWhoSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Para Quem é o KeepIT</h2>
          <p className={styles.sectionText}>
            Desenhado para indústrias com 10 a 500 técnicos de manutenção, múltiplas linhas de produção
            e necessidade de reduzir a dependência do conhecimento individual.
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
      <section style={{ padding: '5rem 0', background: 'var(--background)' }}>
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
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.55, textAlign: 'center' }}>
            * "Parcial" indica suporte limitado ou dependente de configuração adicional. "Raramente" indica que a funcionalidade existe em alguns produtos da categoria, mas não é padrão. Comparação baseada em análise de mercado pela equipe Software Labs X.
          </p>
        </div>
      </section>

      {/* ===== PROPOSTA COMERCIAL ===== */}
      <section className={k.proposalSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Implementação em Dias, Não em Meses</h2>
          <p className={styles.sectionText}>
            Assinatura mensal por empresa, com planos escalonados por número de usuários ativos.
            Inclui configuração, treinamento, suporte contínuo e todas as atualizações — sem custos de implantação surpresa.
          </p>
          <div className={k.proposalGrid}>
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
              Veja o KeepIT funcionando<br />com os seus documentos.
            </h2>
            <p className={k.ctaSubtitle}>
              Agende uma demonstração gratuita de 30 minutos e veja como o KeepIT
              se comporta com os manuais, procedimentos e equipamentos reais da sua operação.
              Sem compromisso. Sem apresentação genérica. Com os seus dados.
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
                IA configurada em menos de 48h
              </div>
              <div className={k.ctaTrustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Sem apresentação genérica
              </div>
              <div className={k.ctaTrustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Com os seus dados reais
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
