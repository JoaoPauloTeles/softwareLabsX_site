'use client'

import { useState, FormEvent } from 'react'
import styles from './Contact.module.css'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.22 19.79 19.79 0 0 1 1.87 3.59 2 2 0 0 1 3.84 1.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.91 5.91l1-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const contactMethods = [
  {
    icon: <PhoneIcon />,
    label: 'Telefone',
    value: '(41) 98716-5869',
    href: 'tel:+5541987165869',
  },
  {
    icon: <PhoneIcon />,
    label: 'Telefone Alternativo',
    value: '(41) 99658-1513',
    href: 'tel:+5541996581513',
  },
  {
    icon: <MailIcon />,
    label: 'E-mail',
    value: 'contato@softwarelabsx.com',
    href: 'mailto:contato@softwarelabsx.com',
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form).entries())

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setIsSubmitting(false)

    if (res.ok) {
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      alert('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo telefone.')
    }
  }

  return (
    <section className={styles.contact} id="contato">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Entre em <span className={styles.accent}>Contato</span>
            </h2>
            <p className={styles.description}>
              Estamos prontos para ouvir suas ideias e ajudar a transformá-las 
              em soluções digitais inovadoras. Entre em contato por qualquer 
              um dos nossos canais.
            </p>

            <div className={styles.methods}>
              {contactMethods.map((method) => (
                <div key={method.label} className={styles.method}>
                  <div className={styles.methodIcon}>{method.icon}</div>
                  <div className={styles.methodText}>
                    <span className={styles.methodLabel}>{method.label}</span>
                    <a href={method.href} className={styles.methodValue}>
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Conte-nos sobre seu projeto..."
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner} />
                  Enviando...
                </>
              ) : submitted ? (
                <>
                  ✓ Mensagem Enviada!
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
