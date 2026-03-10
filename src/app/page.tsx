import {
  Navbar,
  Hero,
  Services,
  About,
  Projects,
  Values,
  CTA,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Values />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
