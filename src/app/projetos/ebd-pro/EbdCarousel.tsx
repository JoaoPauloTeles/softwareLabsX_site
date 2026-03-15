'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './carousel.module.css'

const images = [
  { src: '/images/projects/ebd_app_1.jpg', alt: 'EBD PRO - Tela 1' },
  { src: '/images/projects/ebd_app_2.jpg', alt: 'EBD PRO - Tela 2' },
  { src: '/images/projects/ebd_app_3.jpg', alt: 'EBD PRO - Tela 3' },
  { src: '/images/projects/ebd_app_4.jpg', alt: 'EBD PRO - Tela 4' },
]

export default function EbdCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className={styles.wrapper}>
    <div className={styles.carousel}>
      <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className={styles.slide}>
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <button className={`${styles.btn} ${styles.btnPrev}`} onClick={prev} aria-label="Anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className={`${styles.btn} ${styles.btnNext}`} onClick={next} aria-label="Próximo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
