import Image from 'next/image'
import Link from 'next/link'
import styles from '../[slug]/projeto.module.css'
import FitmeCarousel from './FitmeCarousel'

export const metadata = {
  title: 'FitMe App | Software Labs X',
  description: 'Aplicativo de provador virtual com IA que revoluciona o e-commerce de moda, reduzindo devoluções e aumentando conversões.',
}

const features = [
  {
    title: 'Virtual Try-On com IA',
    description: 'Algoritmos proprietários de GANs e Pose Estimation para experimentação virtual de alta precisão.',
    icon: '👁️'
  },
  {
    title: 'Modelo B2B2C',
    description: 'Plataforma que atende tanto consumidores finais quanto varejistas de moda de todos os portes.',
    icon: '🔄'
  },
  {
    title: 'Multi-Revenue',
    description: 'Assinaturas B2C (Freemium/Premium), SaaS B2B por tiers e comissão sobre vendas.',
    icon: '💎'
  },
  {
    title: 'Social Share',
    description: 'Funcionalidade de compartilhamento que cria comunidade e engajamento entre usuários.',
    icon: '🌐'
  },
]

export default function FitMePage() {
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
              <span className={styles.category}>Mobile App + IA</span>
              <h1 className={styles.title}>FitMe Provador Virtual</h1>
              <p className={styles.subtitle}>
                Revolucionando o e-commerce de moda com Inteligência Artificial.
                Provador virtual que permite experimentar qualquer peça com alta
                precisão, reduzindo devoluções e aumentando conversões.
              </p>
            </div>
            <div className={styles.headerImage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', padding: '2rem' }}>
              <Image
                src="/images/projects/logo_fitme.png"
                alt="FitMe Logo"
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: '320px', width: 'auto' }}
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
                O e-commerce de moda enfrenta um problema crônico: a incerteza do
                consumidor sobre como as roupas vão ficar. Isso resulta em altas taxas
                de devolução (até 40%), custos elevados com logística reversa e
                baixa conversão nas lojas online. Os varejistas precisavam de uma
                solução que eliminasse essa barreira de compra.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                Desenvolvemos o FitMe, um aplicativo com tecnologia proprietária de
                Virtual Try-On baseada em GANs e Pose Estimation. Os consumidores podem
                experimentar virtualmente qualquer peça com 85% de precisão. Para
                varejistas, oferecemos um modelo SaaS com dados valiosos sobre
                comportamento do consumidor e integração simplificada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Valor para Cada Segmento</h2>

          <div className={styles.contentGrid} style={{ marginTop: '3rem' }}>
            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>👤 Para Consumidores (B2C)</h3>
              <ul style={{ color: 'var(--text-muted)', lineHeight: '2', paddingLeft: '1.25rem' }}>
                <li>Experimentar virtualmente qualquer peça com alta precisão</li>
                <li>Economizar tempo e dinheiro com devoluções</li>
                <li>Ter confiança na compra online de roupas</li>
                <li>Histórico de provas e favoritos personalizados</li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>🏢 Para Varejistas (B2B)</h3>
              <ul style={{ color: 'var(--text-muted)', lineHeight: '2', paddingLeft: '1.25rem' }}>
                <li>Aumentar taxa de conversão significativamente</li>
                <li>Reduzir custos com devoluções e logística reversa</li>
                <li>Obter dados valiosos sobre comportamento do consumidor</li>
                <li>Diferenciar-se no mercado competitivo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Principais Recursos</h2>

          <div className={styles.resultsGrid} style={{ marginTop: '3rem' }}>
            {features.map((feature, index) => (
              <div key={index} className={styles.resultCard}>
                <div className={styles.resultIcon}>{feature.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  {feature.title}
                </h3>
                <p className={styles.resultText} style={{ fontSize: '0.9rem' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrossel */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O Aplicativo</h2>
          <FitmeCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Quer desenvolver uma solução com IA?</h2>
          <p>Vamos conversar sobre como podemos transformar seu negócio com tecnologia de ponta.</p>
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
