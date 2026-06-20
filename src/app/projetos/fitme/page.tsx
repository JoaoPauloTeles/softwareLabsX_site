import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'
import f from './fitme.module.css'

export const metadata = {
  title: 'FitMe — Provador Virtual com IA | Software Labs X',
  description: 'FitMe usa IA generativa para você provar roupas virtualmente no seu corpo. Mais confiança para quem compra — menos devoluções para quem vende.',
}

const heroStats = [
  { value: '30-40s', label: 'Tempo de processamento' },
  { value: 'IA Generativa', label: 'Especializada em moda e anatomia humana' },
  { value: 'Sem retenção', label: 'Processamento e descarte imediato' },
  { value: 'LGPD', label: 'Privacidade por design' },
]

const motivosTable = [
  { pos: '1º', motivo: 'Tamanho e caimento errado', resolve: true },
  { pos: '2º', motivo: 'Produto diferente das fotos', resolve: true },
  { pos: '3º', motivo: 'Defeito, avaria ou item errado', resolve: false },
  { pos: '4º', motivo: 'Arrependimento (direito dos 7 dias)', resolve: true },
]

const steps = [
  { num: '01', title: 'Upload da foto', desc: 'Selfie frontal. Nossa IA detecta seu corpo automaticamente.' },
  { num: '02', title: 'Escolha as peças', desc: 'Catálogo integrado de peças de lojas parceiras.' },
  { num: '03', title: 'IA processa', desc: 'Visualização fotorrealista em até 40 segundos.' },
  { num: '04', title: 'Decida e compre', desc: 'Veja a peça em você. Compartilhe ou compre com um toque.' },
]

const features = [
  { title: 'Virtual Try-On', badge: 'Core', desc: 'IA Generativa cria provas virtuais fotorrealistas. Veja exatamente como a peça fica em você.' },
  { title: 'Mix & Match', badge: 'Exclusivo', desc: 'Monte looks completos combinando peças de diferentes lojas. Visualize o outfit inteiro antes de comprar.' },
  { title: 'Catálogo Integrado', badge: 'Abrangente', desc: 'Peças de lojas parceiras em um único lugar. Filtros por categoria, marca e estilo.' },
  { title: 'Social Share', badge: 'Engajamento', desc: 'Compartilhe seus looks e peça opinião de amigos antes de decidir. Moda é social.' },
  { title: 'Compra Direta', badge: 'Conversão', desc: 'Link direto para o checkout do varejista. Da prova virtual à compra em poucos toques.' },
  { title: 'Em conformidade com a LGPD', badge: 'Privacidade', desc: 'Fotos processadas com criptografia e sem retenção. Seguimos os princípios da LGPD e GDPR.' },
]

const buyerBenefits = [
  'Veja antes de comprar — visualize no seu próprio corpo',
  'Resultado fotorrealista em até 40 segundos',
  'Funciona com qualquer selfie — sem equipamento especial',
  'Monte looks com peças de diferentes marcas',
]

const sellerBenefits = [
  'Integração em 2 a 3 dias com Shopify, VTEX e WooCommerce',
  'Redução nas devoluções por tamanho e caimento',
  'Mais confiança do comprador nas páginas de produto',
  'Ticket médio maior com Mix & Match integrado',
]

const techCards = [
  { name: 'IA Generativa de Ponta', badge: 'Especializada em moda', desc: 'Utilizamos tecnologia de IA generativa especializada em moda e anatomia humana, integrada à nossa plataforma para entregar resultados fotorrealistas com melhoria contínua.' },
  { name: 'Processamento', badge: '30-40s por visualização', desc: 'Sua visualização fica pronta em 30 a 40 segundos — sem necessidade de equipamento especial.' },
  { name: 'Privacidade', badge: 'Sem retenção de dados', desc: 'Sua foto é enviada de forma criptografada e processada por parceiro de IA especializado que não armazena o conteúdo das imagens e nunca usa fotos para treinar modelos.' },
  { name: 'Conformidade', badge: 'LGPD & GDPR', desc: 'Seguimos os princípios da LGPD e GDPR em toda a operação. O resultado gerado é excluído automaticamente após processamento.' },
]

const useCases = [
  {
    name: 'E-commerce de Moda',
    badge: 'B2B — Varejistas',
    desc: 'Integre o try-on direto no seu site. Aumente a confiança do comprador e reduza devoluções por tamanho e caimento.',
    features: ['Redução de devoluções por caimento', 'Mais confiança nas páginas de produto', 'Maior ticket médio com Mix & Match'],
  },
  {
    name: 'Marketplaces',
    badge: 'API Plug & Play',
    desc: 'Ofereça try-on para todos os sellers da sua plataforma. Diferencial competitivo único.',
    features: ['Maior GMV por usuário', 'Diferenciação competitiva', 'Integração simples via API'],
  },
  {
    name: 'Marcas D2C',
    badge: 'White Label',
    desc: 'Elimine a barreira entre online e offline. Seus clientes experimentam antes de comprar.',
    features: ['Experiência premium', 'Menos custos logísticos', 'Insights de fit por produto'],
  },
]

export default function FitMePage() {
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
              <span className={styles.category}>IA Generativa · Moda · Virtual Try-On</span>
              <h1 className={styles.title}>FitMe</h1>
              <p className={styles.subtitle}>
                Experimente antes de comprar. A FitMe usa IA generativa para você provar
                roupas virtualmente no seu corpo — mais confiança para quem compra,
                menos devoluções para quem vende.
              </p>
            </div>
            <div className={styles.headerImage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', padding: '2rem' }}>
              <Image
                src="/images/projects/logo_fitme.png"
                alt="FitMe — Provador Virtual com IA"
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: '320px', width: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <div className={f.statsStrip}>
        <div className="container">
          <div className={f.statsGrid}>
            {heroStats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className={f.statValue}>{s.value}</div>
                <div className={f.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== O PROBLEMA ===== */}
      <section className={f.problemSection}>
        <div className="container">
          <div className={f.problemInner}>
            <div>
              <span className={f.problemTag}>O Problema</span>
              <h2 className={f.problemHeadline}>Devolução por tamanho é a principal causa de prejuízo no e-commerce de moda</h2>
              <p className={f.problemBody}>
                No e-commerce de moda brasileiro, devoluções por tamanho e caimento são apontadas
                de forma recorrente pelo setor como a principal causa de devolução — um problema que
                afeta diretamente custo logístico, margem e experiência do cliente.
              </p>
              <div className={f.problemHighlight}>
                A FitMe ataca diretamente os motivos de devolução que a tecnologia consegue resolver.
              </div>
            </div>
            <div className={f.problemStats}>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.5, width: '3rem' }}>#</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.5 }}>Motivo da devolução</th>
                      <th style={{ padding: '0.875rem 1rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.5 }}>FitMe resolve</th>
                    </tr>
                  </thead>
                  <tbody>
                    {motivosTable.map((row) => (
                      <tr key={row.pos} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                        <td style={{ padding: '0.875rem 1rem', fontSize: '0.85rem', opacity: 0.5 }}>{row.pos}</td>
                        <td style={{ padding: '0.875rem 1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{row.motivo}</td>
                        <td style={{ padding: '0.875rem 1rem', textAlign: 'center', fontSize: '1.1rem', color: row.resolve ? '#4ade80' : 'rgba(255,255,255,0.3)', fontWeight: 700 }}>
                          {row.resolve ? '✓' : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== A SOLUÇÃO ===== */}
      <section className={f.solutionSection}>
        <div className="container">
          <span className={f.solutionTag}>Nossa Solução</span>
          <h2 className={f.solutionHeadline}>Virtual Try-On com Inteligência Artificial</h2>
          <p className={f.solutionBody}>
            Tecnologia de IA generativa especializada em moda e anatomia humana para criar
            provas virtuais fotorrealistas. A experiência mais próxima de experimentar sem sair de casa.
          </p>
          <div className={f.stepsGrid}>
            {steps.map((s) => (
              <div key={s.num} className={f.stepCard}>
                <span className={f.stepNum}>{s.num}</span>
                <h3 className={f.stepTitle}>{s.title}</h3>
                <p className={f.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FUNCIONALIDADES ===== */}
      <section className={f.featuresSection}>
        <div className="container">
          <span className={f.featuresTag}>Funcionalidades</span>
          <h2 className={f.featuresHeadline}>Experiência completa<br />de ponta a ponta</h2>
          <div className={f.featuresGrid}>
            {features.map((feat) => (
              <div key={feat.title} className={f.featureCard}>
                <div className={f.featureTitle}>
                  <span>{feat.title}</span>
                  <span className={f.featureBadge}>{feat.badge}</span>
                </div>
                <p className={f.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS REAIS ===== */}
      <section className={f.benefitsSection}>
        <div className="container">
          <span className={f.benefitsTag}>Benefícios Reais</span>
          <h2 className={f.benefitsHeadline}>
            Resultados para quem<br />compra e para quem vende
          </h2>
          <div className={f.benefitsGrid}>
            <div className={f.benefitPanel}>
              <p className={f.benefitPanelTitle}>Para o Comprador</p>
              <div className={f.benefitList}>
                {buyerBenefits.map((b) => (
                  <div key={b} className={f.benefitItem}>
                    <div className={f.benefitDot} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${f.benefitPanel} ${f.benefitPanelFeatured}`}>
              <p className={`${f.benefitPanelTitle} ${f.benefitPanelTitleFeatured}`}>Para o Varejista</p>
              <div className={f.benefitList}>
                {sellerBenefits.map((b) => (
                  <div key={b} className={`${f.benefitItem} ${f.benefitItemFeatured}`}>
                    <div className={f.benefitDot} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECNOLOGIA ===== */}
      <section className={f.techSection}>
        <div className="container">
          <span className={f.techTag}>Tecnologia</span>
          <h2 className={f.techHeadline}>IA generativa especializada em moda</h2>
          <p className={f.techSubtitle}>
            Tecnologia integrada à nossa plataforma para entregar resultados fotorrealistas
            com melhoria contínua — sem abrir mão da privacidade.
          </p>
          <div className={f.techGrid}>
            {techCards.map((t) => (
              <div key={t.name} className={f.techCard}>
                <div className={f.techCardHeader}>
                  <span className={f.techCardName}>{t.name}</span>
                  <span className={f.techCardBadge}>{t.badge}</span>
                </div>
                <p className={f.techCardDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASOS DE USO ===== */}
      <section className={f.useCasesSection}>
        <div className="container">
          <span className={f.useCasesTag}>Casos de Uso</span>
          <h2 className={f.useCasesHeadline}>Múltiplos segmentos,<br />uma solução</h2>
          <p className={f.useCasesSubtitle}>
            Nossa tecnologia se adapta a diferentes modelos de negócio no ecossistema da moda.
          </p>
          <div className={f.useCasesGrid}>
            {useCases.map((uc) => (
              <div key={uc.name} className={f.useCaseCard}>
                <div className={f.useCaseHeader}>
                  <span className={f.useCaseName}>{uc.name}</span>
                  <span className={f.useCaseBadge}>{uc.badge}</span>
                </div>
                <p className={f.useCaseDesc}>{uc.desc}</p>
                <div className={f.useCaseFeatures}>
                  {uc.features.map((feat) => (
                    <div key={feat} className={f.useCaseFeatureItem}>
                      <div className={f.useCaseDot} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EM FASE DE VALIDAÇÃO ===== */}
      <section className={f.testimonialsSection}>
        <div className="container">
          <span className={f.testimonialsTag}>Parceiros Piloto</span>
          <h2 className={f.testimonialsHeadline}>Em fase de validação com lojas parceiras</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            A FitMe está em fase de validação com varejistas de moda no Brasil. Buscamos
            parceiros piloto interessados em reduzir devoluções e aumentar conversão com
            tecnologia de ponta.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <Link href="/contato" className={f.btnCtaPrimary} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 2rem', background: 'var(--gradient-primary)', color: 'white', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', fontSize: '0.95rem' }}>
              Quero ser um parceiro piloto
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className={f.testimonialsGrid} style={{ gridTemplateColumns: '1fr', maxWidth: '680px', margin: '0 auto' }}>
            <div className={f.testimonialCard}>
              <div className={f.testimonialStars}>🛠</div>
              <p className={f.testimonialQuote} style={{ fontStyle: 'normal', textAlign: 'center', fontSize: '1.05rem', lineHeight: 1.7 }}>
                "Desenvolvido por um time com mais de 13 anos de experiência em engenharia
                e automação industrial, trazendo esse rigor técnico para a moda."
              </p>
              <div className={f.testimonialDivider} />
              <p className={f.testimonialName} style={{ textAlign: 'center' }}>Software Labs X</p>
              <p className={f.testimonialRole} style={{ textAlign: 'center' }}>Engenharia & Tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== O APLICATIVO ===== */}
      <section className={styles.section} style={{ background: '#f8f8f8' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O Aplicativo</h2>
          <p className={styles.sectionText}>Veja o FitMe em ação.</p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px', aspectRatio: '9/16', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
              <iframe
                src="https://www.youtube.com/embed/pOPjvdRtCNk"
                title="FitMe — Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={f.ctaSection}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className={f.ctaHeadline}>
            Chega de comprar<br />roupa e se arrepender.
          </h2>
          <p className={f.ctaSubtitle}>
            Experimente roupas virtualmente antes de comprar.
            Rápido, preciso e com privacidade garantida.
          </p>
          <div className={f.ctaActions}>
            <Link href="/contato" className={f.btnCtaPrimary}>
              Entrar na Lista de Espera
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/projetos" className={f.btnCtaSecondary}>
              Ver Outros Projetos
            </Link>
          </div>
          <div className={f.ctaTrustRow}>
            <div className={f.ctaTrustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Resultado em até 40 segundos
            </div>
            <div className={f.ctaTrustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Sem retenção de fotos
            </div>
            <div className={f.ctaTrustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Em conformidade com a LGPD
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
