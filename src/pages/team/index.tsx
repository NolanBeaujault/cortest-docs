import React from "react";
import Layout from "@theme/Layout";
import styles from "./team.module.css";
import { Linkedin } from "lucide-react";

export default function Team() {
  return (
    <Layout title="Our Team" description="Meet the team behind the project">
      <main className={styles.teamPage}>
        <div className={styles.banner}>
          <h1>The Team</h1>
          <p>
            Driven by a shared passion for application development and a
            commitment to enhancing the hospital environment, the four of us
            have fully dedicated ourselves to this project.
          </p>
        </div>
        <div className={styles.members}>
          {[
            {
              name: "Maïwen Mile",
              img: "img/maiwen_profile.jpeg",
              linkedin: "https://www.linkedin.com/in/maiwen-mille/",
              role: "Project Manager",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis suscipit velit, non molestie metus blandit ut. Duis finibus facilisis fringilla. ",
            },
            {
              name: "Nolan Beaujault",
              img: "img/nolan_profile.jpeg",
              linkedin: "https://www.linkedin.com/in/nolan-beaujault/",
              role: "Backend Manager",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis suscipit velit, non molestie metus blandit ut. Duis finibus facilisis fringilla. ",
            },
            {
              name: "Apolline Baudry",
              img: "img/apo_profile.jpeg",
              linkedin:
                "https://www.linkedin.com/in/apolline-baudry-1037ab288/",
              role: "UI/UX Designer",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis suscipit velit, non molestie metus blandit ut. Duis finibus facilisis fringilla. ",
            },
            {
              name: "Berkay Oztas",
              img: "img/berkay_profile.jpeg",
              linkedin: "https://www.linkedin.com/in/berkay-oztas-39b749324/",
              role: "Frontend Manager",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis suscipit velit, non molestie metus blandit ut. Duis finibus facilisis fringilla. ",
            },
          ].map((member) => (
            <div key={member.name} className={styles.card}>
              <img
                className={styles.avatar}
                src={member.img}
                alt={member.name}
              />
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p>{member.description}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} color="#0A66C2" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
