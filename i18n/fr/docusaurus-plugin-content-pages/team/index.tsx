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
                "Leading this project in collaboration with healthcare professionals gave me a unique opportunity to develop my project management skills in a real-world context. Working on the frontend learned me to create intuitive interfaces that meet the specific needs of users.",
            },
            {
              name: "Nolan Beaujault",
              img: "img/nolan_profile.jpeg",
              linkedin: "https://www.linkedin.com/in/nolan-beaujault/",
              role: "Backend Manager",
              description:
                "This project significantly boosted my backend skills, particularly around performance, security, and data structure, while also strengthening my ability to work with real users and adapt my architecture accordingly.",
            },
            {
              name: "Apolline Baudry",
              img: "img/apo_pp.jpeg",
              linkedin:
                "https://www.linkedin.com/in/apolline-baudry-1037ab288/",
              role: "UI/UX Designer",
              description:
                "Interacting directly with healthcare providers helped me refine each screen with empathy and precision, reinforcing both my design thinking and my technical ability to turn ideas into user-friendly realities.",
            },
            {
              name: "Berkay Oztas",
              img: "img/berkay_profile.jpeg",
              linkedin: "https://www.linkedin.com/in/berkay-oztas-39b749324/",
              role: "Frontend Manager",
              description:
                "I learned to build smooth, reactive interfaces that respect healthcare standards and workflows. The constant feedback from professionals taught me to prioritize clarity and responsiveness in every detail.",
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
