import { projects } from '../data'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-container">
        <div className="section-label">What I've Built</div>
        <h2 className="section-title">Selected <span className="grad-text">Projects</span></h2>
        <p className={styles.sub}>Production-ready AI systems and full-stack applications.</p>

        <div className={styles.grid}>
          {projects.map((p) => (
            <a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`${styles.card} ${p.highlight ? styles.featured : ''}`}
            >
              {p.highlight && <div className={styles.featuredBadge}>⭐ Featured</div>}
              <div className={styles.top}>
                <span className={styles.num}>{p.num}</span>
                <svg className={styles.arrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              {p.award && <div className={styles.award}>{p.award}</div>}
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
