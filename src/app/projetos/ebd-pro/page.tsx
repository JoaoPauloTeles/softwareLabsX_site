import Link from 'next/link'
import Image from 'next/image'
import styles from '../[slug]/projeto.module.css'
import e from './ebd-pro.module.css'
import EbdCarousel from './EbdCarousel'

export const metadata = {
  title: 'EBD PRO — Gestão de Escola Bíblica Dominical | Software Labs X',
  description: 'EBD Pro é o app completo para igrejas gerenciarem sua EBD com tecnologia. Controle de presença, quizzes bíblicos, relatórios em tempo real e muito mais.',
}

const problems = [
  { num: '01', title: 'Controle Manual de Presença', desc: 'Listas de papel, planilhas desorganizadas e dados perdidos toda semana.' },
  { num: '02', title: 'Comunicação Fragmentada', desc: 'WhatsApp, ligações e recados na porta — sem histórico ou controle.' },
  { num: '03', title: 'Eventos Mal Planejados', desc: 'Confusão em datas, substituições de última hora e membros desinformados.' },
  { num: '04', title: 'Sem Visibilidade dos Dados', desc: 'Impossível saber quem está frequentando, quem sumiu ou quais turmas crescem.' },
  { num: '05', title: 'Gestão de Professores Difícil', desc: 'Sem registro claro de quem leciona o quê, quando e para quantos alunos.' },
  { num: '06', title: 'Alunos Desengajados', desc: 'Sem follow-up, quem falta simplesmente some — e ninguém percebe a tempo.' },
]

const features = [
  { icon: '👥', title: 'Gestão de Alunos', description: 'Cadastro completo com histórico de frequência, dados pessoais e turma.' },
  { icon: '✅', title: 'Controle de Presença', description: 'Registro rápido por turma, data e professor. Relatórios automáticos.' },
  { icon: '📊', title: 'Relatórios e Dashboards', description: 'Visualize dados de frequência, crescimento e engajamento em tempo real.' },
  { icon: '📱', title: 'App Mobile', description: 'iOS e Android. Professores registram a presença de qualquer lugar.' },
  { icon: '🔔', title: 'Notificações Push', description: 'Avise alunos sobre aulas, eventos e comunicados — tudo pelo app.' },
  { icon: '📅', title: 'Agenda da EBD', description: 'Calendário de aulas, datas especiais e gestão de substituições.' },
]

const extras = [
  { icon: '▶️', title: 'Aulas em Vídeo', desc: 'Professores publicam aulas em vídeo. Alunos assistem quando e onde quiserem, no próprio app.' },
  { icon: '🏆', title: 'Competições Bíblicas', desc: 'Crie gincanas e olimpíadas entre turmas. Ranking, pontuação e premiação — tudo no app.' },
  { icon: '❓', title: 'Quizzes Bíblicos', desc: 'Teste o aprendizado com quizzes interativos após cada aula. Resultado imediato.' },
]

const steps = [
  { num: '01', title: 'Cadastre sua Igreja', desc: 'Configure sua EBD em minutos. Adicione turmas, professores e o calendário anual.' },
  { num: '02', title: 'Importe seus Membros', desc: 'Cadastre alunos individualmente ou importe de uma planilha. Histórico desde o primeiro dia.' },
  { num: '03', title: 'Registre Presenças', desc: 'Professores marcam a presença pelo app em segundos. Sem papel, sem confusão.' },
  { num: '04', title: 'Acompanhe os Resultados', desc: 'Dashboards e relatórios automáticos para o pastor e liderança sempre atualizados.' },
]

const forWho = [
  { icon: '⛪', title: 'Igrejas Locais', desc: 'Do pequeno grupo ao templo com centenas de alunos. O EBD Pro escala com o crescimento da sua igreja.' },
  { icon: '👨‍💼', title: 'Pastores e Líderes de EBD', desc: 'Quem quer ter visibilidade total do ministério e apresentar relatórios claros para a liderança.' },
  { icon: '📖', title: 'Professores', desc: 'Para quem quer facilidade na chamada, acesso ao material e comunicação com os alunos.' },
  { icon: '🌐', title: 'Redes Denominacionais', desc: 'Gestão centralizada de múltiplas igrejas e EBDs em um único painel de controle.' },
]

const differentials = [
  { icon: '📱', title: '100% Mobile First', desc: 'App nativo para iOS e Android. Interface intuitiva para qualquer faixa etária.' },
  { icon: '☁️', title: 'Dados Seguros na Nuvem', desc: 'Backup automático. Seus dados protegidos e sempre disponíveis.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Multi-turmas e Multi-professores', desc: 'Gerencie quantas turmas precisar, com perfis individuais de acesso.' },
  { icon: '📊', title: 'Relatórios em Tempo Real', desc: 'Decisões baseadas em dados — não em achismo.' },
]

const plans = [
  {
    name: 'Essencial',
    tagline: 'Para igrejas em crescimento',
    featured: false,
    features: ['Até 100 alunos', '5 professores', 'Controle de presença', 'Relatórios básicos', 'Suporte por e-mail'],
  },
  {
    name: 'Pro',
    tagline: 'O mais popular',
    featured: true,
    features: ['Alunos ilimitados', 'Professores ilimitados', 'Dashboard completo', 'Notificações push', 'Suporte prioritário'],
  },
  {
    name: 'Rede',
    tagline: 'Para denominações e redes',
    featured: false,
    features: ['Multi-igrejas', 'Gestão centralizada', 'API e integrações', 'Relatórios consolidados', 'Gerente de conta dedicado'],
  },
]

const testimonials = [
  { quote: 'O EBD Pro transformou a gestão da nossa EBD. Antes perdíamos horas com planilhas. Hoje temos tudo organizado em um toque.', name: 'Pr. Carlos Mendes', church: 'Igreja Batista Central — SP' },
  { quote: 'A visibilidade que o app nos deu dos alunos ausentes foi incrível. Conseguimos recuperar membros que estavam sumindo.', name: 'Lda. Ana Paula', church: 'Assembleia de Deus — RJ' },
  { quote: 'Recomendo para qualquer pastor que queira levar a EBD a sério. Simples, poderoso e com suporte excelente.', name: 'Pr. Roberto Alves', church: 'Igreja Presbiteriana — MG' },
]

const stats = [
  { value: '4.8★', label: 'Avaliação dos usuários' },
  { value: '65%', label: 'Menos tempo na gestão' },
  { value: '98%', label: 'Clientes satisfeitos' },
  { value: '50+', label: 'Projetos entregues' },
]

export default function EbdProPage() {
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
              <span className={styles.category}>Mobile App</span>
              <h1 className={styles.title}>EBD PRO</h1>
              <p className={styles.subtitle}>
                Tecnologia que transforma o ministério. O app completo para igrejas
                gerenciarem sua Escola Bíblica Dominical com praticidade,
                visibilidade e engajamento real.
              </p>
            </div>
            <div className={styles.headerImage} style={{ background: 'white', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/images/projects/ebd_pro_logo.jpg"
                alt="EBD PRO"
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: '320px', width: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className={e.statsBar}>
        <div className="container">
          <div className={e.statsBarGrid}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className={e.statValue}>{s.value}</div>
                <div className={e.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== O PROBLEMA ===== */}
      <section className={e.problemSection}>
        <div className="container">
          <span className={e.problemLabel}>A Realidade das Igrejas Hoje</span>
          <h2 className={e.problemHeadline}>Sua EBD ainda enfrenta esses desafios?</h2>
          <p className={e.problemSubtitle}>
            A maioria das igrejas convive com os mesmos problemas semana após semana —
            não por falta de dedicação, mas por falta da ferramenta certa.
          </p>
          <div className={e.problemGrid}>
            {problems.map((p) => (
              <div key={p.num} className={e.problemCard}>
                <div className={e.problemCardNum}>{p.num}</div>
                <p className={e.problemCardTitle}>{p.title}</p>
                <p className={e.problemCardDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className={e.problemCTA}>
            O EBD Pro resolve tudo isso — em um único app.
          </div>
        </div>
      </section>

      {/* ===== A SOLUÇÃO ===== */}
      <section className={e.solutionSection}>
        <div className="container">
          <div className={e.solutionInner}>
            <div>
              <span className={e.solutionLabel}>A Solução</span>
              <h2 className={e.solutionHeadline}>
                Gestão completa da EBD,<br />na palma da mão
              </h2>
              <p className={e.solutionBody}>
                O EBD Pro é um aplicativo desenvolvido especialmente para igrejas
                gerenciarem sua Escola Bíblica Dominical com tecnologia,
                praticidade e inteligência.
              </p>
              <p className={e.solutionBody}>
                Do controle de presença aos relatórios de engajamento, tudo em um único
                app nativo para iOS e Android — simples o suficiente para qualquer professor,
                poderoso o suficiente para qualquer liderança.
              </p>
              <div className={e.featureChecklist}>
                {['Controle de Presença', 'Gestão de Turmas', 'Relatórios em Tempo Real', 'Quizzes Bíblicos', 'Aulas em Vídeo', 'Competições Bíblicas'].map((item) => (
                  <div key={item} className={e.featureCheckItem}>
                    <div className={e.featureCheckIcon}>✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={e.solutionImageWrap}>
              <Image
                src="/images/projects/ebd_pro_logo.jpg"
                alt="EBD PRO — Gestão de EBD"
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: '360px', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FUNCIONALIDADES ===== */}
      <section className={e.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Funcionalidades Principais</h2>
          <p className={styles.sectionText}>
            Tudo que pastores, coordenadores e professores precisam em um único lugar.
          </p>
          <div className={e.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={e.featureCard}>
                <span className={e.featureIcon}>{f.icon}</span>
                <h3 className={e.featureTitle}>{f.title}</h3>
                <p className={e.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALÉM DA CHAMADA ===== */}
      <section className={e.engageSection}>
        <div className="container">
          <div className={e.engageInner}>
            <div>
              <span className={styles.category} style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Além da Chamada</span>
              <h2 className={e.engageHeadline}>Engaje seus alunos!</h2>
              <p className={e.engageSubtitle}>
                O EBD Pro vai além da gestão — ele transforma a EBD em uma experiência
                interativa e envolvente que mantém os alunos conectados com o ministério.
              </p>
              <div className={e.engageList}>
                {extras.map((item) => (
                  <div key={item.title} className={e.engageItem}>
                    <div className={e.engageItemIcon}>{item.icon}</div>
                    <div>
                      <p className={e.engageItemTitle}>{item.title}</p>
                      <p className={e.engageItemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={e.engageImageWrap}>
              <Image
                src="/images/projects/ebd_app_2.jpg"
                alt="EBD PRO — Quizzes e Engajamento"
                width={600}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMUNIDADE E LIDERANÇA ===== */}
      <section className={e.pastorSection}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className={e.pastorLabel}>Comunidade e Liderança</span>
              <h2 className={e.pastorHeadline}>
                Tudo que o pastor e a liderança precisam em um só lugar.
              </h2>
              <p className={e.pastorBody}>
                O EBD Pro não é só para professores. A liderança tem visibilidade total —
                frequência, engajamento, relatórios consolidados e comunicação direta
                com toda a comunidade.
              </p>
              <div className={e.pastorFeature}>
                <div className={e.pastorFeatureTitle}>
                  <span>🎙</span> Mensagem do Pastor
                </div>
                <p className={e.pastorFeatureDesc}>
                  O pastor publica sua mensagem semanal diretamente no app —
                  texto, áudio ou vídeo. Todos os membros recebem notificação
                  e acessam na palma da mão, mesmo sem estar na EBD.
                </p>
              </div>
            </div>
            <div className={e.pastorImageWrap}>
              <Image
                src="/images/projects/ebd_app_3.jpg"
                alt="EBD PRO — Comunidade e Liderança"
                width={600}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARKETPLACE ===== */}
      <section className={e.marketplaceSection}>
        <div className="container">
          <div className={e.marketplaceInner}>
            <div className={e.marketplaceImageWrap}>
              <Image
                src="/images/projects/ebd_app_4.jpg"
                alt="EBD PRO — Marketplace"
                width={600}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <span className={e.marketplaceLabel}>Marketplace</span>
              <h2 className={e.marketplaceHeadline}>
                Sua EBD gera renda para a igreja.
              </h2>
              <p className={e.marketplaceBody}>
                O EBD Pro conta com um espaço de anúncios integrado ao app, onde
                comerciantes e parceiros da comunidade podem se divulgar, gerando
                uma nova fonte de receita para a igreja.
              </p>
              <div className={e.marketplaceSteps}>
                {[
                  { num: '1', title: 'Comerciante anuncia', desc: 'Loja, escritório ou parceiro paga para exibir seu anúncio dentro do app.' },
                  { num: '2', title: 'Membros veem', desc: 'Anúncios aparecem de forma integrada para todos os usuários do EBD Pro.' },
                  { num: '3', title: 'Igreja recebe', desc: 'A receita dos anúncios vai direto para o caixa da igreja.' },
                ].map((item) => (
                  <div key={item.num} className={e.marketplaceStep}>
                    <div className={e.marketplaceStepNum}>{item.num}</div>
                    <div>
                      <p className={e.marketplaceStepTitle}>{item.title}</p>
                      <p className={e.marketplaceStepDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUE EBD PRO ===== */}
      <section className={e.whySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Por que o EBD Pro?</h2>
          <p className={styles.sectionText}>
            Desenvolvido por quem entende de tecnologia e respeita a vocação da Igreja.
          </p>
          <div className={e.whyGrid}>
            <div className={e.whyDifferentials}>
              {differentials.map((d) => (
                <div key={d.title} className={e.whyCard}>
                  <div className={e.whyCardIconWrap}>{d.icon}</div>
                  <div>
                    <p className={e.whyCardTitle}>{d.title}</p>
                    <p className={e.whyCardDesc}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={e.whyStatsPanel}>
              <p className={e.whyStatsPanelTitle}>Números que comprovam</p>
              {stats.map((s) => (
                <div key={s.label} className={e.whyStatRow}>
                  <div className={e.whyStatRowValue}>{s.value}</div>
                  <div className={e.whyStatRowLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className={e.stepsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <p className={styles.sectionText}>Em 4 passos simples, sua EBD estará totalmente organizada.</p>
          <div className={e.stepsGrid}>
            {steps.map((s) => (
              <div key={s.num} className={e.stepCard}>
                <div className={e.stepNum}>{s.num}</div>
                <h3 className={e.stepTitle}>{s.title}</h3>
                <p className={e.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className={e.stepsNote}>
            Suporte técnico da Software Labs X durante toda a implantação.
          </p>
        </div>
      </section>

      {/* ===== PARA QUEM ===== */}
      <section className={e.forWhoSection}>
        <div className="container">
          <h2 className={e.forWhoHeadline}>Para Quem é o EBD Pro?</h2>
          <p className={e.forWhoSubtitle}>Ideal para igrejas de todos os tamanhos.</p>
          <div className={e.forWhoGrid}>
            {forWho.map((f) => (
              <div key={f.title} className={e.forWhoCard}>
                <div className={e.forWhoIconWrap}>{f.icon}</div>
                <div>
                  <p className={e.forWhoTitle}>{f.title}</p>
                  <p className={e.forWhoDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANOS ===== */}
      <section className={e.pricingSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Planos e Investimento</h2>
          <p className={styles.sectionText}>Escolha o plano ideal para o tamanho da sua EBD.</p>
          <div className={e.pricingGrid}>
            {plans.map((plan) => (
              <div key={plan.name} className={`${e.pricingCard} ${plan.featured ? e.pricingCardFeatured : ''}`}>
                <div className={`${e.pricingHeader} ${plan.featured ? e.pricingHeaderFeatured : ''}`}>
                  {plan.featured && (
                    <div className={e.pricingPopularBadge}>⭐ O mais popular</div>
                  )}
                  <div className={`${e.pricingName} ${plan.featured ? e.pricingNameFeatured : ''}`}>{plan.name}</div>
                  <div className={`${e.pricingTagline} ${plan.featured ? e.pricingTaglineFeatured : ''}`}>{plan.tagline}</div>
                </div>
                <div className={e.pricingPrice}>
                  <div className={`${e.pricingPriceLabel} ${plan.featured ? e.pricingPriceLabelFeatured : ''}`}>
                    Preço sob consulta
                  </div>
                </div>
                <div className={e.pricingFeatures}>
                  {plan.features.map((feat) => (
                    <div key={feat} className={e.pricingFeatureItem}>
                      <span className={e.pricingCheck}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <div className={e.pricingFooter}>
                  <Link href="/contato" className={plan.featured ? e.btnPricingPrimary : e.btnPricingSecondary}>
                    Solicitar Demonstração
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className={e.testimonialsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O que dizem nossos clientes</h2>
          <div className={e.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={e.testimonialCard}>
                <div className={e.testimonialStars}>★★★★★</div>
                <p className={e.testimonialQuote}>"{t.quote}"</p>
                <div>
                  <p className={e.testimonialName}>{t.name}</p>
                  <p className={e.testimonialChurch}>{t.church}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== O APLICATIVO ===== */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O Aplicativo</h2>
          <p className={styles.sectionText}>Veja como o EBD Pro funciona na prática.</p>
          <EbdCarousel />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={e.ctaSection}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <span className={e.ctaBadge}>
              Demonstração gratuita e personalizada
            </span>
            <h2 className={e.ctaHeadline}>
              Pronto para transformar<br />sua EBD?
            </h2>
            <p className={e.ctaSubtitle}>
              Fale agora com nossa equipe e receba uma demonstração gratuita
              e personalizada para a realidade da sua igreja.
            </p>
            <div className={e.ctaActions}>
              <Link href="/contato" className={e.btnCtaPrimary}>
                Solicitar Demonstração Gratuita
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/projetos" className={e.btnCtaSecondary}>
                Ver Outros Projetos
              </Link>
            </div>
            <p className={e.ctaTagline}>
              Tecnologia que transforma o ministério.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
