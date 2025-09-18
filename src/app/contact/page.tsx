import styles from "./page.module.scss";

export const metadata = {
  title: "Contact | Lumora",
  description: "Contact Lumora.",
};

export default function Careers() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span>Contact us</span>
      </main>
    </div>
  );
}
