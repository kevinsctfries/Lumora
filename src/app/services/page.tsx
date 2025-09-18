import styles from "./page.module.scss";

export const metadata = {
  title: "Services | Lumora",
  description: "Lumara Services.",
};

export default function Services() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span>Our Services</span>
      </main>
    </div>
  );
}
