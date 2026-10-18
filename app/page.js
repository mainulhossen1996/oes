import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { HeroArt, Icons, Tiles } from "@/components/Art";
import { site } from "@/lib/site";

const services = [
  ["civil", "Civil work", "Foundations, RCC casting, brickwork, plastering, roads, drains and boundary walls for public and private projects."],
  ["interior", "Interior design & development", "Offices, shops, homes and institutions. Partitions, false ceilings, flooring, woodwork and fit-out, designed and delivered together."],
  ["plumbing", "Plumbing", "Water supply lines, sanitary fittings, drainage, septic and tank connections, installed to spec and pressure tested."],
  ["painting", "Painting", "Interior and exterior painting, putty and surface preparation, waterproof coatings and finishing for new and existing buildings."],
];
const supplies = ["Cement, sand & stone", "Rod & steel", "Bricks & blocks", "Pipes & sanitary fittings", "Paint & chemicals", "Tiles & flooring", "Electrical items", "Office & furniture supplies"];
const steps = [
  ["Tell us the scope", "Send drawings, a BOQ or just a description with the location."],
  ["Site visit and quotation", "We measure, check conditions and send a clear priced quotation."],
  ["Work or supply begins", "A supervised team starts on the agreed schedule, or materials are delivered."],
  ["Handover and billing", "We finish snags, measure the work and hand over with proper documents."],
];
const work = [["civil", "RCC frame and structure"], ["interior", "Interior fit-out"], ["plumbing", "Water supply and drainage"], ["painting", "Interior and exterior painting"]];
const roles = [
  ["Main contractor", "We plan, build, finish and hand over the whole job with one point of contact."],
  ["Subcontractor", "We take a defined scope, such as plumbing, painting or interiors, and finish it on your timeline."],
  ["Supplier", "We quote and deliver materials for government tenders and private projects."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="blueprint text-white">
          <div className="wrap grid items-center gap-12 py-20 md:grid-cols-5 md:py-28">
            <div className="hero-in md:col-span-3">
              <p className="mb-4 font-semibold text-blue-200">Government contractor &amp; supplier, Bangladesh</p>
              <h1 className="text-4xl font-medium sm:text-5xl md:text-6xl">We build it, finish it, and supply what it&rsquo;s built from.</h1>
              <p className="mt-6 max-w-xl text-lg text-blue-100">Civil work, interior development, plumbing and painting, plus every kind of construction supply. We work as main contractor or as subcontractor to your team.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-white">Request a quote</a>
                <a href="#services" className="btn btn-ghost">See our services</a>
              </div>
            </div>
            <div className="md:col-span-2"><HeroArt /></div>
          </div>
          <dl className="border-t border-white/20">
            <div className="wrap grid grid-cols-2 gap-4 py-6 text-sm md:grid-cols-4">
              {[["Experience", `${site.experience} on site`], ["Registration", "Govt. contractor & supplier"], ["Engagement", "Contractor or subcontractor"], ["Trades", "4 in-house, plus supplies"]].map(([k, v]) => (
                <div key={k}><dt className="text-blue-200">{k}</dt><dd className="font-head text-xl font-medium">{v}</dd></div>
              ))}
            </div>
          </dl>
        </section>

        {/* Services */}
        <section id="services" className="wrap py-20">
          <h2 className="max-w-2xl text-3xl font-medium md:text-4xl">Four trades under one roof</h2>
          <p className="mt-4 max-w-2xl text-slate-600">One team for structure, finish and fittings means fewer handovers, fewer delays and one party responsible for the result.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(([k, t, d]) => (
              <article key={k} className="group rounded-md border border-slate-200 border-l-[6px] border-l-brand bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">{Icons[k]}</div>
                <h3 className="text-2xl font-medium">{t}</h3>
                <p className="mt-3 text-slate-600">{d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Supplies */}
        <section id="supplies" className="bg-brand-light">
          <div className="wrap grid items-start gap-12 py-20 md:grid-cols-2 md:gap-16">
            <div className="md:sticky md:top-28">
              <h2 className="font-head text-3xl font-medium text-slate-900 md:text-4xl">Supplies for tender, site or shop</h2>
              <p className="mt-4 max-w-md text-slate-600">We supply to government offices and to other contractors. Tell us the item list and quantity and we quote against it, with delivery to your site.</p>
              <ul className="mt-6 space-y-2 text-sm font-semibold text-slate-700">
                {["Quoted against your item list", "Delivered to your site"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-blue mt-8">Send your item list</a>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {supplies.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-lg border border-slate-200 border-l-4 border-l-brand bg-white px-4 py-4 font-semibold text-slate-800 shadow-sm transition hover:border-brand hover:shadow-md">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="wrap py-20">
          <h2 className="font-head text-3xl font-medium text-slate-900 md:text-4xl">How a job runs with us</h2>
          <p className="mt-4 max-w-2xl text-slate-600">Four clear steps from first call to handover, so you always know what happens next.</p>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li
                key={t}
                className="relative rounded-lg border border-slate-200 border-t-4 border-t-brand bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:after:absolute md:after:left-full md:after:top-12 md:after:h-0.5 md:after:w-6 md:after:bg-brand/30 md:last:after:hidden"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand font-head text-lg font-medium text-white ring-4 ring-brand-light">{i + 1}</span>
                <h3 className="font-head text-xl font-medium text-slate-900">{t}</h3>
                <p className="mt-2 text-slate-600">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Work */}
        <section className="bg-white py-20">
          <div className="wrap">
            <h2 className="text-3xl font-medium md:text-4xl">What our work looks like</h2>
            <p className="mt-4 max-w-2xl text-slate-600">Illustrations for now. Replace these with photos from your finished sites by putting images in <code>/public</code> and swapping the tiles.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {work.map(([k, c]) => (
                <figure key={k} className="overflow-hidden rounded-md border border-slate-200 transition hover:shadow-lg">
                  {Tiles[k]}<figcaption className="p-4 font-semibold">{c}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="wrap grid items-start gap-12 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium md:text-4xl">Young company, careful work</h2>
            <p className="mt-4 text-slate-600">{site.name} has worked for {site.experience} as a government contractor and supplier in Bangladesh. We take on full contracts and also join larger projects as a subcontractor, delivering our trade package to the main contractor&rsquo;s schedule.</p>
            <p className="mt-4 text-slate-600">We keep the team small, the site supervised and the paperwork in order, so tender documents, measurement and billing stay clean.</p>
          </div>
          <div className="grid gap-4">
            {roles.map(([t, d]) => (
              <div key={t} className="rounded-md border border-slate-200 border-l-[6px] border-l-accent bg-white p-6">
                <h3 className="text-xl font-medium">As {t.toLowerCase()}</h3><p className="mt-2 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="blueprint text-white">
          <div className="wrap grid gap-12 py-20 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium md:text-4xl">Tell us about your project</h2>
              <p className="mt-4 text-blue-100">Send the scope, location and timeline. We reply with a site visit or a quotation.</p>
              <ul className="mt-10 space-y-3 text-blue-50">
                <li><span className="text-blue-200">Phone:</span> <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="underline">{site.phone}</a></li>
                <li><span className="text-blue-200">Email:</span> <a href={`mailto:${site.email}`} className="underline">{site.email}</a></li>
                <li><span className="text-blue-200">Office:</span> {site.address}</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-brand-deep text-blue-200">
        <div className="wrap flex flex-wrap justify-between gap-2 py-6 text-sm">
          <span>&copy; {new Date().getFullYear()} {site.name}</span>
          <span>Civil work, interior, plumbing, painting and supplies, Bangladesh</span>
        </div>
      </footer>

      <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800 0-1.300.7-2 1-2.300.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 1.900c.1.200.1.300 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.600-.1l1.800.9c.3.100.5.200.5.300.100.2.100.8-.1 1.400z" /></svg>
      </a>
    </>
  );
}
