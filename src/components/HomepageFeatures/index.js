import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fast access",
    image: "img/4.svg", // Mets ici le nom exact de ton image
  },
  {
    title: "A complete library of tests",
    image: "img/2.svg",
  },
  {
    title: "Continuous monitoring",
    image: "img/3.svg",
  },
];

function Feature({ image, title }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.featureImg} />
      <h3 className={styles.cardTitle}>{title}</h3>
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
