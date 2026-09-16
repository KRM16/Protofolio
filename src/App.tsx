import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from 'lucide-react';
import { image } from 'framer-motion/client';

const projects = [
  {
    number: '01',
    title: 'Movie App',
    type: 'API-powered discovery',
    description:
      'A real-time movie browser built around a public API, with browseable listings, detailed film pages, and a focused AI assistant for movie questions.',
    tags: ['React', 'JavaScript', 'n8n', 'Postman'],
    accent: '#729B79',
    image: "/images/movie-project.jpg"
  },
  {
    number: '02',
    title: 'Comforty',
    type: 'E-commerce experience',
    description:
      'A considered furniture storefront with product listing pages and interactive UI components designed to make browsing feel effortless.',
    tags: ['HTML', 'JavaScript', 'Bootstrap'],
    accent: '#475B63',
    image: "/images/comforty-project.jpg"
  },
  {
    number: '03',
    title: 'Gericht',
    type: 'Responsive restaurant site',
    description:
      'A welcoming restaurant website covering menu and information pages with a fully responsive layout across every screen size.',
    tags: ['React', 'Tailwind CSS'],
    accent: '#A96D59',
    image: "/images/gericht-project.jpg"
  },
];

const testimonials = [
  {
    quote: 'Kareem turns complex requirements into interfaces that feel obvious to use. Thoughtful, fast, and a joy to collaborate with.',
    name: 'Sarah M.',
    role: 'Startup Founder',
  },
  {
    quote: 'The attention to responsive detail made a huge difference for our customers. The final experience felt polished from day one.',
    name: 'Omar H.',
    role: 'Product Lead',
  },
  {
    quote: 'A dependable frontend partner who cares about the small moments that make a product feel premium.',
    name: 'Maya R.',
    role: 'Creative Director',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F3E8EE] text-[#2E2C2F]">
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#2E2C2F]/10 bg-[#F3E8EE]/85 px-5 py-3 shadow-sm backdrop-blur-md sm:px-7">
          <a href="#home" className="font-display text-sm font-bold tracking-[-0.03em] sm:text-base">
            KA<span className="text-[#729B79]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#475B63] md:flex">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-[#729B79]">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#2E2C2F] px-4 py-2 text-xs font-bold text-[#F3E8EE] transition-transform hover:-translate-y-0.5 sm:flex">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
          <button onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 md:hidden" aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-[#2E2C2F]/10 bg-[#F3E8EE] p-5 shadow-lg md:hidden">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-[#2E2C2F]/10 py-3 text-sm font-semibold last:border-0">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-12 lg:pt-28">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#729B79]/40 bg-[#729B79]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#475B63]">
              <span className="h-2 w-2 rounded-full bg-[#729B79]" /> Available for select projects
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#729B79]">Hello, I&apos;m Kareem</p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.065em] sm:text-7xl lg:text-[6.6rem]">
              Interfaces with <span className="text-[#729B79]">intent.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#475B63] sm:text-xl">
              React frontend developer building responsive, human-centered digital experiences for startups and ambitious teams.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#729B79] px-6 py-3.5 text-sm font-bold text-[#F3E8EE] shadow-lg shadow-[#729B79]/20 transition-all hover:-translate-y-1 hover:bg-[#5f8768]">
                Explore my work <MoveUpRight size={17} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[#2E2C2F] transition-colors hover:text-[#729B79]">
                More about me <ChevronDown size={16} />
              </a>
            </div>
            <div className="mt-14 flex items-center gap-6 border-t border-[#2E2C2F]/10 pt-5 text-sm text-[#475B63]">
              <span><strong className="font-display text-2xl text-[#2E2C2F]">3+</strong><br />Selected projects</span>
              <span className="h-10 w-px bg-[#2E2C2F]/15" />
              <span><strong className="font-display text-2xl text-[#2E2C2F]">2</strong><br />Training experiences</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute -right-3 -top-8 z-10 rounded-2xl bg-[#2E2C2F] px-4 py-3 text-xs font-bold text-[#F3E8EE] shadow-xl sm:-right-5">
              <Sparkles size={15} className="mb-1 text-[#BACDB0]" />
              Crafting with care
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#BACDB0] shadow-2xl shadow-[#475B63]/15">
              <img 
                src="/images/personal-photo.png" 
                alt="Kareem Abdelsalam" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-6 rounded-[2rem] border border-[#2E2C2F]/15" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#F3E8EE]/90 p-5 backdrop-blur-sm">
                <p className="font-display text-2xl font-bold tracking-[-0.04em]">Kareem Abdelsalam</p>
                <p className="mt-1 text-sm text-[#475B63]">Frontend Developer · React</p>
              </div>
              <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-[#F3E8EE]/70 bg-[#729B79]/50 blur-[1px]" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#2E2C2F]/10 bg-[#F3E8EE] px-4 py-3 text-xs font-semibold shadow-lg">
              <Code2 size={16} className="mb-1 text-[#729B79]" />
              React · JavaScript
            </div>
          </motion.div>
        </section>

      <section id="about" className="border-y border-[#2E2C2F]/10 bg-[#BACDB0]/35">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-24 lg:px-12 lg:py-32">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#729B79] p-5 shadow-xl shadow-[#475B63]/10">
              <img 
                src="/images/AnotherPhoto.png" 
                alt="Kareem Abdelsalam" 
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative z-10 flex h-full items-end rounded-[1.4rem] border border-[#F3E8EE]/40 bg-[#729B79]/10 p-5">
                <span className="rounded-full bg-[#F3E8EE] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#475B63]">
                  Based in Egypt
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-5 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-[#2E2C2F] text-center text-[10px] font-bold uppercase tracking-widest text-[#F3E8EE] shadow-xl">
              Always<br />learning
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#729B79]">A little about me</p>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-tight tracking-[-0.055em] sm:text-5xl">
              I care about how a product <span className="text-[#729B79]">feels.</span>
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-[#475B63]">
              <p>I&apos;m an entry-level frontend developer with a strong foundation in React, JavaScript, and REST API integration. I enjoy building complete web experiences, from a clean first interaction to the details that make a page feel effortless.</p>
              <p>Currently studying Information Systems at Mansoura University, I&apos;m always looking for the next problem to untangle and the next useful thing to learn.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git'].map((skill) => (
                <span key={skill} className="rounded-full border border-[#475B63]/25 px-4 py-2 text-xs font-bold text-[#475B63]">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

       <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#729B79]">Selected work</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.055em] sm:text-6xl">A few things I&apos;ve built.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#475B63]">Thoughtful interfaces, practical systems, and a little bit of curiosity in every project.</p>
        </motion.div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ delay: index * 0.1 }} className="group overflow-hidden rounded-[2rem] border border-[#2E2C2F]/10 bg-[#BACDB0]/40 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#475B63]/10">
              
              <div className="relative aspect-[1.12/1] overflow-hidden p-5" style={{ backgroundColor: project.accent }}>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="relative z-10 flex h-full items-end rounded-[1.35rem] border border-[#F3E8EE]/25 bg-black/10 p-5 transition-transform duration-500 group-hover:scale-105">
                  <span className="font-display text-7xl font-bold text-[#F3E8EE]/80">{project.number}</span>
                </div>
                
                <span className="absolute right-8 top-8 z-10 rounded-full bg-[#F3E8EE]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#2E2C2F]">
                  {project.type}
                </span>
              </div>
              
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{project.title}</h3>
                  <ArrowUpRight size={19} className="shrink-0 text-[#729B79] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="min-h-[100px] text-sm leading-6 text-[#475B63]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold text-[#729B79]">#{tag.replace(' ', '')}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

        <section id="experience" className="bg-[#2E2C2F] text-[#F3E8EE]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#BACDB0]">Experience & education</p><h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.055em] sm:text-5xl">Growing through <span className="text-[#729B79]">practice.</span></h2></div><div className="divide-y divide-[#F3E8EE]/15">{[['Frontend Web Development Trainee', 'Digital Egypt Pioneers Initiative (DEPI)', 'Jul 2026 — Feb 2027'], ['Web Development Trainee', 'Information Technology Institute (ITI)', 'Aug 2026 — Sep 2026'], ['B.Sc. Information Systems', 'Mansoura University', '2023 — 2027']].map(([title, place, date]) => <div key={title} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-8"><div><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-1 text-sm text-[#BACDB0]">{place}</p></div><p className="text-sm text-[#F3E8EE]/55 sm:pt-1">{date}</p></div>)}</div></div></div>
        </section>

        <section id="testimonials" className="bg-[#BACDB0]/35 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14"><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#729B79]">Kind words</p><h2 className="font-display text-4xl font-bold tracking-[-0.055em] sm:text-6xl">Good work is better <span className="text-[#729B79]">together.</span></h2></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <motion.blockquote key={item.name} whileHover={{ y: -5 }} className="rounded-[1.75rem] border border-[#2E2C2F]/10 bg-[#F3E8EE] p-7 shadow-sm"><div className="mb-8 text-3xl text-[#729B79]">“</div><p className="min-h-[120px] text-base leading-7 text-[#475B63]">{item.quote}</p><footer className="mt-7 border-t border-[#2E2C2F]/10 pt-4"><p className="font-display font-bold">{item.name}</p><p className="text-xs text-[#475B63]">{item.role}</p></footer></motion.blockquote>)}</div></div></section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="relative overflow-hidden rounded-[2.5rem] bg-[#729B79] px-7 py-14 text-[#F3E8EE] sm:px-14 sm:py-20"><div className="relative z-10 max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#F3E8EE]/75">Have a project in mind?</p><h2 className="font-display text-5xl font-bold leading-[.95] tracking-[-0.06em] sm:text-7xl">Let&apos;s make something <span className="text-[#2E2C2F]">useful.</span></h2><p className="mt-7 max-w-lg text-base leading-7 text-[#F3E8EE]/85">Whether you&apos;re shaping a new idea or improving an existing product, I&apos;d love to hear what you&apos;re working on.</p><a href="mailto:kareemabdelsalam.dev@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2E2C2F] px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-1">Start a conversation <Mail size={16} /></a></div><div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[30px] border-[#F3E8EE]/10" /><div className="absolute -bottom-28 right-16 h-64 w-64 rounded-full border-[30px] border-[#2E2C2F]/10" /></div></section>
      </main>

      <footer className="border-t border-[#2E2C2F]/10 px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#475B63] sm:flex-row"><p>© 2026 Kareem Abdelsalam Ahmed</p><div className="flex items-center gap-4"><a href="mailto:kamoabdo09@gmail.com" aria-label="Email" className="transition-colors hover:text-[#729B79]"><Mail size={17} /></a><a href="https://linkedin.com/in/kareem-abd0" aria-label="LinkedIn" className="transition-colors hover:text-[#729B79]"><Linkedin size={17} /></a><a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-[#729B79]"><Github size={17} /></a></div></div></footer>
    </div>
  );
}

export default App;
