import styles from "./page.module.scss";

export const metadata = {
  title: "Services | Lumora",
  description: "Lumora Services.",
};

export default function Services() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Suspendisse potenti. Quisque viverra lacus sit amet dolor
            convallis suscipit.
          </p>
        </section>

        <section className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Lorem Service One</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>Lorem Service Two</h3>
            <ul>
              <li>Ut enim ad minim veniam</li>
              <li>Quis nostrud exercitation</li>
              <li>Ullamco laboris nisi ut</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>Lorem Service Three</h3>
            <ul>
              <li>Duis aute irure dolor</li>
              <li>In reprehenderit in voluptate</li>
              <li>Velit esse cillum dolore</li>
            </ul>
          </div>
        </section>

        <section className={styles.cta}>
          <h3>Ready to lorem?</h3>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button className={styles.button}>Get Started</button>
        </section>
      </main>
    </div>
  );
}
