import './App.css'

const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Drupal'] },
  { title: 'Backend & Databases', items: ['Node.js', 'Express.js', 'MongoDB', 'C#', 'PHP', 'Python', 'Java', 'Azure SQL'] },
  { title: 'Tools & Concepts', items: ['Git', 'Unix', 'Linux', 'OAuth', 'REST APIs', 'Agile', 'Unit Testing', 'SEO'] },
]

const experience = [
  {
    title: 'Software Developer · Environment Canada',
    date: 'May 2024 – March 2026',
    tags: ['C#', 'Drupal', 'PHP', 'OAuth', 'REST', 'Agile'],
    bullets: [
      'Developed and maintained full-stack web applications using C#, Drupal, and PHP, supporting internal tools and public-facing government platforms.',
      'Implemented secure authentication systems, including 2FA, OAuth flows, and token-based authorization.',
      'Designed and integrated RESTful APIs, improving system interoperability and scalability.',
      'Collaborated in an Agile environment, participating in sprint planning, code reviews, and iterative releases.',
      'Authored technical documentation for APIs, authentication workflows, and system architecture.',
      'Troubleshot and optimized performance issues, enhancing application reliability and user experience.',
    ],
  },
  {
    title: 'E-Commerce Advisor · OCC',
    date: 'Sept 2023 – Dec 2023',
    tags: ['UX', 'SEO', 'Responsive', 'Client work'],
    bullets: [
      'Designed and developed responsive e-commerce websites for SMEs through the Canadian Digital Adoption Program (CDAP).',
      'Applied SEO best practices and digital marketing strategies to increase search visibility.',
      'Improved UI/UX using modern design principles, resulting in more intuitive user journeys.',
      'Collaborated with clients to gather requirements and deliver customized digital solutions.',
    ],
  },
]

const projects = [
  {
    title: 'Personal Website',
    date: 'Apr 2023 – Present',
    tags: ['HTML', 'CSS', 'Responsive Design', 'SEO', 'Inclusive Design'],
    bullets: [
      'Built and deployed a responsive portfolio website showcasing photography work with a focus on accessibility and performance.',
      'Implemented clean UI/UX design principles, including minimalist layouts, typography hierarchy, and whitespace optimization.',
      'Optimized site performance and discoverability through SEO techniques and semantic HTML structure.',
      'Continuously iterated on design and features based on user feedback and analytics.',
    ],
  },
]

function EntryCard({ title, date, tags, bullets }: {
  title: string
  date: string
  tags: string[]
  bullets: string[]
}) {
  return (
    <div className="card">
      <div className="entry-header">
        <div>
          <h3>{title}</h3>
          <span className="entry-date">{date}</span>
        </div>
        <div className="tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <ul className="entry-bullets">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Sang J.</h1>
          <p>Software Developer | Computer Science | Toronto, ON</p>
          <div className="hero-links">
            <a href="https://github.com/" target="_blank">GH</a>
            <a href="https://linkedin.com/" target="_blank">LI</a>
            <a href="mailto:you@email.com">@</a>
          </div>
        </div>
        <button
          className="scroll-btn"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          ↓
        </button>
      </section>

      <div className="page">
        <section id="about">
          <h2 className="section-title">About</h2>
          <div className="card">
            <h3>Hi — I'm Sang</h3>
            <p>Software developer focused on building reliable, accessible web experiences. Outside of software, I love photography — this site doubles as a simple gallery of my work.</p>
            <div className="about-links">
              <a href="https://github.com/" target="_blank">GitHub</a>
              <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
              <a href="mailto:you@email.com">Email</a>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map(group => (
              <div className="card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">Professional Experience</h2>
          <div className="entries">
            {experience.map(e => <EntryCard key={e.title} {...e} />)}
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="entries">
            {projects.map(p => <EntryCard key={p.title} {...p} />)}
          </div>
        </section>

        <section id="education">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <h3>Toronto Metropolitan University</h3>
            <span className="entry-date">BSc (Hons), Computer Science · Sept 2021 – Apr 2026</span>
          </div>
        </section>

        <section id="extracurriculars">
          <h2 className="section-title">Extracurriculars</h2>
          <div className="card">
            <h3>TMU Computer Science Course Union — VP Student Life</h3>
            <span className="entry-date">June 2022 – May 2025</span>
            <ul className="entry-bullets" style={{ marginTop: '0.75rem' }}>
              <li>Organized and executed academic and social events for a community of 2,000+ students.</li>
              <li>Led cross-functional teams to improve student engagement and campus experience.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}