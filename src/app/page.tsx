import {
  Navbar,
  Hero,
  Services,
  AutomationSpot,
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
        <AutomationSpot />
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
