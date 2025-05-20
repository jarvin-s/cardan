"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./cognitief.module.css";
import { useRouter } from "next/navigation";
import CompleteScreen from "./completed/complete-screen";
import { useLocale } from "next-intl";

interface CognitiefProps {
  title: string;
  subtitle: string;
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formSubject: string;
  formMessage: string;
  formSubmit: string;
  formNext: string;
  placeholders: {
    to: string;
    subject: string;
    message: string;
  };
  formErrorMessage: string;
  textareaErrorMessage: string;
}

interface Distraction {
  id: number;
  text: string;
  positionX: string;
  positionY: string;
  isHighlighted: boolean;
}

const Cognitief = ({
  title,
  subtitle,
  formTitle,
  formSubtitle,
  formName,
  formSubject,
  formMessage,
  formSubmit,
  formNext,
  placeholders,
  formErrorMessage,
  textareaErrorMessage,
}: CognitiefProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [distractionList, setDistractionList] = useState<Distraction[]>([]);
  const [completed, setCompleted] = useState(false);
  const [savedTime, setSavedTime] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<string>("3");
  const [nameInput, setNameInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: false,
    subject: false,
    message: false,
    messageLength: false,
  });
  const distractionIdRef = useRef(0);
  const router = useRouter();
  const locale = useLocale();
  const colors = ["#ef3f3f", "#0d19c1", "#09ab2f", "#f59e0b", "#f916b9"];

  useEffect(() => {
    const savedCognitiefTime = localStorage.getItem("cognitiefTime");
    if (savedCognitiefTime) {
      setSavedTime(parseInt(savedCognitiefTime, 10));
    }

    const savedDifficulty = localStorage.getItem("cognitiefDifficulty");
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

  useEffect(() => {
    const distractions = [
      {
        nl: "Heb je eraan gedacht om de kat te voeren?",
        en: "Did you think about feeding the cat?",
      },
      {
        nl: "Even snel naar mijn telefoon meldingen kijken",
        en: "Quickly check my phone messages",
      },
      {
        nl: "Wat eten we vanavond?",
        en: "What are we having for dinner?",
      },
      {
        nl: "Ik moet nog naar de winkel",
        en: "I need to go to the store",
      },
      {
        nl: "Ik moet social media moeten checken",
        en: "I need to check social media",
      },
      {
        nl: "Ik moet niet vergeten dat die rekening binnenkort betaald moet worden",
        en: "I need to remember that that bill is due soon",
      },
      {
        nl: "Is mijn telefoon opgeladen?",
        en: "Is my phone charged?",
      },
      {
        nl: "Ik wil eigenlijk een TikTok pauze nemen",
        en: "I want to take a TikTok break",
      },
    ];
    if (!timerActive) return;

    const showDistraction = () => {
      const randomDistraction =
        distractions[Math.floor(Math.random() * distractions.length)];
      const randomX = `${Math.floor(Math.random() * 80) + 10}%`;
      const randomY = `${Math.floor(Math.random() * 80) + 10}%`;
      const isHighlighted = distractionIdRef.current % 5 === 2;

      const newDistraction = {
        id: distractionIdRef.current++,
        text: locale === "nl" ? randomDistraction.nl : randomDistraction.en,
        positionX: randomX,
        positionY: randomY,
        isHighlighted,
      };

      setDistractionList((prev) => [...prev, newDistraction]);

      setTimeout(() => {
        setDistractionList((prev) =>
          prev.filter((d) => d.id !== newDistraction.id)
        );
      }, 3500);

      const nextDelay = Math.floor(Math.random() * 3000) + 2000;
      setTimeout(showDistraction, nextDelay);
    };

    const initialDelay = Math.floor(Math.random() * 3000) + 2000;
    const timeoutId = setTimeout(showDistraction, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [timerActive, distractionList, locale]);

  const handleInputFocus = () => {
    if (!timerActive) {
      setTimerActive(true);
    }
  };

  const handleNextClick = () => {
    router.push("/ervaringsplein/motorische-beperking");
  };

  const validateForm = () => {
    const errors = {
      name: nameInput.trim() === "",
      subject: subjectInput.trim() === "",
      message: messageInput.trim() === "",
      messageLength: messageInput.trim().length < 40,
    };

    setFormErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      localStorage.setItem("cognitiefTime", elapsedTime.toString());
      setSavedTime(elapsedTime);
      setCompleted(true);
    }
  };

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
  };

  return (
    <>
      {!completed && (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.timerContainer}>
              <span className={styles.timerLabel}>
                <TimerIcon />
              </span>
              <span className={styles.timerValue}>
                {formatTime(elapsedTime)}
              </span>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.emailContainer}>
              <h2 className={styles.emailTitle}>{formTitle}</h2>
              <p className={styles.emailInstructions}>{formSubtitle}</p>
              <div className={styles.exampleData}>
                <p>
                  <span>{formName}:</span> {placeholders.to}
                  <br />
                  <span>{formSubject}:</span> {placeholders.subject}
                  <br />
                  <span>{formMessage}:</span> {placeholders.message}
                </p>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="naar">{formName}</label>
                <input
                  type="text"
                  id="naar"
                  className={`${styles.inputField} ${
                    formErrors.name ? styles.inputError : ""
                  }`}
                  onFocus={handleInputFocus}
                  onChange={(e) => {
                    handleInputFocus();
                    setNameInput(e.target.value);
                  }}
                  value={nameInput}
                  required
                />
                {formErrors.name && (
                  <p className={styles.errorMessage}>{formErrorMessage}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="onderwerp">{formSubject}</label>
                <input
                  type="text"
                  id="onderwerp"
                  className={`${styles.inputField} ${
                    formErrors.subject ? styles.inputError : ""
                  }`}
                  onFocus={handleInputFocus}
                  onChange={(e) => {
                    handleInputFocus();
                    setSubjectInput(e.target.value);
                  }}
                  value={subjectInput}
                  required
                />
                {formErrors.subject && (
                  <p className={styles.errorMessage}>{formErrorMessage}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="bericht">{formMessage}</label>
                <textarea
                  id="bericht"
                  className={`${styles.messageField} ${
                    formErrors.message ||
                    (formErrors.messageLength && messageInput.length < 50)
                      ? styles.inputError
                      : ""
                  }`}
                  rows={5}
                  onFocus={handleInputFocus}
                  onChange={(e) => {
                    handleInputFocus();
                    setMessageInput(e.target.value);
                  }}
                  value={messageInput}
                  required
                ></textarea>
                {formErrors.message && (
                  <p className={styles.errorMessage}>{formErrorMessage}</p>
                )}
                {formErrors.messageLength &&
                  !formErrors.message &&
                  messageInput.length < 40 && (
                    <p className={styles.errorMessage}>
                      {textareaErrorMessage}
                    </p>
                  )}
              </div>
              <button className={styles.sendButton} onClick={handleSubmit}>
                {formSubmit}
              </button>
            </div>
          </div>
          <div className={styles.nextButtonContainer}>
            <button className={styles.nextButton} onClick={handleNextClick}>
              {formNext}
            </button>
          </div>

          {distractionList.map((distraction) => (
            <div
              key={distraction.id}
              className={styles.distractionPopup}
              style={{
                top: distraction.positionY,
                left: distraction.positionX,
                transform: "none",
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                color: "white",
              }}
            >
              <p>{distraction.text}</p>
            </div>
          ))}
        </div>
      )}

      {completed && (
        <CompleteScreen
          elapsedTime={elapsedTime}
          savedTime={savedTime}
          difficulty={difficulty}
          onDifficultyChange={handleDifficultyChange}
        />
      )}
    </>
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

export default Cognitief;
