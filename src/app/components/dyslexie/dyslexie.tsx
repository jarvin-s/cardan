"use client";

import React from "react";
import styles from "./dyslexie.module.css";
import { useRouter } from "next/navigation";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

interface DyslexieProps {
  title: string;
  subtitle: string;
  formTitle: string;
  formText: string;
  formSubmit: string;
  formFinishButton: string;
  formQuestion: string;
  formPlaceholder: string;
}

const Dyslexie = ({
  title,
  subtitle,
  formTitle,
  formText,
  formSubmit,
  formFinishButton,
  formQuestion,
  formPlaceholder,
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
        <div className={styles.timerContainer}>
          <span className={styles.timerLabel}>
            <TimerIcon />
          </span>
          <span className={styles.timerValue}>00:00</span>
        </div>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>{formTitle}</h2>

        <div className={styles.formGroup}>
          <p className={`${styles.formText} ${specialElite.className}`}>
            {formText}
          </p>
          <div>
            <h3>{formQuestion}</h3>
            <input
              className={styles.input}
              type="text"
              placeholder={formPlaceholder}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              {formSubmit}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.nextButtonContainer}>
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

const TimerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M10 2h4m-2 12l3-3" />
        <circle cx="12" cy="14" r="8" />
      </g>
    </svg>
  );
};

export default Dyslexie;
