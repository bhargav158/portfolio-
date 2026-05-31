import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = ['Software Engineer', 'Full Stack Developer', 'AI / ML Engineer', 'LLM App Builder']

const codeLines = [
  { type: 'comment', content: '// Who am I?' },
  { type: 'blank' },
  { type: 'keyword', content: 'const ', rest: 'developer = {' },
  { type: 'prop', key: 'name', val: "'Bhargav M'" },
  { type: 'prop', key: 'role', val: "'Full-Stack & AI Engineer'" },
  { type: 'prop', key: 'gpa', val: "'9.0 / 10'" },
  { type: 'prop', key: 'papers', val: '2' },
  { type: 'prop', key: 'status', val: "'Open to Work 🚀'" },
  { type: 'close', content: '};' },
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
      const t = setTimeout(() => setTyped(n => n + 1), 130)
      return () => clearTimeout(t)
    }
  }, [typed])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.grid1} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for Work
          </div>

          <h1 className={styles.headline}>
            From Complex<br/>
            <span className={styles.gradBlue}>Ideas To</span><br/>
            <span className={styles.gradCyan}>Deployed Platforms</span>
          </h1>

          <div className={styles.sub}>
            <span className={`${styles.role} ${visible ? styles.in : styles.out}`}>
              {roles[roleIdx]}
            </span>
          </div>

          <p className={styles.desc}>
            Building AI-integrated platforms, real-time systems, scalable
            full-stack apps and LLM-powered solutions — focused on shipping to production.
          </p>

          <div className={styles.btns}>
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="https://github.com/bhargav158" target="_blank" rel="noreferrer" className="btn-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhargav-gowda-61039b2a6/" target="_blank" rel="noreferrer" className="btn-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>

          <div className={styles.statsRow}>
            {[
              { num: '9+', label: 'Projects' },
              { num: '9.0', label: 'GPA' },
              { num: '2', label: 'Papers' },
              { num: '4+', label: 'Internships' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.codeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span style={{background:'#ff5f57'}}/>
                <span style={{background:'#febc2e'}}/>
                <span style={{background:'#28c840'}}/>
              </div>
              <span className={styles.filename}>developer.ts</span>
              <span className={styles.lang}>TypeScript</span>
            </div>
            <div className={styles.codeBody}>
              {codeLines.slice(0, typed).map((line, i) => (
                <div key={i} className={styles.codeLine}>
                  <span className={styles.lineNum}>{i + 1}</span>
                  {line.type === 'comment' && <span className={styles.cComment}>{line.content}</span>}
                  {line.type === 'blank' && <span>&nbsp;</span>}
                  {line.type === 'keyword' && <span><span className={styles.cKeyword}>{line.content}</span><span className={styles.cDefault}>{line.rest}</span></span>}
                  {line.type === 'prop' && (
                    <span style={{paddingLeft:'1.2rem'}}>
                      <span className={styles.cKey}>{line.key}</span>
                      <span className={styles.cPunct}>: </span>
                      <span className={styles.cVal}>{line.val}</span>
                      <span className={styles.cPunct}>,</span>
                    </span>
                  )}
                  {line.type === 'close' && <span className={styles.cDefault}>{line.content}</span>}
                </div>
              ))}
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>{typed + 1}</span>
                <span className={styles.cursor}/>
              </div>
            </div>
          </div>

          <div className={`${styles.floatBadge} ${styles.b1}`}>🏆 2nd Best Paper Award</div>
          <div className={`${styles.floatBadge} ${styles.b2}`}>⚡ Production Systems</div>
          <div className={`${styles.floatBadge} ${styles.b3}`}>🤖 AI / LLM Builder</div>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine}/>
        <span>scroll</span>
      </div>
    </section>
  )
}
