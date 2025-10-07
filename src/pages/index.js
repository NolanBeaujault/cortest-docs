import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import NewsletterModal from "@site/src/components/NewsletterModal";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={clsx("hero ", styles.heroBanner)}>
        <div className={styles.heroContent}>
          <div className={styles.leftContent}>
            <Heading
              as="h1"
              className={clsx("hero__title", styles.hero__title)}
            >
              {siteConfig.title}
            </Heading>
            <p className={clsx("hero__subtitle", styles.hero__subtitle)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <button
                className={`button button--secondary button--lg ${styles.customButton}`}
                onClick={() => setIsModalOpen(true)}
              >
                Join the waiting list
              </button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <img
              src="img/logo_borderless.svg"
              alt="App logo"
              className={styles.heroImage}
            />
          </div>
        </div>
      </header>
      <NewsletterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome on ${siteConfig.title} website`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className={styles.intro}>
          <p>
            Some seizure occur rarely, hospital stays and video-EEG sessions are
            lengthy, and trained staff are in short supply...CorTest offers a
            simple tool to document seizures and empower patients and
            caregivers.
          </p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
