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
          <div className={styles.contentRow}>
            <div>
              <h2>Section</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, mollitia. Ea aspernatur dolorem ipsum aliquam.
                Inventore dignissimos fugiat laborum blanditiis sed libero, quae
                a vel necessitatibus, omnis perferendis voluptate voluptas.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                velit rem aliquid reprehenderit, nam quod eaque neque mollitia
                consequuntur. Ea, pariatur voluptas? Natus omnis, ipsam pariatur
                voluptatem cupiditate quam ex.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/undraw_mobile-payments_uate.svg"
                alt="Mobile payments illustration"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1200px) 100vw, 400px"
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionContent}>
          <div className={styles.contentRow}>
            <div>
              <h2>Section</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, mollitia. Ea aspernatur dolorem ipsum aliquam.
                Inventore dignissimos fugiat laborum blanditiis sed libero, quae
                a vel necessitatibus, omnis perferendis voluptate voluptas.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                velit rem aliquid reprehenderit, nam quod eaque neque mollitia
                consequuntur. Ea, pariatur voluptas? Natus omnis, ipsam pariatur
                voluptatem cupiditate quam ex.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/undraw_chat-interface_vofq.svg"
                alt="Chat illustration"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1200px) 100vw, 400px"
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionContent}>
          <div className={styles.contentRow}>
            <div>
              <h2>Section</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, mollitia. Ea aspernatur dolorem ipsum aliquam.
                Inventore dignissimos fugiat laborum blanditiis sed libero, quae
                a vel necessitatibus, omnis perferendis voluptate voluptas.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                velit rem aliquid reprehenderit, nam quod eaque neque mollitia
                consequuntur. Ea, pariatur voluptas? Natus omnis, ipsam pariatur
                voluptatem cupiditate quam ex.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/undraw_security-on_3ykb.svg"
                alt="Security illustration"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1200px) 100vw, 400px"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
