import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await request.json()
  const { name, email, phone, company, service, budget, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 })
  }

  const lines = [
    `<p><strong>Nome:</strong> ${name}</p>`,
    company ? `<p><strong>Empresa:</strong> ${company}</p>` : '',
    `<p><strong>E-mail:</strong> ${email}</p>`,
    phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : '',
    service ? `<p><strong>Serviço:</strong> ${service}</p>` : '',
    budget ? `<p><strong>Orçamento:</strong> ${budget}</p>` : '',
    `<hr/>`,
    `<p><strong>Mensagem:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
  ].filter(Boolean).join('')

  const { error } = await resend.emails.send({
    from: 'Site Software Labs X <onboarding@resend.dev>',
    to: 'contato@softwarelabsx.com',
    replyTo: email,
    subject: `Novo contato: ${name}`,
    html: `<div style="font-family:sans-serif;max-width:600px">${lines}</div>`,
  })

  if (error) {
    return NextResponse.json({ error: 'Falha ao enviar e-mail.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
