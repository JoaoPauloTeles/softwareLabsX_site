'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './projetos.module.css'

const categories = ['Todos', 'Web App', 'Mobile', 'IA', 'Visão Computacional', 'Automação']

const projects = [
  {
    id: 1,
    slug: 'dashboard-analytics',
    image: '/images/projects/dashboard analitycs image.jpg',
    category: 'Web App',
    title: 'Dashboard Analytics',
    description: 'Plataforma de análise de dados em tempo real com visualizações interativas e relatórios automatizados.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
  },
  {
    id: 2,
    slug: 'automacao-processos',
    image: '/images/projects/Automacao de Processos.jpg',
    category: 'Automação',
    title: 'Automação de Processos',
    description: 'Automação de fluxos de trabalho e integrações entre sistemas com agentes de IA, como o Claude Code, para aumentar a produtividade das equipes.',
    technologies: ['Python', 'Claude API', 'n8n', 'REST APIs'],
  },
  {
    id: 3,
    slug: 'inspecao-industrial',
    image: '/images/projects/Industrial App Image.jpg',
    category: 'Visão Computacional',
    title: 'Inspeção Industrial',
    description: 'Sistema de visão computacional para controle de qualidade automatizado em linha de produção.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'AWS'],
  },
  {
    id: 4,
    slug: 'chatbot-inteligente',
    image: '/images/projects/chatbot inteligente image.jpg',
    category: 'IA',
    title: 'Chatbot Inteligente',
    description: 'Assistente virtual com processamento de linguagem natural para atendimento ao cliente 24/7.',
    technologies: ['Python', 'NLP', 'GPT API', 'React'],
  },
  {
    id: 5,
    slug: 'sistema-gestao',
    image: '/images/projects/management system image.jpg',
    category: 'Web App',
    title: 'Sistema de Gestão',
    description: 'ERP completo para gestão empresarial com módulos de vendas, estoque, financeiro e RH.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
  {
    id: 7,
    slug: 'reconhecimento-facial',
    image: '/images/projects/Facial Recognition Image.jpg',
    category: 'Visão Computacional',
    title: 'Reconhecimento Facial',
    description: 'Sistema de controle de acesso por reconhecimento facial para ambientes corporativos.',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'Raspberry Pi'],
  },
]

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Nossos <span className={styles.accent}>Projetos</span></h1>
          <p className={styles.subtitle}>
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada solução é única e pensada para resolver desafios específicos.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projects}>
        <div className="container">
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <Link href={`/projetos/${project.slug}`} key={project.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className={styles.image}
                  />
                  <span className={styles.category}>{project.category}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Tem um projeto em mente?</h2>
            <p>Vamos conversar sobre como podemos transformar sua ideia em realidade.</p>
            <Link href="/contato" className="btn btn-primary">
              Iniciar Projeto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
