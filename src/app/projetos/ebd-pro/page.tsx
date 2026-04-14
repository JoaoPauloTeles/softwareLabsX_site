import Link from 'next/link'
import Image from 'next/image'
import styles from '../[slug]/projeto.module.css'
import EbdCarousel from './EbdCarousel'

export const metadata = {
  title: 'EBD PRO | Software Labs X',
  description: 'Aplicativo completo para gerenciamento de Escola Bíblica Dominical com controle de frequência, cadastro e relatórios.',
}

const features = [
  { icon: '👥', title: 'Gestão de Alunos', description: 'Cadastro completo com histórico de frequência, dados pessoais e turma.' },
  { icon: '✅', title: 'Controle de Presença', description: 'Registro rápido por turma, data e professor. Relatórios automáticos.' },
  { icon: '📊', title: 'Relatórios e Dashboards', description: 'Visualize dados de frequência, crescimento e engajamento em tempo real.' },
  { icon: '📱', title: 'App Mobile', description: 'iOS e Android. Professores registram a presença de qualquer lugar.' },
  { icon: '🔔', title: 'Notificações', description: 'Avise alunos sobre aulas, eventos e comunicados — tudo pelo app.' },
  { icon: '📅', title: 'Agenda da EBD', description: 'Calendário de aulas, datas especiais e gestão de substituições.' },
]

const extras = [
  { icon: '▶️', title: 'Aulas em Vídeo', description: 'Professores publicam aulas em vídeo. Alunos assistem quando e onde quiserem, no próprio app.' },
  { icon: '🏆', title: 'Competições Bíblicas', description: 'Crie gincanas e olimpíadas entre turmas. Ranking, pontuação e premiação — tudo no app.' },
  { icon: '❓', title: 'Quizzes Bíblicos', description: 'Teste o aprendizado dos alunos com quizzes interativos após cada aula. Resultado imediato.' },
]

const steps = [
  { num: '01', title: 'Cadastre sua Igreja', description: 'Configure sua EBD em minutos. Adicione turmas, professores e o calendário anual.' },
  { num: '02', title: 'Importe seus Membros', description: 'Cadastre alunos individualmente ou importe de uma planilha. Histórico desde o primeiro dia.' },
  { num: '03', title: 'Registre Presenças', description: 'Professores marcam a presença pelo app em segundos. Sem papel, sem confusão.' },
  { num: '04', title: 'Acompanhe os Resultados', description: 'Dashboards e relatórios automáticos para o pastor e liderança sempre atualizados.' },
]


const testimonials = [
  { quote: 'O EBD Pro transformou a gestão da nossa EBD. Antes perdíamos horas com planilhas. Hoje temos tudo organizado em um toque.', name: 'Pr. Carlos Mendes', church: 'Igreja Batista Central — SP' },
  { quote: 'A visibilidade que o app nos deu dos alunos ausentes foi incrível. Conseguimos recuperar membros que estavam sumindo.', name: 'Lda. Ana Paula', church: 'Assembleia de Deus — RJ' },
  { quote: 'Recomendo para qualquer pastor que queira levar a EBD a sério. Simples, poderoso e com suporte excelente.', name: 'Pr. Roberto Alves', church: 'Igreja Presbiteriana — MG' },
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
                com controle de frequência, cadastro de alunos e professores,
                quizzes interativos e relatórios em tempo real.
              </p>
            </div>
            <div className={styles.headerImage} style={{ background: 'white', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/images/projects/ebd_pro_logo.jpg"
                alt="EBD PRO"
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: '320px', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '3rem 0', background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '4.8★', label: 'Avaliação dos usuários' },
              { value: '65%', label: 'Menos tempo na gestão' },
              { value: '98%', label: 'Clientes satisfeitos' },
              { value: '50+', label: 'Projetos entregues' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{s.value}</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
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
                Igrejas organizam presença, classes e relatórios da EBD com listas de papel,
                planilhas desorganizadas e dados perdidos toda semana. Sem visibilidade de quem
                frequenta, quem sumiu ou quais turmas crescem — e sem comunicação estruturada
                entre pastores, coordenadores e professores.
              </p>
            </div>
            <div className={`${styles.contentBlock} ${styles.solution}`}>
              <div className={`${styles.contentIcon} ${styles.solution}`}>💡</div>
              <h2 className={styles.contentTitle}>A Solução</h2>
              <p className={styles.contentText}>
                O EBD Pro centraliza toda a gestão da Escola Bíblica Dominical em um único
                aplicativo. Organização de classes por faixa etária, acompanhamento de frequência,
                quizzes interativos, aulas em vídeo, marketplace para parceiros e comunicação
                direta entre coordenadores e educadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Funcionalidades Principais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {features.map((f) => (
              <div key={f.title} className={styles.contentBlock} style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 className={styles.contentTitle} style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p className={styles.contentText} style={{ fontSize: '1rem' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Além da Chamada */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Além da Chamada</h2>
          <p className={styles.sectionText}>O EBD Pro vai além da gestão — ele transforma a EBD em uma experiência interativa e envolvente.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {extras.map((e) => (
              <div key={e.title} className={styles.contentBlock} style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{e.icon}</div>
                <h3 className={styles.contentTitle} style={{ fontSize: '1.2rem' }}>{e.title}</h3>
                <p className={styles.contentText} style={{ fontSize: '1rem' }}>{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className={styles.section}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className={styles.category} style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Marketplace</span>
              <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Sua EBD gera renda para a igreja.</h2>
              <p className={styles.sectionText} style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                Espaço de anúncios integrado ao app onde comerciantes e parceiros da comunidade
                podem se divulgar, gerando uma nova fonte de receita para a igreja.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { num: '1', title: 'Comerciante anuncia', desc: 'Loja ou parceiro paga para exibir seu anúncio dentro do app.' },
                { num: '2', title: 'Membros veem', desc: 'Anúncios aparecem de forma integrada para todos os usuários.' },
                { num: '3', title: 'Igreja recebe', desc: 'A receita dos anúncios vai direto para o caixa da igreja.' },
              ].map((item) => (
                <div key={item.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 40, height: 40, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem' }}>{item.num}</div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>{item.title}</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.25rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <p className={styles.sectionText}>Em 4 passos simples, sua EBD estará totalmente organizada.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {steps.map((s) => (
              <div key={s.num} className={styles.contentBlock} style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--primary)', marginBottom: '1rem' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.description}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
            Suporte técnico da Software Labs X durante toda a implantação.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O que dizem nossos clientes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.contentBlock} style={{ padding: '2rem' }}>
                <div style={{ fontSize: '1.1rem', color: '#F59E0B', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>"{t.quote}"</p>
                <div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{t.name}</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{t.church}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Aplicativo */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O Aplicativo</h2>
          <EbdCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Pronto para transformar sua EBD?</h2>
          <p>Fale com nossa equipe e receba uma demonstração gratuita e personalizada.</p>
          <div className={styles.ctaActions}>
            <Link href="/contato" className="btn btn-primary">Solicitar Demonstração</Link>
            <Link href="/projetos" className="btn btn-secondary">Ver Outros Projetos</Link>
          </div>
        </div>
      </section>
    </>
  )
}
