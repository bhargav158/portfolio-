import { experience, achievements } from '../data'
import styles from './Experience.module.css'

const companyColors: Record<string, string> = {
  'Besant Technologies': '#22d3ee',
  'Vayu Aarambh Innovations': '#9b6dff',
  'CodSoft': '#f059a0',
  'Edunet Foundation': '#34d399',
}

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
                <div className={styles.dotCol}>
                  <div
                    className={styles.dotInner}
                    style={{ background: companyColors[e.company] || 'var(--purple)', boxShadow: `0 0 12px ${companyColors[e.company] || 'var(--purple)'}60` }}
                  />
                  {i < experience.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.content}>
                  {e.period.includes('Present') && (
                    <span className={styles.activeBadge}>● Active</span>
                  )}
                  {e.period.includes('May 2026') && (
                    <span className={styles.completedBadge}>✓ Completed</span>
                  )}
                  <div className={styles.period}>{e.period}</div>
                  <div className={styles.role}>{e.role}</div>
                  <div
                    className={styles.company}
                    style={{ color: companyColors[e.company] || 'var(--purple)' }}
                  >
                    {e.company}
                  </div>
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
