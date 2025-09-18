import styles from "./page.module.scss";

export const metadata = {
  title: "About | Lumora",
  description: "About Lumora.",
};

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span>About Us</span>
      </main>
    </div>
  );
}
