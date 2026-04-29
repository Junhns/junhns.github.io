import './App.css'

const info = [
  { key: 'jun.location ', value: '"Toronto, ON"' },
  { key: 'jun.education ', value: '"B.Sc. Computer Science — Toronto Metropolitan University, 2026"' },
  { key: 'jun.languages ', value: '["Python", "TypeScript", "Elixir", "Java", "JavaScript", "Rust", "CSS", "Prolog", "Haskell", "Lua"]' },
  { key: 'jun.tech ', value: '["Claude API", "React", "Vite", "Quarkus", "Tailwind", "FastAPI", "Firebase", "SQL", "MongoDB", "BeautifulSoup", "Git", "Github"]' },
  { key: 'jun.interests ', value: '["AI agents", "full-stack", "prompt engineering"]' },
]

const projects = [
  {
    title: 'Job Application Agent',
    source: 'https://github.com/Junhns/job-agent',
    desc: 'Tool-augmented AI agent that autonomously generates tailored job application materials. Uses multi-step prompt engineering workflows — research → synthesis → generation — for consistent, high-quality outputs.',
    tags: ['Python', 'Claude API', 'Tool Use'],
  },
  {
  title: 'SteamCompletionist',
  source: 'https://github.com/Junhns/steamcompletionist',
  desc: 'Always-on-top Steam achievement overlay that fetches your library and shows missing achievements sorted by easiest first. Color coded difficulty, personality reactions for rare achievements, and a built-in game search.',
  tags: ['Python', 'tkinter', 'Steam API', 'requests'],
  },
  {
    title: 'VulnScan — Code Scanner',
    source: 'https://github.com/Junhns/code-scanner',
    desc: 'Multi-page AI security scanner that analyzes code for vulnerabilities, returning structured JSON with severity ratings and fix suggestions. Includes an interactive attack simulation playground for SQL Injection, XSS, and Broken Authentication.',
    tags: ['React', 'TypeScript', 'Claude API', 'React Router'],
  },
  {
    title: 'AI Interview Coach',
    source: 'https://github.com/Junhns/AI-Interviewer',
    desc: 'AI-powered mock interview app that conducts structured 5-question interviews tailored to specific companies. Uses an agentic research loop with Claude\'s tool use API to autonomously search for company-specific interview patterns before each session.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'Claude API'],
  },
]

const experience = [
  {
    title: 'Software Developer — Sheepgate Church',
    meta: 'April 2025 - Present',
    desc: 'Collaborating as a full stack developer to design and build a REST API inspired by Planning Center. Working with teammates using GitHub — feature branches, pull requests, and code reviews. Built and integrated REST API endpoints using Quarkus and MongoDB.',
  },
]

export default function App() {
  return (
    <>
      <nav>
        <span className="logo">jun.han</span>
        <div className="nav-links">
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <div className="container">

        <div className="hero">
          <h1>// hello</h1>
          <p>
            I'm <span>Jun</span> — a CS grad building{' '}
            <span>full-stack</span> and <span>AI-powered</span> apps. Based in Toronto.
          </p>
        </div>

        <div className="info">
          {info.map(row => (
            <div className="info-row" key={row.key}>
              <span className="info-key">{row.key}</span>
              <span className="info-value">{row.value}</span>
            </div>
          ))}
        </div>

        <section id="projects">
          <div className="section-label">projects</div>
          <div className="projects">
            {projects.map(p => (
              <div className="project" key={p.title}>
                <div className="project-header">
                  <span className="project-title">{p.title}</span>
                  <div className="project-links">
                    <a href={p.source} target="_blank" rel="noreferrer">source</a>
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="section-label">experience</div>
          <div className="exp-list">
            {experience.map(e => (
              <div className="exp" key={e.title}>
                <div className="exp-title">{e.title}</div>
                <div className="exp-meta">{e.meta}</div>
                <p className="exp-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="section-label">contact</div>
          <div className="info">
            <div className="info-row">
              <span className="info-key">email </span>
              <span className="info-value">
                <a href="mailto:junhn1105@gmail.com">junhn1105@gmail.com</a>
              </span>
            </div>
            <div className="info-row">
              <span className="info-key">github </span>
              <span className="info-value">
                <a href="https://github.com/Junhns" target="_blank" rel="noreferrer">github.com/Junhns</a>
              </span>
            </div>
            <div className="info-row">
              <span className="info-key">LinkedIn </span>
              <span className="info-value">
                <a href="https://www.linkedin.com/in/junhns/">junhs</a>
              </span>
            </div>
          </div>
        </section>

        <footer>built by jun han · 2026</footer>

      </div>
    </>
  )
}
