"use client";

import React, { useState, useEffect } from "react";
import styles from "./dyslexie.module.css";
import { Special_Elite } from "next/font/google";
import CompleteScreen from "./completed/complete-screen";
import { motion } from "motion/react";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

interface DyslexieProps {
  title: string;
  subtitle: string;
  dyslexie: string;
  formTitle: string;
  formText: string;
  formSubmit: string;
  formQuestion: string;
  formPlaceholder: string;
  introText: string;
  startInstruction: string;
}

const TIME_LIMIT = 60;

const Dyslexie = ({
  title,
  subtitle,
  dyslexie,
  formTitle,
  formText,
  formSubmit,
  formQuestion,
  formPlaceholder,
  introText,
  startInstruction,
}: DyslexieProps) => {
  const [completed, setCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);
  const [timerActive, setTimerActive] = useState(false);
  const [savedTime, setSavedTime] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState("3");
  const [isStarted, setIsStarted] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

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

    if (timerActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setTimerActive(false);
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleStart = () => {
    setIsStarted(true);
    setTimerActive(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFinish();
  };

  const handleFinish = () => {
    setCompleted(true);
    setTimerActive(false);
    const timeSpent = TIME_LIMIT - timeRemaining;
    setSavedTime(timeSpent);
    localStorage.setItem("dyslexieTime", timeSpent.toString());
  };

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
    localStorage.setItem("dyslexieDifficulty", value);
  };

  if (completed) {
    return (
      <CompleteScreen
        elapsedTime={TIME_LIMIT - timeRemaining}
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
      </div>

      {!isStarted ? (
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1>{dyslexie}</h1>
            <p>{introText}</p>
            <h5>{startInstruction}</h5>
          </div>
          <div className={styles.startContainer}>
            <button className={styles.startButton} onClick={handleStart}>
              Start
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <div className={styles.formContainer}>
            <div className={styles.timerContainer}>
              <span className={styles.timerLabel}>
                <TimerIcon />
              </span>
              <span className={styles.timerValue}>
                {formatTime(timeRemaining)}
              </span>
            </div>
            <h2 className={styles.formTitle}>{formTitle}</h2>

            <form className={styles.formGroup} onSubmit={handleSubmit}>
              <p className={`${styles.formText} ${specialElite.className}`}>
                {formText}
              </p>
              <div>
                <h3>{formQuestion}</h3>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={formPlaceholder}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                  {formSubmit}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
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
