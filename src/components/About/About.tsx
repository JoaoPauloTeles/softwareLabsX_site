'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './About.module.css'

const features = [
  'Equipe Especializada',
  'Metodologias Ágeis',
  'Suporte Contínuo',
  'Tecnologias Modernas',
]

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Sobre <span className={styles.accent}>Nós</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.imageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Equipe Software Labs X"
                width={800}
                height={500}
                className={styles.image}
              />
              <div className={styles.overlay} />
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.floatingValue}>100%</div>
              <div className={styles.floatingLabel}>Compromisso com Qualidade</div>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.text}>
              A Software Labs X é uma empresa especializada em desenvolvimento 
              de software que transforma desafios complexos em soluções elegantes. 
              Com anos de experiência no mercado, nossa equipe de especialistas 
              trabalha lado a lado com nossos clientes para entregar produtos 
              que superam expectativas.
            </p>

            <p className={styles.text}>
              Buscamos constantemente aprimorar a eficiência e a eficácia dos 
              processos empresariais por meio de soluções personalizadas e inovadoras.
            </p>

            <div className={styles.features}>
              {features.map((feature) => (
                <div key={feature} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link href="#contato" className="btn btn-primary">
              Conheça Nossa Equipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
