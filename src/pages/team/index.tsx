import React from "react";
import Layout from "@theme/Layout";
import styles from "./team.module.css";
import { Linkedin } from "lucide-react";

export default function Team() {
  return (
    <Layout title="Notre équipe" description="Rencontrez l'équipe de Cortest">
      <main className={styles.teamPage}>
        <div className={styles.banner}>
          <h1>Notre équipe</h1>
          <p>
            Tous les 4 très intéressés par le développement d’une application,
            et soucieux de contribuer au milieu hospitalier, nous nous sommes
            lancés à fond dans ce projet.
          </p>
        </div>
        <div className={styles.members}>
          {[
            {
              name: "Maïwen Mile",
              img: "/img/maiwenn.jpg",
              linkedin: "#",
              role: "rôle ou compétences",
            },
            {
              name: "Nolan Beaujault",
              img: "/img/nolan.jpg",
              linkedin: "#",
              role: "rôle ou compétences",
            },
            {
              name: "Apolline Baudry",
              img: "/img/apolline.jpg",
              linkedin: "#",
              role: "rôle ou compétences",
            },
            {
              name: "Berkay Oztas",
              img: "/img/berkay.jpg",
              linkedin: "#",
              role: "rôle ou compétences",
            },
          ].map((member) => (
            <div key={member.name} className={styles.card}>
              <img
                className={styles.avatar}
                src={member.img}
                alt={member.name}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} color="#0A66C2" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
