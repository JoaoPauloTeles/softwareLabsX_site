'use client'

import Link from 'next/link'
import styles from './privacidade.module.css'

export default function PrivacidadePage() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar ao início
          </Link>
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.lastUpdate}>Última atualização: Janeiro de 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.article}>
            <div className={styles.section}>
              <h2>1. Introdução</h2>
              <p>
                A Software Labs X ("nós", "nosso" ou "empresa") está comprometida em proteger 
                sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, 
                divulgamos e protegemos suas informações pessoais quando você utiliza nosso 
                site e serviços.
              </p>
              <p>
                Ao acessar ou usar nossos serviços, você concorda com a coleta e uso de 
                informações de acordo com esta política.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Informações que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              
              <h3>2.1 Informações Fornecidas por Você</h3>
              <ul>
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Nome da empresa</li>
                <li>Informações sobre seu projeto ou necessidade</li>
              </ul>

              <h3>2.2 Informações Coletadas Automaticamente</h3>
              <ul>
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Data e hora de acesso</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>3. Como Usamos suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul>
                <li>Responder às suas solicitações e fornecer suporte</li>
                <li>Enviar orçamentos e propostas comerciais</li>
                <li>Melhorar nossos serviços e site</li>
                <li>Enviar comunicações de marketing (com seu consentimento)</li>
                <li>Cumprir obrigações legais</li>
                <li>Proteger nossos direitos e prevenir fraudes</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com 
                terceiros para fins de marketing sem seu consentimento expresso.
              </p>
              <p>Podemos compartilhar suas informações com:</p>
              <ul>
                <li>Prestadores de serviços que auxiliam em nossas operações</li>
                <li>Autoridades legais quando exigido por lei</li>
                <li>Parceiros de negócios com seu consentimento</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações pessoais contra acesso não autorizado, alteração, divulgação 
                ou destruição. No entanto, nenhum método de transmissão pela Internet é 100% 
                seguro.
              </p>
            </div>

            <div className={styles.section}>
              <h2>6. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em 
                nosso site. Você pode configurar seu navegador para recusar cookies, mas 
                isso pode afetar algumas funcionalidades do site.
              </p>
              <p>Tipos de cookies que utilizamos:</p>
              <ul>
                <li><strong>Essenciais:</strong> Necessários para o funcionamento do site</li>
                <li><strong>Analíticos:</strong> Nos ajudam a entender como você usa o site</li>
                <li><strong>Funcionais:</strong> Permitem lembrar suas preferências</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>7. Seus Direitos</h2>
              <p>De acordo com a LGPD, você tem direito a:</p>
              <ul>
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a eliminação de dados desnecessários</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato conosco através do e-mail: 
                <a href="mailto:contato@softwarelabsx.com"> contato@softwarelabsx.com</a>
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
                as finalidades para as quais foram coletadas, incluindo obrigações legais, 
                contábeis ou de relatórios.
              </p>
            </div>

            <div className={styles.section}>
              <h2>9. Links para Sites de Terceiros</h2>
              <p>
                Nosso site pode conter links para outros sites que não são operados por nós. 
                Não temos controle sobre o conteúdo e práticas de privacidade desses sites 
                e não assumimos responsabilidade por eles.
              </p>
            </div>

            <div className={styles.section}>
              <h2>10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
                sobre quaisquer alterações publicando a nova política nesta página e atualizando 
                a data de "última atualização".
              </p>
            </div>

            <div className={styles.section}>
              <h2>11. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como 
                tratamos seus dados, entre em contato:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Software Labs X</strong></p>
                <p>E-mail: <a href="mailto:contato@softwarelabsx.com">contato@softwarelabsx.com</a></p>
                <p>Telefone: <a href="tel:+5541987165869">(41) 98716-5869</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
