import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import emailjs from "@emailjs/browser";
import {
  Github, Linkedin, Mail, Phone, MapPin, Download, ArrowRight, ArrowUp,
  Code2, Server, Database, Wrench, Briefcase, FolderGit2,
  Target, Send, ExternalLink, Calendar, Award, Sparkles,
  Loader2, CheckCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gopa Suseela — Aspiring Java Full Stack Developer" },
      { name: "description", content: "Portfolio of Gopa Suseela — Java, Spring Boot, Spring Security, REST APIs and MySQL. Building secure, scalable applications." },
      { property: "og:title", content: "Gopa Suseela — Java Full Stack Developer" },
      { property: "og:description", content: "Aspiring Java Full Stack Developer specializing in Spring Boot, REST APIs, and MySQL." },
    ],
    // links: [{ rel: "canonical", href: "/" }],
    links: [{ rel: "canonical", href: import.meta.env.BASE_URL }],
  }),
  component: Portfolio,
});

const RESUME = "https://drive.google.com/file/d/1aeVm33SmkeXP_sy_cbc9R1aPe5Yh3wdI/view?usp=drive_link";
const LINKEDIN = "https://www.linkedin.com/in/g-suseela-4b4a75260/";
const GITHUB = "https://github.com/suseelagopa543-lang";
const EMAIL = "suseelagopa543@gmail.com";

const navLinks = [
  ["Home", "home"], ["About", "about"], ["Education", "education"],
  ["Skills", "skills"], ["Experience", "experience"], ["Projects", "projects"],
  ["Goals", "goals"], ["Contact", "contact"],
] as const;

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-lg">
            <span className="text-gradient">Gopa</span><span className="text-foreground">.dev</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{label}</a>
            ))}
          </nav>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-primary text-white px-4 py-2 text-sm font-semibold shadow-glow hover:opacity-90 transition">
            <Download className="w-4 h-4" /> Resume
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-foreground" />
              <span className="block w-6 h-0.5 bg-foreground" />
              <span className="block w-4 h-0.5 bg-foreground ml-auto" />
            </div>
          </button>
        </div>
        {open && (
          <div className="lg:hidden glass border-t border-border">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-muted-foreground hover:text-primary">{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
      <BackToTop visible={scrolled} />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative bg-hero text-white overflow-hidden pt-24 pb-20 lg:py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--cyan)] blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 glass-dark px-3 py-1.5 rounded-full text-xs font-medium text-white/90">
            <Sparkles className="w-3.5 h-3.5 text-[var(--cyan)]" /> Available for opportunities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Hi, I'm <span className="bg-gradient-to-r from-white via-white to-[var(--cyan)] bg-clip-text text-transparent">Gopa Suseela</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/80 font-display">Aspiring Java Full Stack Developer</p>
          <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
            Building secure, scalable, and user-focused applications with Java and modern web technologies. Strong foundation in Spring Boot, REST APIs, and MySQL.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 bg-white text-[var(--navy)] px-5 py-3 rounded-full font-semibold hover:bg-[var(--cyan)] hover:text-white transition shadow-glow">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass-dark text-white px-5 py-3 rounded-full font-semibold hover:bg-white/15 transition">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 rounded-full font-semibold hover:bg-white/10 transition">Contact Me</a>
          </div>
          <div className="flex items-center gap-3 pt-3">
            <SocialIcon href={LINKEDIN} label="LinkedIn"><Linkedin className="w-5 h-5" /></SocialIcon>
            <SocialIcon href={GITHUB} label="GitHub"><Github className="w-5 h-5" /></SocialIcon>
            <SocialIcon href={`mailto:${EMAIL}`} label="Email"><Mail className="w-5 h-5" /></SocialIcon>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end animate-float">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-full blur-2xl opacity-50" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-[var(--cyan)] via-primary to-white/20">
              <img src={profileImg} alt="Gopa Suseela" width={384} height={384} className="w-full h-full object-cover rounded-full border-4 border-[var(--navy)]" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-dark rounded-2xl px-4 py-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[var(--cyan)]" />
              <div className="text-xs"><div className="font-bold">Java</div><div className="text-white/70">Spring Boot</div></div>
            </div>
            <div className="absolute -top-2 -left-6 glass-dark rounded-2xl px-4 py-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-[var(--cyan)]" />
              <div className="text-xs"><div className="font-bold">MySQL</div><div className="text-white/70">REST APIs</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} aria-label={label}
       className="w-11 h-11 rounded-full glass-dark flex items-center justify-center hover:bg-[var(--cyan)] hover:text-[var(--navy)] transition">
      {children}
    </a>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest">
        <span className="h-px w-8 bg-primary" />{kicker}<span className="h-px w-8 bg-primary" />
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  const stats = [
    { v: "9.36", l: "CGPA / 10" },
    { v: "4+", l: "Projects" },
    { v: "1", l: "Internship" },
    { v: "10+", l: "Technologies" },
  ];
  return (
    <section id="about" className="py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="Who I am" title="About Me" />
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>I'm an aspiring <span className="text-foreground font-semibold">Java Full Stack Developer</span> with a strong foundation in Java, Spring Boot, Spring Security, REST APIs, and MySQL. I love crafting efficient, user-focused applications and solving real-world problems through code.</p>
            <p>My focus is on building <span className="text-foreground font-semibold">scalable enterprise applications</span> — combining clean backend architecture, secure authentication, and reliable database design. I'm constantly learning new tools and patterns in modern software development.</p>
            <p>Passionate about clean code, problem-solving, and growing into a developer who ships meaningful, secure, and performant software.</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Problem Solver", "Backend Focused", "Continuous Learner", "Team Player"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{t}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.l} className="rounded-2xl bg-card shadow-card p-6 border border-border hover:-translate-y-1 hover:shadow-glow transition">
                <div className="text-3xl md:text-4xl font-bold text-gradient font-display">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const edu = [
    { degree: "B.Tech in Electrical and Electronics Engineering", inst: "Sri Vasavi Engineering College", year: "2025", score: "CGPA: 9.36 / 10" },
    { degree: "Diploma in Electrical and Electronics Engineering", inst: "Sri Mullapudi Venkataraya Memorial Polytechnic", year: "2022", score: "92.06%" },
    { degree: "SSC", inst: "St. Paul's EM High School", year: "2019", score: "9.8 / 10" },
  ];
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader kicker="My journey" title="Education" />
        <div className="space-y-6">
          {edu.map((e, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-white flex items-center justify-center shadow-glow">
                  <Calendar className="w-5 h-5" />
                </div>
                {i < edu.length - 1 && <div className="w-px flex-1 bg-border mt-2 min-h-12" />}
              </div>
              <div className="flex-1 rounded-2xl bg-card shadow-card border border-border p-6 hover:shadow-glow hover:-translate-y-1 transition">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-lg">{e.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{e.inst}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">{e.year}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan)]">
                  <Award className="w-4 h-4" /> {e.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const cats = [
    {
      icon: Code2,
      title: "Programming",
      color: "oklch(0.546 0.224 263)",
      items: ["Java", "OOPs Concepts", "Collections Framework", "Stream API", "Multithreading", "JDBC"],
    },
    {
      icon: Server,
      title: "Backend",
      color: "oklch(0.58 0.15 180)",
      items: ["Spring Framework", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "REST APIs", "Hibernate"],
    },
    {
      icon: Code2,
      title: "Frontend",
      color: "oklch(0.65 0.17 50)",
      items: ["HTML", "CSS"],
    },
    {
      icon: Database,
      title: "Database",
      color: "oklch(0.55 0.2 300)",
      items: ["MySQL"],
    },
    {
      icon: Wrench,
      title: "Tools & IDEs",
      color: "oklch(0.6 0.14 260)",
      items: ["IntelliJ IDEA", "Eclipse", "VS Code", "MySQL Workbench"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="Tech I work with"
          title="Skills & Expertise"
          desc="Hands-on experience across the Java Full Stack development lifecycle — from core programming to production tools."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map(({ icon: Icon, title, color, items }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border shadow-card p-6 hover:shadow-glow hover:-translate-y-1 transition duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base leading-tight">
                    {title}
                  </h3>
                  <span className="text-[11px] text-muted-foreground font-medium">
                    {items.length} skill{items.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold border transition"
                    style={{
                      borderColor: color,
                      color: color,
                      backgroundColor: `${color}14`,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const exp = [
    { role: "Java Full Stack Development Training", org: "CV Corporate Services Pvt. Ltd., Hyderabad", time: "Currently Pursuing",
      desc: "Learning Core Java, Spring Framework, Spring Boot, Database Concepts, REST APIs, and modern Full Stack Development practices." },
    { role: "Java Full Stack Developer — Virtual Internship", org: "EduSkills (AICTE)", time: "July 2024 – September 2024",
      desc: "Completed a 10-week virtual internship focused on Java Full Stack Development, gaining practical knowledge in Core Java, SQL, application development, and software engineering principles." },
  ];
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader kicker="What I've done" title="Experience" />
        <div className="space-y-6">
          {exp.map((e, i) => (
            <div key={i} className="rounded-2xl bg-card shadow-card border border-border p-6 md:p-8 hover:shadow-glow hover:-translate-y-1 transition">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{e.role}</h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">{e.org}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">{e.time}</span>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { title: "Venue Booking System", time: "March 2026 – May 2026",
      tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST APIs"],
      desc: "Backend system for venue bookings with user registration, authentication, and role-based authorization. Implemented Spring Security and RESTful APIs with MySQL.",
      features: ["User Authentication", "Role-Based Access Control", "REST API Architecture", "Secure DB Integration"] },
    { title: "Console-Based ATM Interface", time: "August 2025",
      tech: ["Core Java", "OOPs"],
      desc: "Command-line banking application supporting balance inquiry, deposits, withdrawals, and mini statements with robust exception handling.",
      features: ["Account Management", "Transaction Processing", "Exception Handling", "OOP Architecture"] },
    { title: "Unified Web Suite", time: "January 2025 – April 2025",
      tech: ["HTML", "CSS"],
      desc: "User-friendly web application focused on clean design and usability with responsive layouts and attractive interfaces.",
      features: ["Responsive Design", "Modern UI Layout", "User-Friendly Navigation"] },
    { title: "Smart Irrigation Monitoring & Control", time: "June 2024 – August 2024",
      tech: ["IoT Sensors", "Arduino"],
      desc: "Automated irrigation system based on soil moisture monitoring. Uses real-time sensor data to regulate water supply and improve efficiency.",
      features: ["Soil Moisture Monitoring", "Automated Control", "Real-Time Data", "Water Conservation"] },
  ];
  return (
    <section id="projects" className="py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="Things I've built" title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.title} className="group relative rounded-2xl bg-card border border-border shadow-card overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all">
              <div className="h-32 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
                <FolderGit2 className="absolute right-6 top-6 w-16 h-16 text-white/40 group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-xs font-medium opacity-90">{p.time}</div>
                  <h3 className="font-display font-bold text-xl">{p.title}</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                <div>
                  <div className="text-xs font-semibold text-foreground mb-2">Key Features</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)]" />{f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                  {p.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View more on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Goals() {
  return (
    <section id="goals" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader kicker="Where I'm headed" title="Career Objective" />
        <div className="relative rounded-3xl bg-hero text-white p-10 md:p-14 shadow-glow overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--cyan)] opacity-20 blur-3xl" />
          <Target className="w-12 h-12 text-[var(--cyan)] mb-6" />
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Seeking opportunities as a <span className="font-bold text-white">Java Backend Developer</span> or <span className="font-bold text-white">Full Stack Developer</span> where I can apply my knowledge of Java, Spring Boot, Spring Security, REST APIs, and MySQL to build scalable software solutions while continuously learning and contributing to organizational success.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(
        "service_p7xr8ft",
        "template_ql6s5rc",
        formRef.current,
        { publicKey: "7jRD8K-QswEHgU9r8" }
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };
  const items = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: "Phone", value: "+91 6305720199", href: "tel:+916305720199" },
    { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
    { icon: Linkedin, label: "LinkedIn", value: "g-suseela", href: LINKEDIN },
    { icon: Github, label: "GitHub", value: "suseelagopa543-lang", href: GITHUB },
  ];
  return (
    <section id="contact" className="py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="Let's connect" title="Get In Touch" desc="Have an opportunity or just want to say hi? Drop me a message." />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {items.map(({ icon: Icon, label, value, href }) => {
              const Inner = (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-0.5 transition">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground font-medium">{label}</div>
                    <div className="font-semibold truncate">{value}</div>
                  </div>
                </div>
              );
              return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">{Inner}</a> : <div key={label}>{Inner}</div>;
            })}
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-card border border-border shadow-card p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your full name" required />
              <Field name="email" type="email" label="Email" placeholder="you@example.com" required />
            </div>
            <Field name="subject" label="Subject" placeholder="What's it about?" required />
            <div>
              <label className="text-sm font-semibold mb-1.5 block">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell me a bit more..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button type="submit" disabled={status === "loading"}
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold shadow-glow hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed">
              {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-500 font-medium flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive font-medium">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-1.5 block">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/80 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg"><span className="text-gradient">Gopa Suseela</span></div>
        <p className="text-sm">© {new Date().getFullYear()} Gopa Suseela. All rights reserved.</p>
        <div className="flex gap-2">
          <SocialIcon href={LINKEDIN} label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialIcon>
          <SocialIcon href={GITHUB} label="GitHub"><Github className="w-4 h-4" /></SocialIcon>
          <SocialIcon href={`mailto:${EMAIL}`} label="Email"><Mail className="w-4 h-4" /></SocialIcon>
        </div>
      </div>
    </footer>
  );
}

function BackToTop({ visible }: { visible: boolean }) {
  return (
    <a href="#home" aria-label="Back to top"
       className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-glow transition-all z-40 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <ArrowUp className="w-5 h-5" />
    </a>
  );
}
