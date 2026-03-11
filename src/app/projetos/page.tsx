'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './projetos.module.css'

const categories = ['Todos', 'Web App', 'Mobile', 'IA', 'Visão Computacional']

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Web App',
    title: 'Dashboard Analytics',
    description: 'Plataforma de análise de dados em tempo real com visualizações interativas e relatórios automatizados.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    client: 'FinTech Corp',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    category: 'Mobile',
    title: 'App E-commerce',
    description: 'Aplicativo mobile completo para marketplace com integração de pagamentos e gestão de pedidos.',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Node.js'],
    client: 'Retail Plus',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'Visão Computacional',
    title: 'Inspeção Industrial',
    description: 'Sistema de visão computacional para controle de qualidade automatizado em linha de produção.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'AWS'],
    client: 'AutoParts Ltda',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    category: 'IA',
    title: 'Chatbot Inteligente',
    description: 'Assistente virtual com processamento de linguagem natural para atendimento ao cliente 24/7.',
    technologies: ['Python', 'NLP', 'GPT API', 'React'],
    client: 'ServiceDesk Pro',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Web App',
    title: 'Sistema de Gestão',
    description: 'ERP completo para gestão empresarial com módulos de vendas, estoque, financeiro e RH.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    client: 'Grupo Empresarial XYZ',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80',
    category: 'Mobile',
    title: 'App de Delivery',
    description: 'Aplicativo de entrega de alimentos com rastreamento em tempo real e sistema de avaliações.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    client: 'FoodExpress',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    category: 'Visão Computacional',
    title: 'Reconhecimento Facial',
    description: 'Sistema de controle de acesso por reconhecimento facial para ambientes corporativos.',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'Raspberry Pi'],
    client: 'SecureTech',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    category: 'IA',
    title: 'Previsão de Demanda',
    description: 'Sistema de machine learning para previsão de demanda e otimização de estoque.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'AWS'],
    client: 'LogiMax',
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
              <article key={project.id} className={styles.card}>
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
                  <div className={styles.client}>
                    <span className={styles.clientLabel}>Cliente:</span>
                    <span className={styles.clientName}>{project.client}</span>
                  </div>
                </div>
              </article>
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
