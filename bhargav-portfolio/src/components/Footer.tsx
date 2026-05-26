import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoBox}>BM</span>
            <span>Bhargav<span className={styles.purple}>M</span></span>
          </div>
          <div className={styles.sub}>Software Engineer · Full Stack · AI/ML</div>
        </div>
        <div className={styles.right}>
          <span className={styles.text}>AMC Engineering College · B.E. AIML · GPA 9.0</span>
          <span className={styles.text}>© 2025 Bhargav M · Bangalore, India</span>
        </div>
      </div>
    </footer>
  )
}
