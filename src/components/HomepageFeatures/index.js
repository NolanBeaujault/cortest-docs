import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "I am a neurologist or patient",
    image: "img/3.svg",
    buttonText: "Explore the app",
    link: "docs/the-app/intro",
  },
  {
    title: "I am a frontend/backend developer",
    image: "img/4.svg",
    buttonText: "View documentation",
    link: "docs/frontend/overview",
  },
];

function Feature({ image, title, buttonText, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.featureImg} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <a href={link} className={styles.cardButton}>
        {buttonText}
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
