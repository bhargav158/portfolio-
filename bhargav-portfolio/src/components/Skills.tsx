import { skills } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-container">
        <div className="section-label">Technical Stack</div>
        <h2 className="section-title">Skills &amp; <span className="grad-text">Tools</span></h2>
        <p className={styles.sub}>Technologies I work with to build production-ready products.</p>

        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.category} className={styles.card}>
              <div className={styles.catLabel}>{s.category}</div>
              <div className={styles.pills}>
                {s.items.map((item) => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
