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
          <div className={styles.logo}>
            <div className={styles.line}></div>
            <svg
              viewBox="0 0 800 200"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgText}>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle">
                Lumora
              </text>
            </svg>
            <div className={styles.line}></div>
          </div>
        </section>

        <section className={styles.sectionContent}>
          <h2>Section</h2>
          <div className={styles.contentRow}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              saepe, tempore voluptatibus neque dolores aut quis rem quam
              corrupti nostrum dolore debitis fugiat vero numquam! Dolores culpa
              aut voluptatem impedit!
            </p>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/undraw_mobile-payments_uate.svg"
                alt="Mobile payments illustration"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionContent}>
          <h2>Section</h2>
          <div className={styles.contentRow}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              saepe, tempore voluptatibus neque dolores aut quis rem quam
              corrupti nostrum dolore debitis fugiat vero numquam! Dolores culpa
              aut voluptatem impedit!
            </p>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/undraw_chat-interface_vofq.svg"
                alt="Mobile payments illustration"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionContent}>
          <h2>Section</h2>
          <div className={styles.contentRow}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              saepe, tempore voluptatibus neque dolores aut quis rem quam
              corrupti nostrum dolore debitis fugiat vero numquam! Dolores culpa
              aut voluptatem impedit!
            </p>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/undraw_security-on_3ykb.svg"
                alt="Mobile payments illustration"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
