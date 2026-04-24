import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'
import f from './fitme.module.css'
import FitmeCarousel from './FitmeCarousel'

export const metadata = {
  title: 'FitMe — Provador Virtual com IA | Software Labs X',
  description: 'FitMe usa IA generativa para você provar roupas virtualmente no seu corpo. Mais confiança para quem compra — menos devoluções para quem vende.',
}

const heroStats = [
  { value: '+30%', label: 'Aumento nas Vendas' },
  { value: '-40%', label: 'Menos Devoluções' },
  { value: '99%', label: 'Precisão da IA' },
  { value: '<60s', label: 'Processamento' },
]

const problemStats = [
  { value: 'R$ 70bi', title: 'Custo global em devoluções', desc: 'Logística reversa, perdas e retrabalho no e-commerce de moda' },
  { value: '52%', title: 'Das devoluções por tamanho', desc: 'Mais da metade acontece porque a peça simplesmente não serviu' },
  { value: '25%', title: 'Das emissões de CO₂ do setor', desc: 'O impacto ambiental das devoluções é enorme e evitável' },
]

const steps = [
  { num: '01', title: 'Upload da foto', desc: 'Selfie frontal. Nossa IA detecta seu corpo automaticamente.' },
  { num: '02', title: 'Escolha as peças', desc: 'Catálogo integrado de milhares de peças de lojas parceiras.' },
  { num: '03', title: 'IA processa', desc: 'Visualização fotorrealista em menos de 10 segundos.' },
  { num: '04', title: 'Decida e compre', desc: 'Veja a peça em você. Compartilhe ou compre com um toque.' },
]

const features = [
  { title: 'Virtual Try-On', badge: 'Core', desc: 'IA Generativa cria provas virtuais fotorrealistas em segundos. Veja exatamente como a peça fica em você.' },
  { title: 'Mix & Match', badge: 'Exclusivo', desc: 'Monte looks completos combinando peças de diferentes lojas. Visualize o outfit inteiro antes de comprar.' },
  { title: 'Catálogo Integrado', badge: 'Abrangente', desc: 'Milhares de peças de lojas parceiras em um único lugar. Filtros por categoria, marca e estilo.' },
  { title: 'Social Share', badge: 'Engajamento', desc: 'Compartilhe seus looks e peça opinião de amigos antes de decidir. Moda é social.' },
  { title: 'Compra Direta', badge: 'Conversão', desc: 'Link direto para o checkout do varejista. Da prova virtual à compra em poucos toques.' },
  { title: '100% LGPD', badge: 'Privacidade', desc: 'Fotos processadas com criptografia e política de não-retenção biométrica. Seus dados são seus.' },
]

const buyerBenefits = [
  'Veja antes de comprar — visualize no seu próprio corpo',
  'Resultado fotorrealista em menos de 10 segundos',
  'Funciona com qualquer selfie — sem equipamento especial',
  'Monte looks com peças de diferentes marcas',
]

const sellerBenefits = [
  'Integração em 2 a 3 dias com Shopify, VTEX e WooCommerce',
  'Redução de até 40% nas devoluções por tamanho/caimento',
  'Aumento de 30% na conversão nas páginas de produto',
  'ROI positivo em 3 a 6 meses — ticket médio maior',
]

const techCards = [
  { name: 'GANs', badge: '99.2% precisão', desc: 'Generative Adversarial Networks treinadas em milhões de imagens de moda e anatomia humana.' },
  { name: 'GPU Ultra-Rápido', badge: '<60s resposta', desc: 'Infraestrutura otimizada em GPU para processar cada visualização em menos de 60 segundos.' },
  { name: 'Deep Learning', badge: 'Melhora contínua', desc: 'Modelo treinado com dados de moda e anatomia garante precisão e naturalidade superiores.' },
  { name: 'Segurança', badge: '100% LGPD', desc: 'Criptografia end-to-end, compliance LGPD/GDPR e política de não-retenção de dados biométricos.' },
]

const useCases = [
  {
    name: 'E-commerce de Moda',
    badge: 'ROI: 3–6 meses',
    desc: 'Integre o try-on direto no seu site. Aumente conversão e reduza devoluções drasticamente.',
    features: ['Redução de até 40% em devoluções', 'Aumento de 30% na conversão', 'Maior ticket médio'],
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
    features: ['Experiência premium', 'Menos custos logísticos', 'Dados de fit insights'],
  },
]

const testimonials = [
  { quote: 'O FitMe reduziu nossas devoluções em 35% no primeiro trimestre. ROI positivo desde o mês 2. Game changer absoluto.', name: 'Vitória Store', role: 'Fashion Retail' },
  { quote: 'A tecnologia é realmente de ponta. Integração foi simples e o suporte técnico é excepcional. Recomendo fortemente.', name: 'Carlos Mendes', role: 'CTO — Trendi Fashion' },
  { quote: 'Nossos clientes estão pedindo mais integração com FitMe. O engajamento aumentou 40% nas páginas de produto.', name: 'Ana Paula', role: 'Product Manager — Modare' },
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
              <h2 className={f.problemHeadline}>Devoluções custam R$ 70 bilhões por ano</h2>
              <p className={f.problemBody}>
                No varejo de moda online, a incerteza de "como vai ficar em mim?"
                gera uma cascata de custos, frustrações e impacto ambiental evitável.
                O consumidor não compra porque não tem confiança — e quando compra,
                devolve.
              </p>
              <div className={f.problemHighlight}>
                88% das devoluções poderiam ser evitadas se o cliente soubesse como a peça ficaria no corpo. É isso que o FitMe faz.
              </div>
            </div>
            <div className={f.problemStats}>
              {problemStats.map((s) => (
                <div key={s.value} className={f.problemStatCard}>
                  <div className={f.problemStatValue}>{s.value}</div>
                  <div className={f.problemStatTitle}>{s.title}</div>
                  <p className={f.problemStatDesc}>{s.desc}</p>
                </div>
              ))}
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
            Tecnologia de ponta que usa GANs (Generative Adversarial Networks) para criar provas
            virtuais hiper-realistas. A experiência mais próxima de experimentar sem sair de casa.
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
          <h2 className={f.techHeadline}>IA de última geração em produção</h2>
          <p className={f.techSubtitle}>
            Nossa tecnologia proprietária combina o estado da arte em IA generativa
            com anos de pesquisa em visão computacional e moda.
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

      {/* ===== DEPOIMENTOS ===== */}
      <section className={f.testimonialsSection}>
        <div className="container">
          <span className={f.testimonialsTag}>Depoimentos</span>
          <h2 className={f.testimonialsHeadline}>O que dizem sobre nós</h2>
          <div className={f.testimonialsStats}>
            {[{ value: '4.9/5.0', label: 'Avaliação Média' }, { value: '94%', label: 'Recomendariam' }, { value: '5.000+', label: 'Reviews' }].map((s) => (
              <div key={s.label} className={f.testimonialsStat}>
                <div className={f.testimonialsStatValue}>{s.value}</div>
                <div className={f.testimonialsStatLabel}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className={f.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={f.testimonialCard}>
                <div className={f.testimonialStars}>★★★★★</div>
                <p className={f.testimonialQuote}>"{t.quote}"</p>
                <div className={f.testimonialDivider} />
                <p className={f.testimonialName}>{t.name}</p>
                <p className={f.testimonialRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== O APLICATIVO ===== */}
      <section className={styles.section} style={{ background: '#f8f8f8' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O Aplicativo</h2>
          <p className={styles.sectionText}>Veja o FitMe em ação.</p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 3rem' }}>
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
          <FitmeCarousel />
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
            Grátis, rápido e surpreendentemente preciso.
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
              100% gratuito para começar
            </div>
            <div className={f.ctaTrustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Sem necessidade de cartão
            </div>
            <div className={f.ctaTrustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Privacidade garantida — LGPD
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
