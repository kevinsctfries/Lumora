import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
  title: "Home | Lumora",
  description: "Welcome to Lumora, your partner in digital excellence.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.sectionHero}>
          <h1>Lumora</h1>
          {/* Design logo section here */}
        </section>
        <section className={styles.sectionContent}>
          <h2>Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            saepe, tempore voluptatibus neque dolores aut quis rem quam corrupti
            nostrum dolore debitis fugiat vero numquam! Dolores culpa aut
            voluptatem impedit!
          </p>
        </section>
        <section className={styles.sectionContent}>
          <h2>Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            saepe, tempore voluptatibus neque dolores aut quis rem quam corrupti
            nostrum dolore debitis fugiat vero numquam! Dolores culpa aut
            voluptatem impedit!
          </p>
        </section>
        <section className={styles.sectionContent}>
          <h2>Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            saepe, tempore voluptatibus neque dolores aut quis rem quam corrupti
            nostrum dolore debitis fugiat vero numquam! Dolores culpa aut
            voluptatem impedit!
          </p>
        </section>
      </main>
    </div>
  );
}
