import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <Heading as="h1" className={clsx("hero__title", styles.hero__title)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx("hero__subtitle", styles.hero__subtitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--secondary button--lg ${styles.customButton}`}
              to="/docs/intro"
            >
              Dive into the application's features
            </Link>
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
            Long hospital stays, rare specialist staff...Cortest offers a
            simple, accessible alternative for testing epileptic seizures.
          </p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
