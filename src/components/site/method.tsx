import { useEffect, useRef, useState } from 'react'
import { Check, MousePointer2, Globe2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { agency, methodSteps } from '@/lib/agency'

export function MethodSection(){
 const ref=useRef<HTMLElement>(null)
 const [active,setActive]=useState(0)
 useEffect(()=>{
  let disposed=false
  let clean: (()=>void)|undefined
  async function setup(){
   const {ScrollTrigger}=await import('gsap/ScrollTrigger')
   const {gsap}=await import('gsap')
   if(disposed||!ref.current)return
   gsap.registerPlugin(ScrollTrigger)
   const media=gsap.matchMedia()
   media.add('(prefers-reduced-motion: no-preference)',()=>{
    if(!ref.current)return
    const trigger=ScrollTrigger.create({trigger:ref.current,start:'top top',end:'bottom bottom',onUpdate:self=>setActive(Math.min(3,Math.floor(self.progress*4)))})
    return ()=>trigger.kill()
   })
   clean=()=>media.revert()
  }
  setup()
  return ()=>{disposed=true;clean?.()}
 },[])
 function choose(i:number){const el=ref.current;if(!el)return;setActive(i);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const range=Math.max(0,el.offsetHeight-window.innerHeight);window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY+range*((i+.2)/4),behavior:'smooth'})}
 const step=methodSteps[active] ?? methodSteps[0]
 return <section className="method-scroll" ref={ref} aria-label="La méthode mrnagency"><div className="method-sticky"><span className="method-watermark" aria-hidden="true">LA MÉTHODE</span><div className="section-wrap method-inner"><div className="method-heading"><span className="eyebrow">03 / DE L’IDÉE À LA MISE EN LIGNE</span><h2>VOTRE SITE.<br/>SANS ZONE D’OMBRE.</h2><p>Quatre étapes. Un interlocuteur. Livraison en {agency.deliveryDays} jours.</p></div><div className="method-layout"><nav className="method-timeline" aria-label="Étapes du projet">{methodSteps.map((s,i)=><Button variant="ghost" key={s.name} className={`method-step ${active===i?'selected':''} ${active>i?'completed':''}`} onClick={()=>choose(i)} aria-current={active===i?'step':undefined}><span className="timeline-dot"/><span><small>Étape {i+1}</small><strong>{s.name}</strong></span></Button>)}</nav><div className="method-copy" key={`copy-${active}`}><span className="method-number">0{active+1}</span><h3>{step.title}</h3><p>{step.text}</p></div><div className={`method-art art-${active}`} key={`art-${active}`}><span className="method-art-title">{step.card}</span>{active===0?<div className="brief-lines"><i/><i/><i/></div>:active===1?<div className="mini-wireframe"><span className="wireframe-nav"/><div><i/><i/><i/></div><MousePointer2/></div>:active===2?<div className="launch-symbol"><Globe2/><span><Check/></span></div>:<div className="launch-symbol"><ShieldCheck/></div>}<div className="method-tags">{step.tags.map(t=><span key={t}>{t}</span>)}</div><p>{step.result}</p></div></div><div className="method-progress"><span>0{active+1} / 04</span><div>{methodSteps.map((s,i)=><i key={s.name} className={i<=active?'filled':''}/>)}</div><span>mrnagency — de l’idée au lancement</span></div></div></div></section>
}
