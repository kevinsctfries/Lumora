import styles from "./page.module.scss";

export const metadata = {
  title: "Careers | Lumora",
  description: "Lumora Careers.",
};

export default function Careers() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span>Career Page</span>
      </main>
    </div>
  );
}
