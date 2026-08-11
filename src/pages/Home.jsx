// import { Link } from 'react-router-dom'
// import Button from '../components/Button'
// import CTASection from '../components/CTASection'
// import Icon from '../components/Icon'
// import PortfolioCard from '../components/PortfolioCard'
// import Reveal from '../components/Reveal'
// import SectionHeading from '../components/SectionHeading'
// import ServiceCard from '../components/ServiceCard'
// import StatsSection from '../components/StatsSection'
// import { clients, process, whyUs } from '../data/site'
// import { services } from '../data/services'
// import { featuredProjects } from '../data/projects'
// import { useSeo } from '../hooks/useSeo'

// export default function Home() {
//   useSeo({
//     title: 'Webloop Agency — We Build Digital Experiences That Move Businesses Forward',
//     description:
//       'Webloop Agency designs and develops modern websites, digital experiences and creative solutions that help brands grow online.',
//     path: '/',
//   })

//   return (
//     <>
//       <Hero />
//       <ClientMarquee />
//       <StatsSection className="-mt-6 pb-8 md:-mt-10" />
//       <ServicesPreview />
//       <WhyUs />
//       <FeaturedWork />
//       <Process />
//       <CTASection secondary />
//     </>
//   )
// }

// /* ------------------------------------------------------------------ Hero */

// function Hero() {
//   return (
//     <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20 md:pt-36">
//       <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
//       <div className="glow left-[-8%] top-[4%] size-[460px] bg-accent/14" aria-hidden="true" />
//       <div className="glow right-[-6%] top-[18%] size-[420px] bg-violet/20" aria-hidden="true" />
//       <div className="glow bottom-[-14%] left-[35%] size-[380px] bg-cyan/12" aria-hidden="true" />

//       <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
//         {/* Copy */}
//         <div>
//           <span
//             className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[0.78rem] text-muted backdrop-blur-sm"
//             style={{ animationDelay: '80ms' }}
//           >
//             <span className="relative flex size-2">
//               <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
//               <span className="relative inline-flex size-2 rounded-full bg-accent" />
//             </span>
//             A digital agency from Karachi, working worldwide
//           </span>

//           <h1
//             className="animate-fade-up mt-7 text-[clamp(2.5rem,6.4vw,4.5rem)]"
//             style={{ animationDelay: '160ms' }}
//           >
//             Building <span className="text-gradient">Digital Experiences</span> That Make Businesses
//             Stand Out.
//           </h1>

//           <p
//             className="animate-fade-up mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted md:text-[1.13rem]"
//             style={{ animationDelay: '250ms' }}
//           >
//             We design and develop modern websites, digital experiences, and creative solutions that
//             help brands grow online.
//           </p>

//           <div
//             className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
//             style={{ animationDelay: '330ms' }}
//           >
//             <Button to="/contact" size="lg">
//               Start a Project
//             </Button>
//             <Button to="/portfolio" variant="secondary" size="lg" icon="arrowUpRight">
//               View Our Work
//             </Button>
//           </div>

//           <div
//             className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.86rem] text-muted"
//             style={{ animationDelay: '410ms' }}
//           >
//             <span className="inline-flex items-center gap-2">
//               <Icon name="star" size={16} className="text-accent" strokeWidth={1.4} />
//               98% client satisfaction
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <Icon name="check" size={16} className="text-accent" />
//               50+ projects shipped
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <Icon name="bolt" size={16} className="text-accent" />
//               Avg. 1.2s load time
//             </span>
//           </div>
//         </div>

//         {/* Visual */}
//         <HeroVisual />
//       </div>

//       <Link
//         to="/portfolio"
//         className="animate-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted transition-colors hover:text-accent lg:flex"
//         style={{ animationDelay: '700ms' }}
//       >
//         Scroll
//         <Icon name="arrowDown" size={16} className="animate-float" />
//       </Link>
//     </section>
//   )
// }

// function HeroVisual() {
//   return (
//     <div className="animate-fade-up relative mx-auto w-full max-w-lg lg:max-w-none" style={{ animationDelay: '380ms' }}>
//       {/* Rotating dashed ring */}
//       <div
//         className="animate-spin-slow pointer-events-none absolute left-1/2 top-1/2 hidden size-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/8 sm:block"
//         aria-hidden="true"
//       />

//       <div className="relative animate-float">
//         <div className="glass relative overflow-hidden rounded-[1.6rem] p-3 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
//           {/* Window chrome */}
//           <div className="flex items-center gap-2 px-3 py-2.5">
//             <span className="size-2.5 rounded-full bg-white/15" />
//             <span className="size-2.5 rounded-full bg-white/15" />
//             <span className="size-2.5 rounded-full bg-white/15" />
//             <span className="ml-3 h-4 flex-1 rounded-full bg-white/6" />
//           </div>

//           <div className="relative overflow-hidden rounded-[1.15rem] bg-ink-soft p-6">
//             {/* sweeping shine */}
//             <span
//               className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/10 to-transparent"
//               style={{ animation: 'wl-sweep 5.5s ease-in-out infinite' }}
//               aria-hidden="true"
//             />

//             <div className="flex items-start justify-between">
//               <div>
//                 <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted">Performance</p>
//                 <p className="mt-2 font-display text-3xl font-semibold text-fg">
//                   +142<span className="text-accent">%</span>
//                 </p>
//                 <p className="mt-1 text-[0.78rem] text-muted">conversions after relaunch</p>
//               </div>
//               <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
//                 Live
//               </span>
//             </div>

//             {/* Chart */}
//             <svg viewBox="0 0 320 120" className="mt-6 w-full" role="img" aria-label="Growth chart">
//               <defs>
//                 <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0" stopColor="#C8FF4D" stopOpacity="0.35" />
//                   <stop offset="1" stopColor="#C8FF4D" stopOpacity="0" />
//                 </linearGradient>
//                 <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
//                   <stop offset="0" stopColor="#35E0D8" />
//                   <stop offset="1" stopColor="#C8FF4D" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M4 100 L52 84 L100 92 L148 60 L196 68 L244 34 L316 18 L316 120 L4 120 Z"
//                 fill="url(#hero-area)"
//               />
//               <path
//                 d="M4 100 L52 84 L100 92 L148 60 L196 68 L244 34 L316 18"
//                 fill="none"
//                 stroke="url(#hero-line)"
//                 strokeWidth="2.6"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <circle cx="316" cy="18" r="4.5" fill="#C8FF4D" />
//             </svg>

//             <div className="mt-5 grid grid-cols-3 gap-3">
//               {[
//                 { k: 'LCP', v: '0.9s' },
//                 { k: 'CLS', v: '0.01' },
//                 { k: 'SEO', v: '100' },
//               ].map((m) => (
//                 <div key={m.k} className="rounded-xl border border-white/8 bg-white/3 px-3 py-3">
//                   <p className="text-[0.66rem] uppercase tracking-[0.18em] text-muted">{m.k}</p>
//                   <p className="mt-1 font-display text-[1.05rem] font-semibold text-fg">{m.v}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating chips */}
//         <div
//           className="glass absolute -left-4 bottom-16 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex"
//           style={{ animation: 'wl-float 6s ease-in-out infinite 0.8s' }}
//         >
//           <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent">
//             <Icon name="pen" size={17} />
//           </span>
//           <div>
//             <p className="text-[0.8rem] font-medium text-fg">Design system</p>
//             <p className="text-[0.7rem] text-muted">64 components</p>
//           </div>
//         </div>

//         <div
//           className="glass absolute -right-3 -top-4 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex"
//           style={{ animation: 'wl-float 7.5s ease-in-out infinite 0.3s' }}
//         >
//           <span className="grid size-9 place-items-center rounded-xl bg-cyan/15 text-cyan">
//             <Icon name="code" size={17} />
//           </span>
//           <div>
//             <p className="text-[0.8rem] font-medium text-fg">Shipped</p>
//             <p className="text-[0.7rem] text-muted">on schedule</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* -------------------------------------------------------------- Marquee */

// function ClientMarquee() {
//   const row = [...clients, ...clients]

//   return (
//     <section
//       className="relative overflow-hidden border-y border-white/8 py-6"
//       aria-label="Selected clients"
//     >
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

//       <div className="flex w-max animate-marquee items-center gap-14">
//         {row.map((name, i) => (
//           <span
//             key={`${name}-${i}`}
//             className="font-display text-[0.95rem] font-semibold tracking-[0.24em] whitespace-nowrap text-white/25 transition-colors duration-300 hover:text-accent/70"
//           >
//             {name}
//           </span>
//         ))}
//       </div>
//     </section>
//   )
// }

// /* ------------------------------------------------------------- Services */

// function ServicesPreview() {
//   return (
//     <section className="relative py-24 md:py-32">
//       <div className="glow right-[-10%] top-[20%] size-[380px] bg-violet/12" aria-hidden="true" />

//       <div className="shell relative z-10">
//         <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
//           <SectionHeading
//             eyebrow="What we do"
//             title="Services built around"
//             highlight="how you grow."
//             lead="Six disciplines, one team. We plug into your business where you need us most — and we are just as happy owning the whole thing end to end."
//             align="left"
//           />
//           <Reveal delay={200} className="shrink-0">
//             <Button to="/services" variant="secondary" icon="arrowUpRight">
//               All services
//             </Button>
//           </Reveal>
//         </div>

//         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, i) => (
//             <Reveal key={service.slug} delay={i * 70}>
//               <ServiceCard service={service} index={i} />
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* --------------------------------------------------------------- Why us */

// function WhyUs() {
//   return (
//     <section className="relative overflow-hidden border-y border-white/8 bg-ink-soft py-24 md:py-32">
//       <div className="glow left-[-8%] bottom-[-10%] size-[420px] bg-accent/10" aria-hidden="true" />

//       <div className="shell relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
//         <div className="lg:sticky lg:top-32 lg:self-start">
//           <SectionHeading
//             eyebrow="Why Webloop"
//             title="Why clients keep"
//             highlight="coming back."
//             lead="No account-manager telephone game, no template farm. You work directly with the people building your project, and the work is judged on results — not on how many slides we made."
//             align="left"
//           />
//           <Reveal delay={220} className="mt-9">
//             <Button to="/about" variant="secondary">
//               Meet the team
//             </Button>
//           </Reveal>
//         </div>

//         <ul className="space-y-3">
//           {whyUs.map((item, i) => (
//             <Reveal as="li" key={item.title} delay={i * 80}>
//               <div className="group flex gap-5 rounded-2xl border border-white/8 bg-surface/50 p-6 transition-all duration-500 hover:border-accent/30 hover:bg-surface/80">
//                 <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/4 text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/12">
//                   <Icon name={item.icon} size={22} />
//                 </span>
//                 <div>
//                   <h3 className="text-[1.1rem] font-semibold text-fg">{item.title}</h3>
//                   <p className="mt-2 text-[0.94rem] leading-relaxed text-muted">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }

// /* ---------------------------------------------------------------- Work */

// function FeaturedWork() {
//   return (
//     <section className="relative py-24 md:py-32">
//       <div className="shell">
//         <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
//           <SectionHeading
//             eyebrow="Featured work"
//             title="Projects we're"
//             highlight="proud of."
//             lead="A snapshot of recent launches — fintech, commerce, property and SaaS — each built to hit a specific business number."
//             align="left"
//           />
//           <Reveal delay={200} className="shrink-0">
//             <Button to="/portfolio" variant="secondary" icon="arrowUpRight">
//               View all work
//             </Button>
//           </Reveal>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-2">
//           {featuredProjects.map((project, i) => (
//             <Reveal key={project.slug} delay={i * 90}>
//               <PortfolioCard project={project} />
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ------------------------------------------------------------- Process */

// function Process() {
//   return (
//     <section className="relative overflow-hidden border-y border-white/8 bg-ink-soft py-24 md:py-32">
//       <div className="glow right-[-8%] top-[10%] size-[400px] bg-cyan/10" aria-hidden="true" />

//       <div className="shell relative z-10">
//         <SectionHeading
//           eyebrow="How we work"
//           title="A process that keeps"
//           highlight="projects on track."
//           lead="Four stages, clear deliverables at each one. You always know what is happening this week and what lands next."
//         />

//         <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {process.map((step, i) => (
//             <Reveal as="li" key={step.step} delay={i * 90}>
//               <div className="group relative h-full rounded-2xl border border-white/8 bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30">
//                 {/* connector */}
//                 {i < process.length - 1 ? (
//                   <span
//                     className="pointer-events-none absolute right-[-13px] top-12 hidden h-px w-6 bg-gradient-to-r from-accent/50 to-transparent lg:block"
//                     aria-hidden="true"
//                   />
//                 ) : null}

//                 <div className="flex items-center justify-between">
//                   <span className="font-display text-[2.4rem] font-semibold leading-none text-white/10 transition-colors duration-500 group-hover:text-accent/40">
//                     {step.step}
//                   </span>
//                   <span className="size-2 rounded-full bg-accent/50 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent" />
//                 </div>

//                 <h3 className="mt-6 text-[1.22rem] font-semibold text-fg">{step.title}</h3>
//                 <p className="mt-3 text-[0.93rem] leading-relaxed text-muted">{step.description}</p>

//                 <ul className="mt-5 space-y-2">
//                   {step.points.map((point) => (
//                     <li key={point} className="flex items-start gap-2.5 text-[0.86rem] text-muted">
//                       <Icon name="check" size={15} className="mt-0.5 shrink-0 text-accent" />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </Reveal>
//           ))}
//         </ol>
//       </div>
//     </section>
//   )
// }
