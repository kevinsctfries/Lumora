import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Lumora</h1>
        <p>Experience cutting-edge web solutions.</p>
      </main>
    </div>
  );
}
