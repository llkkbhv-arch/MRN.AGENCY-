import { createFileRoute } from '@tanstack/react-router'
import { MethodSection } from '@/components/site/method'
import { ContactBand } from '@/components/site/sections'
export const Route=createFileRoute('/methode')({head:()=>({meta:[{title:'La méthode — Votre site en 3 jours — mrnagency'},{name:'description',content:'Cadrage, design, livraison en 3 jours et accompagnement. Découvrez les quatre étapes de votre projet web.'},{property:'og:title',content:'De l’idée au site — La méthode mrnagency'},{property:'og:description',content:'Quatre étapes, un seul interlocuteur et une livraison en 3 jours.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <><MethodSection/><ContactBand/></>})
