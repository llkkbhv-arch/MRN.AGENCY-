import { useEffect, useRef } from 'react'

export function MotionPresentation({ src, webm, poster }: { src: string; webm: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let userControlled = false
    const takeControl = () => { userControlled = true }
    video.addEventListener('pointerdown', takeControl)
    video.addEventListener('keydown', takeControl)
    const observer = new IntersectionObserver(([entry]) => {
      if (userControlled || !entry) return
      if (entry.isIntersecting) video.play().catch(() => {})
      else video.pause()
    }, { threshold: 0.35 })
    observer.observe(video)
    return () => {
      observer.disconnect()
      video.removeEventListener('pointerdown', takeControl)
      video.removeEventListener('keydown', takeControl)
    }
  }, [])

  return <section className="motion-intro section-space" aria-labelledby="motion-title">
    <div className="section-wrap">
      <span className="eyebrow">01 / DE L’IDÉE À LA MISE EN LIGNE</span>
      <h2 id="motion-title">Votre idée.<br/>Un site qui prend vie.</h2>
      <p>Design, création, mise en ligne. Votre site en 3 jours.</p>
      <video ref={videoRef} className="motion-video" poster={poster} controls muted loop playsInline preload="none" aria-label="La création d’un site mrnagency, du design à la mise en ligne">
        <source src={webm} type="video/webm"/>
        <source src={src} type="video/mp4"/>
        <a href={src}>Voir la vidéo mrnagency</a>
      </video>
      <div className="motion-caption"><span>VISUELS FICTIFS · CLASSEMENT GOOGLE ILLUSTRATIF, NON GARANTI.</span><span>MRNAGENCY ©</span></div>
    </div>
  </section>
}