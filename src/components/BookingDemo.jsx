import { useEffect, useMemo, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function BookingDemo(){
  const [clinics, setClinics] = useState([])
  const [doctors, setDoctors] = useState([])
  const [selectedClinic, setSelectedClinic] = useState('')

  useEffect(()=>{
    fetch(`${API}/clinics`).then(r=>r.json()).then(setClinics).catch(()=>{})
  },[])

  useEffect(()=>{
    if(!selectedClinic) return
    fetch(`${API}/doctors?clinic_id=${selectedClinic}`).then(r=>r.json()).then(setDoctors).catch(()=>{})
  },[selectedClinic])

  return (
    <section id="book" className="py-20 bg-slate-950/60 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Try a quick booking</h2>
        <p className="text-slate-300 mt-2">Preview of the booking flow with live API.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-5">
            <label className="block text-sm text-slate-300 mb-2">Clinic</label>
            <select value={selectedClinic} onChange={e=>setSelectedClinic(e.target.value)} className="w-full bg-slate-900/70 border border-white/10 rounded-lg px-3 py-2 text-white">
              <option value="">Select clinic</option>
              {clinics.map((c)=>(<option key={c._id} value={c._id}>{c.name}</option>))}
            </select>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-5">
            <label className="block text-sm text-slate-300 mb-2">Doctor</label>
            <select className="w-full bg-slate-900/70 border border-white/10 rounded-lg px-3 py-2 text-white">
              <option value="">Select doctor</option>
              {doctors.map((d)=>(<option key={d._id} value={d.user_id}>{d.specialty}</option>))}
            </select>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 flex items-end">
            <button className="inline-flex items-center rounded-md bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-2.5 font-medium shadow-lg shadow-sky-500/20 transition">Continue</button>
          </div>
        </div>
      </div>
    </section>
  )
}
