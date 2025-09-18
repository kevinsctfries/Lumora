import styles from "./page.module.scss";

export const metadata = {
  title: "Contact | Lumora",
  description: "Contact Lumora.",
};

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae arcu nec justo varius vulputate. Vestibulum euismod lorem a
            erat dignissim posuere.
          </p>
        </section>

        <section className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoCard}>
            <p>
              <strong>Email:</strong> lorem.ipsum@lumora.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Lorem Ipsum Street, Dolor City, IP
              12345
            </p>
          </div>
        </section>

        <section className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}
