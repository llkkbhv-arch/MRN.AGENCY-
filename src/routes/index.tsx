import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SitePreview } from '@/components/site/portfolio'
import { PricingSection, ContactBand, Faq } from '@/components/site/sections'
import { MotionPresentation } from '@/components/site/motion-presentation'
import motionVideo from '@/assets/videos/mrnagency-explainer.mp4.asset.json'
import motionWebm from '@/assets/videos/mrnagency-explainer.webm.asset.json'
import motionPoster from '@/assets/videos/mrnagency-explainer.jpg.asset.json'
import { projects } from '@/lib/portfolio'
import { agency } from '@/lib/agency'
import { MethodSection } from '@/components/site/method'

export const Route = createFileRoute('/')({
  head: () => ({meta: [
    {title: 'mrnagency — Sites web en 3 jours & 15 concepts'},
    {name: 'description', content: 'Votre site en 3 jours. Découvrez 15 concepts dans 8 univers et la création web mrnagency en vidéo.'},
    {property: 'og:title', content: 'mrnagency — Votre prochain site'},
    {property: 'og:description', content: '15 concepts, 8 univers, une création sur mesure. Du design à la mise en ligne en 3 jours.'},
    {property: 'og:type', content: 'website'},
    {name: 'twitter:card', content: 'summary_large_image'},
  ]}),
  component: Home,
})

function Home() {
  return <>
    <section className="home-hero section-wrap">
      <div className="hero-eyebrow"><span className="availability-dot"/> CRÉATION WEB & VISIBILITÉ DIGITALE</div>
      <div className="hero-display">
        <span className="hero-brand-name">MRNAGENCY</span>
        <h1>JE CRÉE.<br/>VOUS <em>MARQUEZ.</em></h1>
        <p>Un site à votre image. Prêt en 3 jours.</p>
        <div className="hero-actions"><Button asChild size="lg"><Link to="/contact">Lancer mon projet <ArrowUpRight/></Link></Button><span className="delivery-badge"><span className="availability-dot"/> Livraison en {agency.deliveryDays} jours</span></div>
      </div>
      <div className="hero-bottom"><span>DU BEAU. DU CLAIR. DE L’IMPACT.</span><Link to="/realisations">15 concepts à découvrir <ArrowDown size={16}/></Link><span className="hero-index">SCROLL TO EXPLORE — 01</span></div>
    </section>
    <section className="showcase-strip home-realizations" aria-label="Mes réalisations">
      <div className="section-wrap"><div className="section-heading"><div><span className="eyebrow">02 / MES RÉALISATIONS</span><h2>À chaque projet,<br/><em>son univers.</em></h2></div><Button asChild variant="outline"><Link to="/realisations">Voir tous les projets <ArrowUpRight/></Link></Button></div></div>
      <div className="showcase-track">{[projects[0],projects[4],projects[10]].map(p => <Link to="/realisations/$projet" params={{projet:p.id}} key={p.id}><SitePreview project={p}/></Link>)}</div>
      <div className="showcase-caption"><span><span className="availability-dot"/> 15 SITES. 8 UNIVERS.</span><span>IDENTITÉS MASQUÉES ↗</span></div>
    </section>
    <div className="expertise-marquee"><span>SITES WEB</span><Asterisk/><span>DESIGN SUR MESURE</span><Asterisk/><span>SEO GOOGLE</span><Asterisk/><span>ACCOMPAGNEMENT</span><Asterisk/></div>
    <MotionPresentation src={motionVideo.url} webm={motionWebm.url} poster={motionPoster.url}/>
    <MethodSection/>
    <section className="pricing-section section-space"><div className="section-wrap">
      <div className="section-heading"><div><span className="eyebrow">04 / LES FORMULES</span><h2>Du sur-mesure.<br/><em>Pas de surprise.</em></h2></div></div>
      <PricingSection/><p className="pricing-note">Domaine et hébergement à définir. Aucun résultat SEO garanti.</p>
    </div></section>
    <section className="section-wrap section-space faq-section"><div><span className="eyebrow">05 / VOS QUESTIONS</span><h2>Tout simplement.</h2></div><Faq/></section>
    <ContactBand/>
  </>
}
