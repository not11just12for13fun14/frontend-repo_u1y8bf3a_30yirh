import { BarChart3, CalendarDays, Building2, Stethoscope } from 'lucide-react'

export default function Dashboards(){
  const cards = [
    { title: 'Super Admin', desc: 'Global metrics across all clinics: utilization, bookings, revenue.', icon: BarChart3},
    { title: 'Clinic Admin', desc: 'Manage doctors, schedules, appointments and patient flow.', icon: Building2},
    { title: 'Doctor', desc: 'Personal calendar, availability, appointment confirmations.', icon: CalendarDays},
    { title: 'Patient', desc: 'Self-service booking, reminders, history.', icon: Stethoscope},
  ]
  return (
    <section id="dashboards" className="py-20 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Role-based Dashboards</h2>
        <p className="text-slate-300 mt-2">Purpose-built experiences for each role.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {cards.map((c, idx)=>{
            const Icon = c.icon
            return (
              <div key={idx} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-sky-400/40 hover:shadow-[0_0_36px_-8px_rgba(56,189,248,0.4)] transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-300">
                    <Icon size={22}/>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                </div>
                <p className="text-slate-300/90 text-sm mt-3">{c.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
