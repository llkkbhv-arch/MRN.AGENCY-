import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

export function ScrollEffects(){
 const pathname=useRouterState({select:s=>s.location.pathname})
 useEffect(()=>{
  let disposed=false
  let revert:(()=>void)|undefined
  async function setup(){
   const [{gsap},{ScrollTrigger}]=await Promise.all([import('gsap'),import('gsap/ScrollTrigger')])
   if(disposed)return
   gsap.registerPlugin(ScrollTrigger)
   const media=gsap.matchMedia()
   media.add('(prefers-reduced-motion: no-preference)',()=>{
    const context=gsap.context(()=>{
     gsap.utils.toArray<HTMLElement>('.section-heading, .service-item, .project-item, .price-card, .faq-section, .editorial-note').forEach(el=>{
      gsap.from(el,{y:52,opacity:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}})
     })
     if(document.querySelector('.showcase-track'))gsap.fromTo('.showcase-track',{x:45},{x:-45,ease:'none',scrollTrigger:{trigger:'.showcase-strip',start:'top bottom',end:'bottom top',scrub:1}})
     if(document.querySelector('.hero-display'))gsap.to('.hero-display',{y:65,opacity:.3,ease:'none',scrollTrigger:{trigger:'.home-hero',start:'top top',end:'bottom top',scrub:1}})
     if(document.querySelector('.manifesto-text'))gsap.fromTo('.manifesto-text',{opacity:.2},{opacity:1,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top 80%',end:'center 55%',scrub:1}})
    })
    return ()=>context.revert()
   })
   revert=()=>media.revert()
   ScrollTrigger.refresh()
  }
  setup()
  return ()=>{disposed=true;revert?.()}
 },[pathname])
 return null
}
