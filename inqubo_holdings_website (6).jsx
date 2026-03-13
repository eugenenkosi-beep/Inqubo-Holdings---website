import React from "react";

/* =====================================================
   INQUBO HOLDINGS PROFESSIONAL ENGINEERING WEBSITE
   Structured like major consulting engineering firms
   ===================================================== */

/* ---------------- HEADER ---------------- */
function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Inqubo Holdings Logo" className="h-14" />
          <div>
            <h1 className="text-2xl font-bold">Inqubo Holdings</h1>
            <p className="text-sm text-gray-300">Engineering Sustainable Infrastructure</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Inqubo Holdings</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Inqubo Holdings is a South African infrastructure consulting and
          engineering support company delivering municipal infrastructure,
          water systems, asset verification and programme management
          services. We partner with municipalities, water boards and
          consulting engineers to deliver sustainable infrastructure
          development across South Africa.
        </p>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Civil & Infrastructure Engineering Consultants
        </h2>

        <p className="text-lg text-gray-700">
          Supporting municipalities, water boards and infrastructure
          developers with practical engineering solutions across South
          Africa.
        </p>
      </div>
    </section>
  );
}

/* ---------------- COMPANY STATS ---------------- */
function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        <Stat number="10+" label="Infrastructure Projects" />
        <Stat number="4" label="Provinces Served" />
        <Stat number="5+" label="Municipal Clients" />
        <Stat number="R4M+" label="Projects Delivered" />
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  "Civil & Structural Engineering",
  "Water Infrastructure Engineering",
  "Transportation & Traffic Engineering",
  "Construction Management",
  "Municipal Infrastructure Planning",
  "GIS & Spatial Data Services",
  "Infrastructure Asset Verification",
  "GRAP Asset Management",
];

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Engineering Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Service key={service} title={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
const projects = [
  {
    title: "City of Ekurhuleni Programme Manager",
    description:
      "Managing Consultants for City of Ekurhuleni Water and Sanitation",
    value: "R1 200 000 000",
  },
  {
    title: "Maphumulo Local Municipality",
    description:
      "Asset Verification, Unbundling, and Impairment Services .",
    value: "Govement Infrastructure Programme",
  },
  {    
    title: "Doorndraai Dam Pipeline",
    description:
      "Feasibility and detailed design and contract supervision of the pipeline.",
    value: "R1,560,578",
  },
  {
    title: "Municipal Infrastructure Asset Verification",
    description:
      "GRAP compliant infrastructure asset verification for municipal infrastructure.",
    value: "Public Infrastructure Programme",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Selected Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLIENTS ---------------- */
const clients = [
  "Magalies Water",
  "Amajuba District Municipality",
  "Johannesburg Water",
  "City of Ekurhuleni",
  "Pholela Business Advisory",
  "Abacwaningi Business Solutions",
];

/* ---------------- PROJECT GALLERY ---------------- */
const galleryImages = [
  { src: "/IMG_8714.JPEG", title: "Completed Infrastructure Facility" },
  { src: "/IMG_8803.JPEG", title: "Building Construction Phase" },
  { src: "/IMG_8885.JPEG", title: "Water Infrastructure Construction" },
];

function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Project Construction Gallery</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((img) => (
            <div key={img.src} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="font-semibold text-sm">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Municipal & Public Clients</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <Client key={client} name={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECT MAP ---------------- */
function ProjectMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">South Africa Infrastructure Footprint</h2>

        <p className="max-w-3xl mx-auto mb-8 text-gray-600">
          Inqubo Holdings supports municipal infrastructure development
          projects across multiple provinces including Gauteng,
          KwaZulu‑Natal, North West and Mpumalanga.
        </p>

        <div className="border rounded-xl p-12 bg-gray-50">
          <p className="text-sm">Interactive project map coming soon</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
/* ---------------- CASE STUDIES ---------------- */
const caseStudies = [
  {
    title: "Municipal Asset Verification Programme",
    description:
      "GRAP compliant verification and data capture of municipal infrastructure assets including roads, stormwater, water and sanitation systems.",
  },
  {
    title: "Water Infrastructure Development",
    description:
      "Planning, design and supervision of bulk water pipelines, reservoirs and treatment infrastructure for municipal clients.",
  },
  {
    title: "Infrastructure Programme Management",
    description:
      "Programme management support to municipalities coordinating multiple consulting teams and infrastructure delivery projects.",
  },
];

function CaseStudies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Engineering Case Studies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
const teamMembers = [
  { name: "Engineering Consultants", role: "Civil & Infrastructure Specialists" },
  { name: "Project Management Team", role: "Infrastructure Programme Delivery" },
  { name: "Asset Verification Specialists", role: "GRAP Infrastructure Compliance" },
];

function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Professional Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="border rounded-xl p-6 shadow-sm">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gray-200" />
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS ---------------- */
const insights = [
  {
    title: "Municipal Infrastructure Asset Management",
    text: "Best practices for GRAP compliant infrastructure asset verification and reporting for municipalities."
  },
  {
    title: "Water Infrastructure Development",
    text: "Planning sustainable water supply infrastructure for growing communities."
  },
  {
    title: "Infrastructure Programme Delivery",
    text: "Coordinating engineering consultants and contractors for large municipal programmes."
  }
];

function Insights() {
  return (
    <section id="insights" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Infrastructure Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOWNLOADS ---------------- */
function Downloads() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Company Capability Statement</h2>
        <p className="text-gray-600 mb-6">
          Download the Inqubo Holdings capability statement used for
          municipal tenders and infrastructure consulting opportunities.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded font-semibold">
          Download Company Profile
        </button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Inqubo Holdings</h2>

        <form className="grid gap-4 text-left">
          <input
            className="border p-3 rounded"
            placeholder="Your Name"
          />

          <input
            className="border p-3 rounded"
            placeholder="Email Address"
          />

          <textarea
            className="border p-3 rounded"
            rows="4"
            placeholder="Project Enquiry"
          />

          <button className="bg-blue-700 text-white p-3 rounded font-semibold">
            Send Enquiry
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-600">
          <p>Email: info@inquboholdings.co.za</p>
          <p>Phone: 081 414 8185</p>
          <p>Midrand, Gauteng, South Africa</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      <p>© {new Date().getFullYear()} Inqubo Holdings (PTY) Ltd</p>
    </footer>
  );
}

/* ---------------- MAIN APP ---------------- */
export default function InquboWebsite() {
  return (
    <div className="min-h-screen text-gray-800">
      <Header />
      <About />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Gallery />
      <Clients />
      <ProjectMap />
      <CaseStudies />
      <Insights />
      <Downloads />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */
function Service({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="font-semibold">{title}</p>
    </div>
  );
}

function Project({ title, description, value }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      <p className="text-blue-700 font-semibold">{value}</p>
    </div>
  );
}

function Client({ name }) {
  return (
    <div className="bg-white border p-5 rounded shadow-sm">
      <p className="font-semibold">{name}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-blue-700">{number}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
