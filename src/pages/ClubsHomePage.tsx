import { ArrowRight, Box, Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { club } from '../data/club'
import { gameLab } from '../data/gameLab'
import { images } from '../lib/assets'

export function ClubsHomePage() {
  return <main className="shell py-12 sm:py-16">
    <header className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{club.school} · {club.year}</p>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">Όμιλοι Δημιουργίας</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">Επιλέξτε έναν Όμιλο για να δείτε το υλικό, τις εργασίες και την πορεία του.</p>
    </header>

    <section className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2" aria-label="Επιλογή Ομίλου">
      <Link to="/interactive-3d-lab" className="group relative overflow-hidden rounded-[2rem] border border-sky-200 bg-white p-7 shadow-playful transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow sm:p-9">
        <div aria-hidden className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-cyan/15 blur-3xl transition group-hover:bg-cyan/25" />
        <div className="relative flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan"><Box size={25} /></span><img src={images.logo} alt="" className="h-20 w-20 rounded-2xl object-cover shadow-glow" /></div>
        <div className="relative mt-10"><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-cyan">3D design · κατασκευή</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800">Interactive 3D Lab</h2><p className="mt-4 max-w-md leading-relaxed text-slate-600">{club.description}</p></div>
        <span className="relative mt-7 inline-flex items-center gap-2 font-extrabold text-cyan">Είσοδος στον Όμιλο <ArrowRight size={18} className="transition group-hover:translate-x-1" /></span>
      </Link>

      <Link to="/game-lab" className="group relative overflow-hidden rounded-[2rem] border border-[#35366e] bg-[#171a42] p-7 text-white shadow-playful transition hover:-translate-y-1 hover:shadow-glow sm:p-9">
        <div aria-hidden className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#7255e8]/30 blur-3xl" />
        <div className="relative flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2cd8d5]/15 text-[#2cd8d5]"><Gamepad2 size={25} /></span><img src={images.gameLabIcon} alt="" className="h-20 w-20 rounded-2xl object-cover" /></div>
        <div className="relative mt-10"><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#43ddd8]">2D game design · Godot</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight">Game Lab</h2><p className="mt-4 max-w-md leading-relaxed text-slate-200">{gameLab.description}</p></div>
        <span className="relative mt-7 inline-flex items-center gap-2 font-extrabold text-[#43ddd8]">Είσοδος στον Όμιλο <ArrowRight size={18} className="transition group-hover:translate-x-1" /></span>
      </Link>
    </section>
  </main>
}
