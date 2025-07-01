import React from "react";
import Layout from "@theme/Layout";

export default function WaitPage() {
  return (
    <Layout title="Coming Soon">
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.spinner}></div>
          <h1 style={styles.title}>Page under construction</h1>
          <p style={styles.subtitle}>
            We’re working hard to get this ready. Check back soon!
          </p>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  card: {
    backgroundColor: "white",
    padding: "2rem 3rem",
    borderRadius: "1.5rem",
    textAlign: "center" as const,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  spinner: {
    margin: "0 auto 1.5rem",
    width: "50px",
    height: "50px",
    border: "5px solid #d0eeed",
    borderTop: "5px solid #2b4765",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  title: {
    marginBottom: "0.5rem",
    color: "#2b4765",
  },
  subtitle: {
    color: "#555",
    fontSize: "1rem",
  },
};
