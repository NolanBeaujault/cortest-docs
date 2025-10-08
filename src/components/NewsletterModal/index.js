import React, { useState } from "react";
import styles from "./styles.module.css";

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [company_position, setCompanyPosition] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mblzagbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          last_name: last_name,
          company_position: company_position,
          _subject: "New newsletter subscription",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setEmail("");
          setName("");
          setLastName("");
          setCompanyPosition("");
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.modalTitle}>Join our mailing list</h2>
        <p className={styles.modalDescription}>
          You can download the prototype right now on the installation page, but
          we'll keep you posted about major updates.
        </p>

        {status === "success" ? (
          <div className={styles.successMessage}>
            ✓ Thank you! We'll keep you updated.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Your last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Your company and position"
              value={company_position}
              onChange={(e) => setCompanyPosition(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Subscribe"}
            </button>
            {status === "error" && (
              <p className={styles.errorMessage}>
                An error occurred. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
