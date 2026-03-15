'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Projects.module.css'

const projects = [
  {
    slug: 'fitme',
    image: '/images/projects/logo_fitme.png',
    imageStyle: { objectFit: 'contain' as const, padding: '1rem', height: '220px' },
    tags: ['Mobile App', 'IA'],
    title: 'FitMe Provador Virtual',
    description: 'Provador virtual com IA que revoluciona o e-commerce de moda, com 85% de precisão no Virtual Try-On.',
  },
  {
    slug: 'ebd-pro',
    image: '/images/projects/ebd_pro_logo.jpg',
    imageStyle: { objectFit: 'contain' as const, padding: '1rem', height: '220px' },
    tags: ['Mobile App', 'Gestão'],
    title: 'EBD PRO',
    description: 'Aplicativo completo para gerenciamento de Escola Bíblica Dominical com controle de frequência e relatórios.',
  },
  {
    slug: 'engemanx',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    tags: ['Web App', 'Indústria'],
    title: 'EngemanX',
    description: 'Plataforma de manutenção industrial que reduziu em 35% o tempo de paradas das máquinas.',
  },
]

export default function Projects() {
  return (
    <section className={styles.projects} id="projetos">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Nossos <span className={styles.accent}>Projetos</span>
          </h2>
          <Link href="/projetos" className="btn btn-secondary hide-mobile">
            Ver Todos os Projetos
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link href={`/projetos/${project.slug}`} key={project.slug} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className={styles.image}
                  style={project.imageStyle}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.mobileAction}>
          <Link href="/projetos" className="btn btn-secondary hide-desktop">
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
    </section>
  )
}