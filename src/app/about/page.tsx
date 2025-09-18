import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
  title: "About Us | Lumora",
  description: "Learn more about Lumora.",
};

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            felis at sapien vulputate fringilla. Nulla facilisi. Phasellus ut
            lorem vitae eros pulvinar imperdiet.
          </p>
        </section>

        <section className={styles.values}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Lorem Integrity</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis tortor sit amet ipsum luctus gravida.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Lorem Innovation</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Lorem Collaboration</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <h2>Meet the Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <Image
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Team member avatar"
                width={120}
                height={120}
                className={styles.avatar}
              />
              <h3>Lorem Person</h3>
              <p>Lorem Position</p>
            </div>
            <div className={styles.teamMember}>
              <Image
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Team member avatar"
                width={120}
                height={120}
                className={styles.avatar}
              />
              <h3>Ipsum Person</h3>
              <p>Ipsum Position</p>
            </div>
            <div className={styles.teamMember}>
              <Image
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Team member avatar"
                width={120}
                height={120}
                className={styles.avatar}
              />
              <h3>Dolor Person</h3>
              <p>Dolor Position</p>
            </div>
            <div className={styles.teamMember}>
              <Image
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Team member avatar"
                width={120}
                height={120}
                className={styles.avatar}
              />
              <h3>Sit Person</h3>
              <p>Sit Position</p>
            </div>
            <div className={styles.teamMember}>
              <Image
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Team member avatar"
                width={120}
                height={120}
                className={styles.avatar}
              />
              <h3>Amet Person</h3>
              <p>Amet Position</p>
            </div>
            <div className={styles.teamMember}>
              <Image
                src="/undraw_friendly-guy-avatar_dqp5.svg"
                alt="Team member avatar"
                width={120}
                height={120}
                className={styles.avatar}
              />
              <h3>Consectetur Person</h3>
              <p>Consectetur Position</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
