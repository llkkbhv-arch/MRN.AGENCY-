import { Link } from '@tanstack/react-router'
import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { projects, projectCategories } from '@/lib/portfolio'

type Project = (typeof projects)[number]
export function SitePreview({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`site-preview ${project.theme} ${large ? 'large-preview' : ''}`}>
    <div className="browser-bar"><span className="browser-dots"><i/><i/><i/></span><span className="private-url"><LockKeyhole size={9}/><span className="blurred">www.client-prive.fr</span></span><ArrowUpRight size={11}/></div>
    <div className="demo-topline"><span className="blurred demo-brand">ATELIER STUDIO</span><span>À propos &nbsp; Projets &nbsp; Contact ↗</span></div>
    <div className="demo-scene"><img src={project.image} alt={project.label} loading="lazy" width={1536} height={1024}/><div className="demo-content"><span className="demo-eyebrow">{project.label}</span><h3>{project.headline}</h3><span className="demo-cta">Découvrir <ArrowUpRight size={12}/></span></div><span className="demo-number">MRN</span></div>
    <div className="demo-bottom"><span>{project.field}</span><span>↓</span></div>
  </div>
}
export function ProjectGrid({ limit, filters = false, grouped = false }: { limit?: number; filters?: boolean; grouped?: boolean }) {
 const [filter, setFilter] = useState('Tous les projets')
 useEffect(() => {
  let disposed = false
  if (!filters || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => { if (!disposed) ScrollTrigger.refresh() })
  return () => { disposed = true }
 }, [filter, filters])
 const selected = projects.filter(p => filter === 'Tous les projets' || p.category === filter).slice(0, limit)
 const groups = grouped ? projectCategories.map(category => ({category, items: selected.filter(p => p.category === category)})).filter(g => g.items.length) : [{category: '', items: selected}]
 return <>{filters && <div className="filter-row">{['Tous les projets', ...projectCategories].map(f => <Button variant={filter === f ? 'default' : 'ghost'} key={f} onClick={() => setFilter(f)}>{f}{filter === f && <span className="filter-count">{selected.length}</span>}</Button>)}</div>}{groups.map(group => <section className={grouped ? 'project-category-section' : ''} key={group.category}>{grouped && <div className="category-heading"><h3>{group.category}</h3><span>{String(group.items.length).padStart(2,'0')} SITES</span></div>}<div className="project-grid">{group.items.map(p => <Link to="/realisations/$projet" params={{projet:p.id}} className="project-item" key={p.id}><div className="project-visual"><SitePreview project={p}/><span className="project-hover"><ArrowUpRight/></span></div><div className="project-caption"><div><span className="eyebrow">{String(projects.indexOf(p)+1).padStart(2,'0')} / {p.field}</span><h3>{p.name}</h3></div><ArrowUpRight size={22}/></div></Link>)}</div></section>)}</>
}
