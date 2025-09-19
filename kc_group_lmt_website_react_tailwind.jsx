


import React, { useState } from "react";

// KC Group Lmt - Single-file React component
// Built with Tailwind CSS classes (assumes Tailwind is configured in the project)
// Instructions:
// 1) Create a React app (Vite or Create React App) and enable Tailwind CSS.
// 2) Save this file as src/App.jsx and run the development server.
// 3) Replace placeholders (phone, email, logos) with your real details.

export default function App() {
  const [query, setQuery] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const services = [
    { id: 1, title: "Irembo Service", desc: "Assistance with Irembo platform forms & submissions." },
    { id: 2, title: "Stationery & School Materials", desc: "Supply of school & stationery materials." },
    { id: 3, title: "Print & Scan", desc: "Scanning, printing, photocopy & document binding." },
    { id: 4, title: "Editing & Paper Writing (Biding)", desc: "Professional editing and bid writing support." },
    { id: 5, title: "Scholarship Application Assistance", desc: "Help preparing and submitting scholarship forms." },
    { id: 6, title: "Rwanda Revenue Service (RRA)", desc: "RRA form help and guidance." },
    { id: 7, title: "E-Banking Services", desc: "Support with Equity, BK, Ecobank, I&M, BPR, RSSB e-banking." },
    { id: 8, title: "WASAC & REG", desc: "Utility account assistance and registrations." },
    { id: 9, title: "Land Service", desc: "Linking with sector land managers and document help." },
    { id:10, title: "MIFOTRA Services", desc: "Work-related services and registrations." },
    { id:11, title: "UR Application & BRD Contracts", desc: "Support with university applications and BRD contract signing." },
    { id:12, title: "Computer Software Applications", desc: "Installation, training and setup of common software." },
    { id:13, title: "Kwandika kumyenda", desc: "Debt documentation and tracking service." },
    { id:14, title: "Poster Design", desc: "Custom posters for events & promotion." },
    { id:15, title: "Invitation Writing", desc: "Professional invitation writing (events)." },
    { id:16, title: "Save the Date", desc: "Design & delivery of save-the-date cards." },
    { id:17, title: "Business Cards & Badges", desc: "Design and printing of business cards and badges." },
    { id:18, title: "Mutuelle Payment Assistance", desc: "Help with mutuelle payments and queries." },
    { id:19, title: "Banner, Pull-up, Flyer Designs", desc: "Large-format print design & files." },
    { id:20, title: "Logo Design", desc: "Brand identity & logo creation." }
  ];

  const photoServices = [
    "Photo editing",
    "Photo shoot (indoor & outdoor)",
    "Event photo shoot (birthdays, marriages, baby/bridal showers, meetings, church events, family events)",
    "Video editing (live streaming & documentaries)",
    "Gift wrapping & envelope services",
    "Event decoration (on location)",
    "Event protocol staff (professional hosts)"
  ];

  const actionPlan = [
    "Take short courses: photography, video editing, photo editing (by 30/10/2025) at KSP Kigali / Kayonza branch",
    "Seek a 6-month professional internship at Gatagara",
    "Learn sign language",
    "Start KC Group Lmt project",
    "Obtain additional driving license"
  ];

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In real project: send to an API endpoint. For now just simulate success.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuery({ name: "", phone: "", service: "", message: "" });
      setShowModal(true);
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-indigo-600 w-12 h-12 flex items-center justify-center text-white font-bold">KC</div>
            <div>
              <h1 className="text-xl font-semibold">KC Group Lmt</h1>
              <p className="text-sm text-gray-500">Your one-stop business and event service hub (Rwanda)</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#action" className="hover:underline">Action Plan</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Book Now</a>
            <button className="md:hidden p-2 rounded-md border" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Menu</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">KC Group Lmt — Professional services for individuals, students & businesses</h2>
            <p className="mt-4 text-gray-600">We provide Irembo, RRA, e-banking support, printing & design, photography, video editing and a suite of event services. Fast, reliable, and friendly assistance across Kigali and nationwide.</p>
            <div className="mt-6 flex gap-3">
              <a href="#services" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Explore Services</a>
              <a href="#contact" className="px-4 py-2 rounded-md border">Get a Quote</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-semibold">Training target</div>
                <div className="text-gray-500">Photography & design at KSP (by 30/10/2025)</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-semibold">Internship plan</div>
                <div className="text-gray-500">6 months at Gatagara</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-indigo-50 to-white rounded-lg p-6">
            <h3 className="text-lg font-semibold">Quick contact</h3>
            <p className="text-sm text-gray-600 mt-2">Leave your details and preferred service — we'll reach out.</p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input name="name" value={query.name} onChange={handleChange} className="w-full p-3 rounded border" placeholder="Your name" required />
              <input name="phone" value={query.phone} onChange={handleChange} className="w-full p-3 rounded border" placeholder="Phone number (Kereba)" required />
              <select name="service" value={query.service} onChange={handleChange} className="w-full p-3 rounded border" required>
                <option value="">Select Service</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              <textarea name="message" value={query.message} onChange={handleChange} className="w-full p-3 rounded border" placeholder="Optional message" rows={3}></textarea>
              <div className="flex items-center gap-3">
                <button type="submit" disabled={submitted} className="px-4 py-2 rounded bg-indigo-600 text-white">{submitted ? 'Sending...' : 'Send'}</button>
                <button type="button" onClick={() => setQuery({ name: '', phone: '', service: '', message: '' })} className="px-3 py-2 rounded border">Reset</button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-3">We respect your privacy. Contact details are used only to respond to requests.</p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="text-gray-600 mt-2">Full list of services offered by KC Group Lmt.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {services.map(s => (
              <article key={s.id} className="bg-white p-4 rounded shadow-sm">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold">{s.title}</h4>
                  <div className="text-xs text-gray-400">#{s.id}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1 rounded border text-sm" onClick={() => { setQuery({ ...query, service: s.title }); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>Request</button>
                  <button className="px-3 py-1 rounded bg-indigo-50 text-sm" onClick={() => alert(s.title + ' — more details will be added.')}>More</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Photo & Event Services */}
        <section id="gallery" className="mt-12">
          <h3 className="text-2xl font-bold">Photo & Event Services</h3>
          <p className="text-gray-600 mt-2">Specialized photography, video editing and event services.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold">Photo & Video Packages</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {photoServices.map((p, idx) => <li key={idx}>• {p}</li>)}
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold">Event Coverage</h4>
              <p className="text-sm text-gray-600 mt-2">From birthdays to conferences — we offer indoor & outdoor shooting, coverage packages and post-production editing.</p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={() => alert('We will contact you to discuss packages and availability.')}>Request Quote</button>
                <button className="px-3 py-2 rounded border" onClick={() => setShowModal(true)}>Check Availability</button>
              </div>
            </div>
          </div>
        </section>

        {/* Action plan */}
        <section id="action" className="mt-12 bg-white p-6 rounded shadow-sm">
          <h3 className="text-2xl font-bold">2025/2026 Action Plan</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {actionPlan.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          <p className="text-sm text-gray-500 mt-3">Note: Target date for short course completion: <strong>30 October 2025</strong>.</p>
        </section>

        {/* Contact & Footer */}
        <section id="contact" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 rounded shadow-sm">
            <h3 className="text-xl font-semibold">Contact & Booking</h3>
            <p className="text-gray-600 mt-2">Call or message us with your details. We'll respond with next steps and pricing.</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded border">
                <div className="text-sm text-gray-500">Phone (Kereba)</div>
                <div className="font-semibold mt-1">+250 7XX XXX XXX</div>
              </div>

              <div className="p-4 rounded border">
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-semibold mt-1">info@kcgroup.rw</div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Leave a detailed request</h4>
              <form onSubmit={(e)=>{e.preventDefault(); alert('Message saved: we will contact you.');}} className="mt-3 grid grid-cols-1 gap-3">
                <input className="p-3 rounded border" placeholder="Full name" required />
                <input className="p-3 rounded border" placeholder="Phone" required />
                <input className="p-3 rounded border" placeholder="Email (optional)" />
                <textarea className="p-3 rounded border" rows={4} placeholder="Describe your request" />
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded bg-indigo-600 text-white">Submit</button>
                  <button type="reset" className="px-4 py-2 rounded border">Clear</button>
                </div>
              </form>
            </div>
          </div>

          <aside className="bg-white p-6 rounded shadow-sm">
            <h4 className="font-semibold">Useful Links & Notes</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>Banking support: Equity, BK, Ecobank, I&M, BPR, RSSB</li>
              <li>Government services: Irembo, RRA, WASAC, REG, MIFOTRA, Land sector</li>
              <li>Design & printing: logos, banners, flyers, business cards</li>
            </ul>
            <div className="mt-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-2 rounded border">Back to top</button>
            </div>
          </aside>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <div>© {new Date().getFullYear()} KC Group Lmt — All rights reserved.</div>
          <div className="mt-2">Designed with simple React + Tailwind template. Replace contact placeholders with real info.</div>
        </footer>
      </main>

      {/* Modal for confirmations */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h4 className="font-semibold">Thanks! We'll contact you soon</h4>
            <p className="text-sm text-gray-600 mt-2">Your request has been recorded. Please be available on the phone you provided for follow-up.</p>
            <div className="mt-4 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-3 py-2 rounded border">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
