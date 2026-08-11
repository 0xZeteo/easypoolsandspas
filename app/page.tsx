'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  Globe,
  Send,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Ruler,
  ShieldCheck,
  Sparkles,
  Waves,
  X,
} from 'lucide-react'

const phone = '+2348033209295'
const displayPhone = '+234 803 320 9295'
const whatsapp = `https://wa.me/${phone.replace('+', '')}?text=Hello%20Easy%20Pools%20%26%20Spas%2C%20I%27d%20like%20to%20discuss%20a%20pool%20project.`

const services = [
  { icon: Waves, title: 'Swimming Pool Construction', copy: 'From excavation to the final tile, we build pools engineered for beauty, strength, and everyday enjoyment.' },
  { icon: Sparkles, title: 'Spas & Wellness', copy: 'Create a private retreat with custom spas, hydrotherapy features, warm-water systems, and refined finishes.' },
  { icon: Droplets, title: 'Water Features & Fountains', copy: 'Make water the signature of your space with fountains, cascades, waterfalls, and statement installations.' },
  { icon: ShieldCheck, title: 'Pool Renovation & Care', copy: 'Restore, modernise, and maintain existing pools with reliable equipment, repairs, relining, and expert care.' },
]

const projects = [
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-10%20at%2012.20.02-tt0bsZfzCdmabqomFwpigd6xAIdyJG.jpeg', title: 'Infinity Edge Residence', type: 'Residential pool construction' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-10%20at%2012.19.57-tym32nRYlhvIrnWzhjtJa2qLHZ3BZI.jpeg', title: 'Private Spa Retreat', type: 'Pool & spa installation' },
]

const galleryVideos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.54%20%281%29-2-YHCSDqI6QRN82PYO2gmcIgd8Y5de7t.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.56-2-8mYSrZUrW9DdDVIE8etqIG25B6hmNR.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.55%20%281%29-2-CcQdx6Z6JOD5iDyeEWaWdZbMLrzRrD.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.52-2-1INAZ7JrhGYRTuBckETUv0glnyWYSB.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.56%20%281%29-2-9uMeJZfKYYwxu0RoXCljy7FJc7Ya0z.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.49%20%281%29-2-HlYNv5zyyCm0VLfvZejNMzVoK45nBB.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.55-2-uAFIHKRMoUa1FTfnUi4ONBCrJuxo6W.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.19.49-2-X2RyvXWuzjq4g72EzDCQUgpWwVrh2z.mp4',
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/15 bg-slate-950/70 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Easy Pools and Spas home">
            <Image src="/easypools-logo.png" alt="Easy Pools and Spas" width={112} height={70} className="h-12 w-auto object-contain" priority />
            <span className="hidden border-l border-white/20 pl-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70 sm:block">Think it. We build it.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Primary navigation">
            {['Services', 'Projects', 'Gallery', 'Process', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-cyan-300">{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${phone}`} className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white/10 sm:flex"><Phone className="size-4" /> Call us</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 sm:flex"><MessageCircle className="size-4" /> WhatsApp</a>
            <button type="button" className="rounded-full p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 bg-slate-950 px-5 py-6 lg:hidden">{['Services', 'Projects', 'Gallery', 'Process', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a href={whatsapp} className="flex items-center gap-2 text-cyan-300"><MessageCircle className="size-4" /> Chat on WhatsApp</a></nav>}
      </header>

      <section id="top" className="relative isolate flex min-h-[780px] items-end overflow-hidden bg-slate-950 pb-20 pt-36 text-white lg:min-h-screen lg:pb-28">
        <video className="absolute inset-0 -z-20 size-full object-cover opacity-65" autoPlay muted loop playsInline poster={projects[0].image}><source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-08-10%20at%2012.20.02%20%281%29-NWL7jNcxaxYdmTB5mPjKoBlqbNKS5q.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,12,27,.92)_0%,rgba(2,12,27,.58)_46%,rgba(2,12,27,.18)_100%)]" />
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8"><Reveal className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300"><span className="h-px w-10 bg-cyan-300" /> Nationwide pool & spa specialists</p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">The <span className="text-cyan-300">best swimming pool</span> construction company in Nigeria.</h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/75 sm:text-xl">From design to execution, pool construction demands precision, innovation, and expertise — laying the foundation with care, ensuring structural integrity, and delivering excellence with every tile and contour.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition-transform hover:scale-105">Start your project <ArrowRight className="size-4" /></a><a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 font-semibold transition-colors hover:bg-white/10"><Play className="size-4 fill-current" /> See our work</a></div>
        </Reveal></div>
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 lg:flex"><span>Scroll to explore</span><ChevronDown className="size-4 animate-bounce" /></div>
      </section>

      <section className="border-b border-border bg-card"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 py-8 sm:grid-cols-4 lg:px-8">{[['20+', 'Years of experience'], ['36', 'States we serve'], ['100+', 'Projects completed'], ['100%', 'Built with care']].map(([value, label]) => <Reveal key={label} className="px-4 first:pl-0 sm:px-8"><p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{value}</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p></Reveal>)}</div></section>

      <section id="services" className="bg-background px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><Reveal><p className="eyebrow">What we do</p><h2 className="section-title mt-4 max-w-3xl">Everything water should feel like.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">One team for the complete journey — from the first sketch and soil test to the first swim, service visit, and years of enjoyment.</p></Reveal><div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">{services.map(({ icon: Icon, title, copy }, i) => <Reveal key={title} className="bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground sm:p-10"><Icon className="size-9 text-cyan-500" /><p className="mt-12 text-sm text-muted-foreground">0{i + 1}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 max-w-md leading-7 text-muted-foreground">{copy}</p><a href={whatsapp} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Discuss this service <ArrowRight className="size-4" /></a></Reveal>)}</div></div></section>

      <section id="projects" className="bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-cyan-300">Selected work</p><h2 className="section-title mt-4 max-w-2xl">Crafted for the way you live.</h2></div><a href={whatsapp} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">Plan your project <ArrowRight className="size-4" /></a></Reveal><div className="mt-14 grid gap-5 lg:grid-cols-12">{projects.map((project, i) => <Reveal key={project.title} className={`${i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'} group relative overflow-hidden rounded-3xl ${i === 1 ? 'lg:translate-y-14' : ''}`}><div className="relative aspect-[4/3] overflow-hidden"><Image src={project.image} alt={`${project.title} by Easy Pools and Spas`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 60vw" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="text-sm text-cyan-300">{project.type}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3></div></div></Reveal>)}</div></div></section>

      <section id="gallery" className="bg-background px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Project gallery</p><h2 className="section-title mt-4 max-w-3xl">See the work in motion.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">A moving look at the pools, spas, and water spaces we build for clients across Nigeria.</p></div><p className="shrink-0 text-sm font-medium text-muted-foreground">Swipe to explore <span aria-hidden="true">→</span></p></Reveal><div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:thin]">{galleryVideos.map((video, i) => <Reveal key={video} className="min-w-[82vw] snap-start sm:min-w-[360px] lg:min-w-[410px]"><div className="group relative overflow-hidden rounded-3xl bg-slate-950 shadow-xl"><video className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" muted loop playsInline autoPlay preload="metadata"><source src={video} type="video/mp4" /></video><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 text-sm font-semibold text-white">Easy Pools &amp; Spas · Project {String(i + 1).padStart(2, '0')}</p></div></Reveal>)}</div></div></section>

      <section id="process" className="bg-muted px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><Reveal><p className="eyebrow">Our approach</p><h2 className="section-title mt-4 text-foreground">Measured. Meticulous. Made to last.</h2><p className="mt-6 max-w-md leading-8 text-muted-foreground">The best pool projects are built on clear thinking. We turn your idea into an enduring space through a transparent, detail-first process.</p></Reveal><div className="grid gap-0">{[['01', 'Discover', 'We listen to your vision, site, lifestyle, and budget before recommending the right pool or spa direction.'], ['02', 'Design', 'Our team maps every contour, material, feature, and technical requirement into a clear project plan.'], ['03', 'Build', 'Skilled construction, careful supervision, and quality materials bring the design to life with precision.'], ['04', 'Enjoy', 'We commission, explain, and support your new water space so it performs beautifully from day one.']].map(([number, title, copy]) => <Reveal key={number} className="grid grid-cols-[52px_1fr] gap-5 border-t border-border py-7"><span className="font-mono text-sm text-muted-foreground">{number}</span><div><h3 className="text-xl font-semibold text-foreground">{title}</h3><p className="mt-2 max-w-lg leading-7 text-muted-foreground">{copy}</p></div></Reveal>)}</div></div></section>

      <section id="about" className="relative bg-background px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center"><Reveal className="relative min-h-[480px] overflow-hidden rounded-3xl bg-slate-900"><Image src={projects[0].image} alt="A finished Easy Pools and Spas infinity pool" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-5 text-slate-950 backdrop-blur"><p className="text-3xl font-semibold">20+</p><p className="text-xs uppercase tracking-[0.12em] text-slate-600">Years making water remarkable</p></div></Reveal><Reveal><p className="eyebrow">Why Easy Pools & Spas</p><h2 className="section-title mt-4">A better standard for building with water.</h2><ul className="mt-8 flex flex-col gap-5">{['Nationwide service across Nigeria', 'End-to-end construction and installation', 'Designs tailored to your property and lifestyle', 'Reliable technical guidance after handover'].map((item) => <li key={item} className="flex items-start gap-3 text-lg"><span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700"><Check className="size-4" /></span>{item}</li>)}</ul><div className="mt-10 border-t border-border pt-6"><p className="text-sm text-muted-foreground">Project leadership</p><p className="mt-2 font-semibold">Hope Egabor <span className="font-normal text-muted-foreground">· Chairman &amp; Founder</span></p><p className="mt-2 text-sm text-muted-foreground">Mark Simon Kwedson · Chief Operating Officer</p></div></Reveal></div></section>

      <section className="relative overflow-hidden bg-primary px-5 py-24 text-primary-foreground lg:px-8 lg:py-32"><div className="absolute right-0 top-0 size-72 rounded-full bg-cyan-400/20 blur-3xl" /><div className="relative mx-auto max-w-5xl text-center"><Reveal><p className="eyebrow text-cyan-300">Let’s make an entrance</p><h2 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Your dream pool starts with one conversation.</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/70">Tell us what you are imagining. We will help you shape the right pool, spa, fountain, or water feature for your space anywhere in Nigeria.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-4 font-semibold text-slate-950"><Phone className="size-4" /> Call {displayPhone}</a><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 font-semibold hover:bg-white/10"><MessageCircle className="size-4" /> Chat on WhatsApp</a></div></Reveal></div></section>

      <footer className="bg-slate-950 px-5 py-12 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><Image src="/easypools-logo.png" alt="Easy Pools and Spas" width={130} height={80} className="h-14 w-auto object-contain" /><p className="mt-4 max-w-sm text-sm leading-6 text-white/50">Swimming pool construction, spa installation, fountains, water features, renovation, and maintenance — across Nigeria.</p></div><div className="flex gap-3"><a href="#top" aria-label="Website" className="rounded-full border border-white/15 p-3 hover:bg-white/10"><Globe className="size-4" /></a><a href={whatsapp} aria-label="WhatsApp" className="rounded-full border border-white/15 p-3 hover:bg-white/10"><Send className="size-4" /></a><a href={`mailto:hello@easypools.ng`} aria-label="Email Easy Pools" className="rounded-full border border-white/15 p-3 hover:bg-white/10"><Mail className="size-4" /></a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">© {new Date().getFullYear()} Easy Pools & Spas. Built for better water.</div></footer>

      <button type="button" onClick={() => setShowChat(!showChat)} className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/30 transition-transform hover:scale-110" aria-label="Open WhatsApp chat">{showChat ? <X /> : <MessageCircle className="size-6" />}</button>
      {showChat && <div className="fixed bottom-24 right-5 z-50 w-[min(340px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl"><div className="bg-[#25D366] px-5 py-4 text-white"><p className="font-semibold">Easy Pools & Spas</p><p className="text-xs text-white/80">Typically replies within a few minutes</p></div><div className="p-5"><p className="rounded-2xl rounded-tl-none bg-muted px-4 py-3 text-sm leading-6">Hi there. Tell us about the pool or water feature you have in mind.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white">Continue in WhatsApp <ArrowRight className="size-4" /></a></div></div>}
    </main>
  )
}

// Provided visual references: the supplied logo is the Easy Pools wordmark with blue/cyan wave detailing and red tagline; the project images show a rooftop infinity pool, a compact residential pool with spa, and a finished pool overlooking a city landscape. The supplied videos document completed pool installations and are used as immersive hero media.
