'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import styles from './contato.module.css'

const contactMethods = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.87-1.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    label: 'Telefone',
    value: '(41) 98716-5869',
    href: 'tel:+5541987165869',
    description: 'Seg - Sex, 9h às 18h',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.87-1.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    label: 'Telefone Alternativo',
    value: '(41) 99658-1513',
    href: 'tel:+5541996581513',
    description: 'Seg - Sex, 9h às 18h',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'E-mail',
    value: 'contato@softwarelabsx.com',
    href: 'mailto:contato@softwarelabsx.com',
    description: 'Resposta em até 24h',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: 'Localização',
    value: 'Curitiba, PR',
    href: '#',
    description: 'Atendimento remoto para todo Brasil',
  },
]

const serviceOptions = [
  'Aplicativo Web',
  'Aplicativo Mobile',
  'Inteligência Artificial',
  'Visão Computacional',
  'Consultoria',
  'Outro',
]

const budgetOptions = [
  'Até R$ 10.000',
  'R$ 10.000 - R$ 30.000',
  'R$ 30.000 - R$ 50.000',
  'R$ 50.000 - R$ 100.000',
  'Acima de R$ 100.000',
  'A definir',
]

export default function ContatoPage() {
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
    } else {
      alert('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo telefone.')
    }
  }

  if (submitted) {
    return (
      <section className={styles.success}>
        <div className="container">
          <div className={styles.successContent}>
            <div className={styles.successIcon}>✓</div>
            <h1>Mensagem Enviada!</h1>
            <p>
              Obrigado por entrar em contato. Nossa equipe irá analisar sua 
              solicitação e retornará em até 24 horas úteis.
            </p>
            <div className={styles.successActions}>
              <Link href="/" className="btn btn-primary">
                Voltar ao Início
              </Link>
              <button 
                onClick={() => setSubmitted(false)} 
                className="btn btn-secondary"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Vamos <span className={styles.accent}>Conversar?</span>
          </h1>
          <p className={styles.subtitle}>
            Estamos prontos para ouvir suas ideias e ajudar a transformá-las 
            em soluções digitais inovadoras.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            {contactMethods.map((method) => (
              <a 
                key={method.label} 
                href={method.href} 
                className={styles.infoCard}
              >
                <div className={styles.infoIcon}>{method.icon}</div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{method.label}</span>
                  <span className={styles.infoValue}>{method.value}</span>
                  <span className={styles.infoDescription}>{method.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h2>Solicite um Orçamento</h2>
              <p>Preencha o formulário abaixo e retornaremos em até 24 horas.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
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

                <div className={styles.formGroup}>
                  <label htmlFor="service">Tipo de Serviço *</label>
                  <select id="service" name="service" required>
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget">Orçamento Estimado</label>
                  <select id="budget" name="budget">
                    <option value="">Selecione uma faixa</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={6}
                    required
                  />
                </div>
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

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Qual o prazo médio de desenvolvimento?</h3>
              <p>
                O prazo varia conforme a complexidade do projeto. Projetos simples 
                podem ser entregues em 4-8 semanas, enquanto projetos mais complexos 
                podem levar de 3 a 6 meses.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Vocês oferecem suporte após a entrega?</h3>
              <p>
                Sim! Oferecemos planos de suporte e manutenção contínua para garantir 
                que sua solução continue funcionando perfeitamente.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Como funciona o processo de pagamento?</h3>
              <p>
                Trabalhamos com pagamento dividido em etapas: entrada no início, 
                parcelas durante o desenvolvimento e saldo na entrega final.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Atendem fora de Curitiba?</h3>
              <p>
                Sim! Atendemos clientes em todo o Brasil de forma remota, com 
                reuniões por videoconferência e comunicação constante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
