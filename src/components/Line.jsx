import styles from './Line.module.css'
export function Line() {
  return (
    <div className={styles.box}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.ball}></div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.ball}></div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.ball}></div>
      </div>
    </div>
  )
}
