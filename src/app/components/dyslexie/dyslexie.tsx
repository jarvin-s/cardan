"use client";

import React, { useState, useEffect } from "react";
import styles from "./dyslexie.module.css";
import { Special_Elite } from "next/font/google";
import CompleteScreen from "./completed/complete-screen";

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
  const [completed, setCompleted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [savedTime, setSavedTime] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState("3");

  useEffect(() => {
    const savedDyslexieTime = localStorage.getItem("dyslexieTime");
    if (savedDyslexieTime) {
      setSavedTime(parseInt(savedDyslexieTime, 10));
    }

    const savedDifficulty = localStorage.getItem("dyslexieDifficulty");
    if (savedDifficulty) {
      setDifficulty(savedDifficulty);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (timerActive) {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleInputFocus = () => {
    if (!timerActive) {
      setTimerActive(true);
    }
  };

  const handleFinish = () => {
    setCompleted(true);
    setSavedTime(elapsedTime);
    localStorage.setItem("dyslexieTime", elapsedTime.toString());
  };

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
    localStorage.setItem("dyslexieDifficulty", value);
  };

  if (completed) {
    return (
      <CompleteScreen
        elapsedTime={elapsedTime}
        savedTime={savedTime}
        difficulty={difficulty}
        onDifficultyChange={handleDifficultyChange}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.timerContainer}>
          <span className={styles.timerLabel}>
            <TimerIcon />
          </span>
          <span className={styles.timerValue}>{formatTime(elapsedTime)}</span>
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
              onFocus={handleInputFocus}
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
