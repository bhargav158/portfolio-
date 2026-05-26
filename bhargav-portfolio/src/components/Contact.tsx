import { publications } from '../data'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-container">
        {/* Publications */}
        <div className={styles.pubBlock}>
          <div className="section-label">Research</div>
          <h2 className="section-title">Publications</h2>
          <div className={styles.pubList}>
            {publications.map((p, i) => (
              <div key={i} className={styles.pubCard}>
                <span className={`${styles.pubType} ${p.type === 'journal' ? styles.journal : styles.conf}`}>
                  {p.type === 'journal' ? 'Journal' : 'Conference'}
                </span>
                <div>
                  <div className={styles.pubTitle}>{p.title}</div>
                  <div className={styles.pubVenue}>{p.venue}</div>
                  {p.award && <div className={styles.pubAward}>{p.award}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={styles.contactBlock}>
          <div className="section-label">Let's Connect</div>
          <h2 className="section-title">Get In <span className="grad-text">Touch</span></h2>
          <p className={styles.tagline}>
            Actively looking for Software Engineer, Full Stack, Backend and AI roles.
            Open to full-time positions and exciting collaborations.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardInner}>
                <div className={styles.glowOrb} />
                <div className={styles.emailLabel}>Drop me an email</div>
                <a href="mailto:gowdabhargav3@gmail.com" className={styles.email}>
                  gowdabhargav3@gmail.com
                </a>
                <p className={styles.emailSub}>I usually respond within 24 hours.</p>
                <a href="mailto:gowdabhargav3@gmail.com" className="btn-primary" style={{marginTop:'1.5rem', display:'inline-flex'}}>
                  Send Message →
                </a>
              </div>
            </div>

            <div className={styles.linksCol}>
              {[
                { icon: '🐙', label: 'GitHub', val: 'github.com/bhargav158', href: 'https://github.com/bhargav158' },
                { icon: 'in', label: 'LinkedIn', val: 'bhargav-gowda-61039b2a6', href: 'https://www.linkedin.com/in/bhargav-gowda-61039b2a6/' },
                { icon: '📞', label: 'Phone', val: '+91 80738 55488', href: 'tel:+918073855488' },
                { icon: '📍', label: 'Location', val: 'Bangalore, India', href: '#' },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" className={styles.linkCard}>
                  <span className={styles.linkIcon}>{item.icon}</span>
                  <div>
                    <div className={styles.linkLabel}>{item.label}</div>
                    <div className={styles.linkVal}>{item.val}</div>
                  </div>
                  <svg className={styles.linkArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
