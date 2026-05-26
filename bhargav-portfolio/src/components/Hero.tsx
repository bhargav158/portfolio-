import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = ['Software Engineer', 'Full Stack Developer', 'AI / ML Engineer', 'LLM App Builder']

const codeLines = [
  { indent: 0, content: '// Who am I?', color: '#6b7280' },
  { indent: 0, content: '', color: '' },
  { indent: 0, content: 'const developer = {', color: '#f0eeff' },
  { indent: 1, content: "name: 'Bhargav M',", color: '#f0eeff', key: 'name', val: "'Bhargav M'" },
  { indent: 1, content: "role: 'Full-Stack & AI Engineer',", color: '#f0eeff', key: 'role', val: "'Full-Stack & AI Engineer'" },
  { indent: 1, content: "gpa: '9.0 / 10',", color: '#f0eeff', key: 'gpa', val: "'9.0 / 10'" },
  { indent: 1, content: "papers: 2,", color: '#f0eeff', key: 'papers', val: '2' },
  { indent: 1, content: "status: 'Open to Work 🚀',", color: '#f0eeff', key: 'status', val: "'Open to Work 🚀'" },
  { indent: 0, content: '};', color: '#f0eeff' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setVisible(true) }, 400)
    }, 2800)
    return () => clearInterval(iv)
  }, [])

  useEffect(() => {
    if (typed < codeLines.length) {
      const t = setTimeout(() => setTyped(n => n + 1), 120)
      return () => clearTimeout(t)
    }
  }, [typed])

  return (
    <section id="hero" className={styles.hero}>
      {/* glow blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for Work
          </div>

          <h1 className={styles.headline}>
            From Complex Ideas<br />
            <span className={styles.grad1}>To Deployed</span><br />
            <span className={styles.grad2}>Platforms</span>
          </h1>

          <p className={styles.sub}>
            <span className={`${styles.role} ${visible ? styles.in : styles.out}`}>
              {roles[roleIdx]}
            </span>
          </p>

          <p className={styles.desc}>
            Building AI-integrated platforms, real-time systems, scalable full-stack apps
            and LLM-powered solutions — focused on shipping to production.
          </p>

          <div className={styles.btns}>
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="https://github.com/bhargav158" target="_blank" rel="noreferrer" className="btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhargav-gowda-61039b2a6/" target="_blank" rel="noreferrer" className="btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — code card */}
        <div className={styles.right}>
          <div className={styles.codeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span style={{background:'#ff5f57'}} />
                <span style={{background:'#febc2e'}} />
                <span style={{background:'#28c840'}} />
              </div>
              <span className={styles.filename}>developer.ts</span>
            </div>
            <div className={styles.codeBody}>
              {codeLines.slice(0, typed).map((line, i) => (
                <div key={i} className={styles.codeLine}
                  style={{ paddingLeft: line.indent ? '1.5rem' : 0 }}>
                  {line.indent === 1 && line.key ? (
                    <span>
                      <span className={styles.cKey}>{line.key}</span>
                      <span className={styles.cPunct}>: </span>
                      <span className={styles.cVal}>{line.val}</span>
                      <span className={styles.cPunct}>,</span>
                    </span>
                  ) : (
                    <span style={{ color: line.color || '#f0eeff' }}>{line.content}</span>
                  )}
                </div>
              ))}
              <span className={styles.cursor} />
            </div>
          </div>

          {/* floating badges */}
          <div className={`${styles.floatBadge} ${styles.badge1}`}>🏆 2nd Best Paper Award</div>
          <div className={`${styles.floatBadge} ${styles.badge2}`}>⚡ Production Systems</div>
          <div className={`${styles.floatBadge} ${styles.badge3}`}>🤖 AI / LLM Builder</div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
