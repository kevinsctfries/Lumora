import styles from "./page.module.scss";

export const metadata = {
  title: "Careers | Lumora",
  description: "Lumora Careers.",
};

export default function Careers() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Join Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae arcu nec justo varius vulputate. Vestibulum euismod lorem a
            erat dignissim posuere.
          </p>
        </section>

        <section className={styles.openings}>
          <h2>Open Positions</h2>
          <div className={styles.jobsGrid}>
            <div className={styles.jobCard}>
              <h3>Lorem Developer</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>Remote</span>
                <span className={styles.tag}>Full-time</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                quis.
              </p>
              <button>Apply</button>
            </div>
            <div className={styles.jobCard}>
              <h3>Ipsum Designer</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>New York, NY</span>
                <span className={styles.tag}>Contract</span>
              </div>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <button>Apply</button>
            </div>
            <div className={styles.jobCard}>
              <h3>Dolor Manager</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>San Francisco, CA</span>
                <span className={styles.tag}>Part-time</span>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <button>Apply</button>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>Why Work With Us</h2>
          <ul>
            <li>Lorem flexible work arrangements</li>
            <li>Ipsum professional development</li>
            <li>Dolor health and wellness programs</li>
            <li>Sit competitive compensation</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
