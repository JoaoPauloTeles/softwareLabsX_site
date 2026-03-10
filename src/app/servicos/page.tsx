'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './servicos.module.css'

const services = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Aplicativos Web',
    shortDescription: 'Desenvolvimento de aplicações web modernas e escaláveis.',
    fullDescription: 'Criamos aplicações web sob medida utilizando as tecnologias mais avançadas do mercado. Desde sistemas corporativos complexos até plataformas SaaS, entregamos soluções robustas, seguras e com excelente experiência do usuário.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    features: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Sistemas de Gestão Empresarial',
      'E-commerce e Marketplaces',
      'Dashboards e Painéis Administrativos',
      'APIs RESTful e GraphQL',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Aplicativos Mobile',
    shortDescription: 'Apps nativos e híbridos para iOS e Android.',
    fullDescription: 'Desenvolvemos aplicativos móveis de alta performance para iOS e Android. Utilizamos tecnologias cross-platform para otimizar custos sem comprometer a qualidade e a experiência nativa.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Apps Nativos iOS e Android',
      'Aplicativos Híbridos',
      'Integração com APIs',
      'Push Notifications',
      'Geolocalização',
      'Pagamentos In-App',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    id: 'ia',
    icon: '🤖',
    title: 'Inteligência Artificial',
    shortDescription: 'Soluções de IA e Machine Learning personalizadas.',
    fullDescription: 'Implementamos soluções de Inteligência Artificial que transformam dados em insights valiosos. Desde chatbots inteligentes até sistemas de previsão, utilizamos machine learning para automatizar e otimizar processos.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Chatbots e Assistentes Virtuais',
      'Análise Preditiva',
      'Processamento de Linguagem Natural',
      'Sistemas de Recomendação',
      'Automação de Processos',
      'Análise de Sentimentos',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'AWS SageMaker'],
  },
  {
    id: 'visao',
    icon: '👁️',
    title: 'Visão Computacional',
    shortDescription: 'Sistemas inteligentes de processamento de imagem e vídeo.',
    fullDescription: 'Desenvolvemos sistemas de visão computacional para automação industrial, segurança e análise de dados visuais. Nossas soluções permitem que máquinas "vejam" e interpretem o mundo real.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Reconhecimento Facial',
      'Inspeção de Qualidade',
      'Detecção de Objetos',
      'OCR e Leitura de Documentos',
      'Análise de Vídeo em Tempo Real',
      'Contagem e Rastreamento',
    ],
    technologies: ['OpenCV', 'YOLO', 'TensorFlow', 'Python', 'CUDA', 'Edge Computing'],
  },
]

const process = [
  {
    step: '01',
    title: 'Descoberta',
    description: 'Entendemos seu negócio, objetivos e requisitos através de reuniões detalhadas.',
  },
  {
    step: '02',
    title: 'Planejamento',
    description: 'Definimos arquitetura, tecnologias e cronograma do projeto.',
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description: 'Construímos a solução em sprints com entregas incrementais.',
  },
  {
    step: '04',
    title: 'Testes',
    description: 'Garantimos qualidade através de testes automatizados e manuais.',
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Publicamos a solução em ambiente de produção com monitoramento.',
  },
  {
    step: '06',
    title: 'Suporte',
    description: 'Oferecemos manutenção contínua e suporte técnico.',
  },
]

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar ao início
          </Link>
          <span className="section-label">Serviços</span>
          <h1 className={styles.title}>
            Soluções Completas em<br />
            <span className={styles.highlight}>Desenvolvimento de Software</span>
          </h1>
          <p className={styles.subtitle}>
            Oferecemos um portfólio completo de serviços para transformar 
            suas ideias em produtos digitais de sucesso.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`${styles.serviceBlock} ${index % 2 === 1 ? styles.reverse : ''}`}
            >
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.fullDescription}</p>
                
                <div className={styles.features}>
                  <h4>O que oferecemos:</h4>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.technologies}>
                  <h4>Tecnologias:</h4>
                  <div className={styles.techList}>
                    {service.technologies.map((tech) => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <Link href="/contato" className="btn btn-primary">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <span className="section-label">Metodologia</span>
            <h2 className={styles.sectionTitle}>Como Trabalhamos</h2>
            <p className={styles.processSubtitle}>
              Seguimos uma metodologia ágil que garante entregas de qualidade dentro do prazo.
            </p>
          </div>
          <div className={styles.processGrid}>
            {process.map((item) => (
              <div key={item.step} className={styles.processCard}>
                <div className={styles.processStep}>{item.step}</div>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto para começar seu projeto?</h2>
            <p>Entre em contato e receba um orçamento personalizado sem compromisso.</p>
            <div className={styles.ctaActions}>
              <Link href="/contato" className="btn btn-primary">
                Solicitar Orçamento
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="tel:+5541987165869" className="btn btn-secondary">
                📞 (41) 98716-5869
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
