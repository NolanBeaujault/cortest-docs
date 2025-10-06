import React from "react";
import Layout from "@theme/Layout";
import styles from "./contact.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Contact() {
  return (
    <Layout title="Contact" description="Reach out to the creator">
      <main className={styles.contactPage}>
        <div className={styles.banner}>
          <h1>Contact</h1>
          <p>
            I’m happy to connect! Whether it's about the project, collaboration,
            or just to say hello — feel free to reach out.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img
              className={styles.avatar}
              src={useBaseUrl("/img/nolan_profile.jpeg")}
              alt="Nolan Beaujault"
            />
            <h3>Nolan Beaujault</h3>
            <p className={styles.role}>Site Creator & Backend Engineer</p>
            <p>
              Passionate about cloud infrastructure, backend development, and
              creating clean, scalable and automated systems.
            </p>
            <div className={styles.links}>
              <a
                href="mailto:beaujaultnolan@gmail.com"
                className={styles.mailButton}
              >
                📩 Email Me
              </a>{" "}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
