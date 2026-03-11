'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './sobre.module.css'

const timeline = [
  {
    year: '2019',
    title: 'Fundação',
    description: 'Software Labs X nasce com a missão de transformar ideias em soluções digitais inovadoras.',
  },
  {
    year: '2020',
    title: 'Expansão',
    description: 'Ampliamos nossa equipe e começamos a atender clientes em todo o Brasil.',
  },
  {
    year: '2021',
    title: 'IA & Machine Learning',
    description: 'Incorporamos serviços de Inteligência Artificial e Visão Computacional ao portfólio.',
  },
  {
    year: '2023',
    title: 'Reconhecimento',
    description: 'Alcançamos a marca de 50+ projetos entregues com 98% de satisfação dos clientes.',
  },
  {
    year: '2024',
    title: 'Inovação Contínua',
    description: 'Investimos em novas tecnologias e metodologias para entregar ainda mais valor.',
  },
]

const team = [
  {
    name: 'Carlos Silva',
    role: 'CEO & Fundador',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ana Rodrigues',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Pedro Santos',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Julia Costa',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
]

const values = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: 'Excelência',
    description: 'Compromisso com a qualidade em cada detalhe do projeto.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Integridade',
    description: 'Honestidade e transparência em todas as relações.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>,
    title: 'Inovação',
    description: 'Busca constante por soluções criativas e tecnologias de ponta.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Foco no Cliente',
    description: 'Entendemos e superamos as expectativas dos nossos clientes.',
  },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Transformando o Futuro<br />
            <span className={styles.highlight}>com Tecnologia</span>
          </h1>
          <p className={styles.subtitle}>
            Somos uma empresa de desenvolvimento de software apaixonada por 
            criar soluções que fazem a diferença na vida das pessoas e empresas.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <h2 className={styles.sectionTitle}>
                Empoderar Empresas através da Tecnologia
              </h2>
              <p className={styles.missionText}>
                Acreditamos que a tecnologia deve ser acessível e transformadora. 
                Nossa missão é desenvolver soluções de software inovadoras que 
                impulsionam o crescimento dos nossos clientes e contribuem para 
                um mundo mais conectado e eficiente.
              </p>
              <p className={styles.missionText}>
                Desde 2019, temos trabalhado incansavelmente para entregar 
                projetos de alta qualidade, sempre colocando as necessidades 
                dos nossos clientes em primeiro lugar.
              </p>
            </div>
            <div className={styles.missionImage}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Equipe Software Labs X"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <h2 className={styles.sectionTitle}>O que nos Move</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <h2 className={styles.sectionTitle}>De 2019 até Hoje</h2>
          </div>
          <div className={styles.timelineItems}>
            {timeline.map((item, index) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <h2 className={styles.sectionTitle}>Conheça quem faz acontecer</h2>
            <p className={styles.teamSubtitle}>
              Profissionais apaixonados por tecnologia e comprometidos com a excelência.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Quer fazer parte da nossa história?</h2>
            <p>Entre em contato e vamos construir algo incrível juntos.</p>
            <Link href="/contato" className="btn btn-primary">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
