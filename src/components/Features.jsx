import { Calendar, Users, ShieldCheck, Activity } from 'lucide-react'

export default function Features(){
  const items = [
    {icon: Calendar, title: 'Calendar & Scheduling', desc: 'Real-time availability, slot management, reminders.'},
    {icon: Users, title: 'Multi-tenant Roles', desc: 'Super admin, clinic admins, doctors, patients with RBAC.'},
    {icon: ShieldCheck, title: 'Secure & Compliant', desc: 'Best practices for privacy and audit logs.'},
    {icon: Activity, title: 'Dashboards & Analytics', desc: 'Utilization, no-show rate, revenue trends.'},
  ]
  return (
    <section id="features" className="py-20 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Platform Capabilities</h2>
        <p className="text-slate-300 mt-2">Everything you need to run clinics at scale.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx)=>{
            const Icon = it.icon
            return (
              <div key={idx} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 hover:border-sky-400/40 hover:shadow-[0_0_24px_-8px_rgba(56,189,248,0.35)] transition">
                <div className="w-11 h-11 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-300 mb-4 group-hover:bg-sky-500/30 transition">
                  <Icon size={22}/>
                </div>
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="text-slate-300/90 text-sm mt-1">{it.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
