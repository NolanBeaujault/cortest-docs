import React from "react";
import Layout from "@theme/Layout";
import styles from "./team.module.css";
import { Linkedin } from "lucide-react";

export default function Team() {
  const techMembers = [
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
      role: "Backend & Web Manager",
      description:
        "This project significantly boosted my backend skills, particularly around performance, security, and data structure, while also strengthening my ability to work with real users and adapt my architecture accordingly.",
    },
    {
      name: "Apolline Baudry",
      img: "img/apo_pp.jpeg",
      linkedin: "https://www.linkedin.com/in/apolline-baudry-1037ab288/",
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
  ];

  const medicMembers = [
    {
      name: "Lucas Gauer",
      img: "img/lucas_pic.jpeg",
      role: "MD, Neurologist",
      description:
        "I work in the Epileptology Department at Strasbourg University Hospitals, where I am involved in the diagnosis and presurgical evaluation of patients with epileps. Interested in new technologies, I initiated the CorTest project and brought together the team developing this app to improve patient's care.",
    },
    {
      name: "Emilia Gonzalez-Villagomez",
      img: "img/emilia_pic.jpeg",
      role: "MD, Neurologist",
      description:
        "I contributed to the CorTest project by focusing on the user experience. My role was to ensure that the application is intuitive, easy to use, and truly adapted to the needs of patients and their families, bringing my clinical expertise to guide the design and functionality of the tool.",
    },
  ];

  type Member = {
    name: string;
    img: string;
    linkedin?: string;
    role: string;
    description: string;
    color?: string;
  };

  const renderMemberCard = (member: Member, isMedic = false) => (
    <div
      key={member.name}
      className={`${styles.card} ${isMedic ? styles.medicCard : ""}`}
    >
      <img className={styles.avatar} src={member.img} alt={member.name} />
      <h3>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
      <p>{member.description}</p>
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} color="#0A66C2" />
        </a>
      )}
    </div>
  );

  return (
    <Layout title="Our Team" description="Meet the team behind the project">
      <main className={styles.teamPage}>
        <div className={styles.banner}>
          <h1>The Team</h1>
          <p>
            Driven by a shared passion for application development and a
            commitment to enhancing the hospital environment, the six of us have
            fully dedicated ourselves to this project.
          </p>
        </div>

        <section className={styles.section}>
          <h1 className={styles.groupTitle}>The Medics</h1>
          <br></br>
          <div className={styles.members}>
            {medicMembers.map((m) => renderMemberCard(m, true))}
          </div>
        </section>

        <br></br>

        <section className={styles.section}>
          <h1 className={styles.groupTitle}>The Techs</h1>
          <br></br>
          <div className={styles.members}>
            {techMembers.map((m) => renderMemberCard(m))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
