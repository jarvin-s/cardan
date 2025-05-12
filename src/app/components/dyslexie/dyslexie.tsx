"use client";

import React from "react";
import styles from "./dyslexie.module.css";
import { useRouter } from "next/navigation";

interface DyslexieProps {
  title: string;
  subtitle: string;
  formTitle: string;
  formText: string;
  formSubmit: string;
  formFinishButton: string;
  formDyslexie: string;
  formKleurcontrast: string;
  formQuestion: string;
}

const Dyslexie = ({
  title,
  subtitle,
  formTitle,
  formText,
  formSubmit,
  formFinishButton,
  formDyslexie,
  formKleurcontrast,
  formQuestion,
}: DyslexieProps) => {
  const router = useRouter();
  const handleFinish = () => {
    router.push("/ervaringsplein/rapport");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <span className={styles.timerLabel}>Tijd: </span>
        <span className={styles.timerValue}>00:00</span>
      </div>

      <div className={styles.tabContainer}>
        <button className={styles.tabButtonGreen}>{formDyslexie}</button>
        <button className={styles.tabButton}>{formKleurcontrast}</button>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>{formTitle}</h2>

        <div className={styles.formGroup}>
          <p className={styles.formText}>{formText}</p>
          <div>
            <h3>{formQuestion}</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Typ hier je antwoord"
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              {formSubmit}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleFinish}
        >
          {formFinishButton}
        </button>
      </div>
    </div>
  );
};

export default Dyslexie;
