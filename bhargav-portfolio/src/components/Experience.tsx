import { experience, achievements } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-container">
        <div className="section-label">Career</div>
        <h2 className="section-title">Experience &amp; <span className="grad-text">Achievements</span></h2>

        <div className={styles.layout}>
          {/* timeline */}
          <div className={styles.timeline}>
            <h3 className={styles.colTitle}>Work History</h3>
            {experience.map((e, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.dot}>
                  <div className={styles.dotInner} />
                </div>
                <div className={styles.content}>
                  <div className={styles.period}>{e.period}</div>
                  <div className={styles.role}>{e.role}</div>
                  <div className={styles.company}>{e.company}</div>
                  <div className={styles.desc}>{e.desc}</div>
                  <div className={styles.tags}>
                    {e.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* achievements */}
          <div className={styles.achCol}>
            <h3 className={styles.colTitle}>Achievements</h3>
            <div className={styles.achList}>
              {achievements.map((a, i) => (
                <div key={i} className={styles.achCard}>
                  <span className={styles.achIcon}>{a.icon}</span>
                  <div>
                    <div className={styles.achTitle}>{a.title}</div>
                    <div className={styles.achDesc}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
