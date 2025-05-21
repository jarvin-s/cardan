"use client";

import React, { useEffect, useState } from "react";
import styles from "./motorisch.module.css";
import { useRouter } from "next/navigation";
import CompleteScreen from "./completed/complete-screen";
import { useLocale } from "next-intl";

interface MotorischProps {
  title: string;
  subtitle: string;
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formLastname: string;
  formAddress: string;
  formPostcode: string;
  formSubmit: string;
  formNext: string;
  placeholders: {
    name: string;
    lastname: string;
    address: string;
    postcode: string;
  };
  errors: {
    name: string;
    lastname: string;
    address: string;
    postcode: string;
  };
}

const Motorisch = ({
  title,
  subtitle,
  formTitle,
  formSubtitle,
  formName,
  formLastname,
  formAddress,
  formPostcode,
  formSubmit,
  formNext,
  placeholders,
  errors,
}: MotorischProps) => {
  const router = useRouter();
  const locale = useLocale();
  const [completed, setCompleted] = useState(false);
  const [savedTime, setSavedTime] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<string>("3");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    lastname: false,
    address: false,
    postcode: false,
    exactMatch: false,
  });

  const [formData, setFormData] = useState({
    naam: "",
    achternaam: "",
    adres: "",
    postcode: "",
  });

  const handleNextClick = () => {
    router.push("/ervaringsplein/dyslexie");
  };

  const validateForm = () => {
    const errors = {
      name:
        formData.naam.trim() === "" ||
        (locale === "nl" ? formData.naam !== "Jan" : formData.naam !== "John"),
      lastname:
        formData.achternaam.trim() === "" ||
        (locale === "nl"
          ? formData.achternaam !== "de Vries"
          : formData.achternaam !== "Smith"),
      address:
        formData.adres.trim() === "" ||
        (locale === "nl"
          ? formData.adres !== "Hoofdstraat 123"
          : formData.adres !== "123 Main Street"),
      postcode:
        formData.postcode.trim() === "" ||
        (locale === "nl"
          ? formData.postcode !== "1234 AB"
          : formData.postcode !== "SW1A 1AA"),
      exactMatch: false,
    };

    errors.exactMatch =
      errors.name || errors.lastname || errors.address || errors.postcode;

    setFormErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const simulateTypingError = (value: string): string => {
    const nearbyKeys: { [key: string]: string[] } = {
      a: ["q", "s", "z"],
      b: ["v", "n", "h"],
      c: ["x", "v", "f"],
      d: ["s", "f", "e"],
      e: ["w", "r", "d"],
      f: ["d", "g", "v"],
      g: ["f", "h", "b"],
      h: ["g", "j", "n"],
      i: ["u", "o", "k"],
      j: ["h", "k", "m"],
      k: ["j", "l", "i"],
      l: ["k", "p", "o"],
      m: ["n", "j", "k"],
      n: ["b", "m", "h"],
      o: ["i", "p", "l"],
      p: ["o", "l", "["],
      q: ["1", "w", "a"],
      r: ["e", "t", "f"],
      s: ["a", "d", "w"],
      t: ["r", "y", "g"],
      u: ["y", "i", "j"],
      v: ["c", "b", "g"],
      w: ["q", "e", "s"],
      x: ["z", "c", "d"],
      y: ["t", "u", "h"],
      z: ["a", "x", "s"],
      "0": ["9", "-", "p"],
      "1": ["`", "2", "q"],
      "2": ["1", "3", "w"],
      "3": ["2", "4", "e"],
      "4": ["3", "5", "r"],
      "5": ["4", "6", "t"],
      "6": ["5", "7", "y"],
      "7": ["6", "8", "u"],
      "8": ["7", "9", "i"],
      "9": ["8", "0", "o"],
      " ": [" "],
    };

    if (Math.random() < 0.01) {
      const lastChar = value.slice(-1).toLowerCase();
      if (nearbyKeys[lastChar]) {
        const possibleErrors = nearbyKeys[lastChar];
        const randomError =
          possibleErrors[Math.floor(Math.random() * possibleErrors.length)];
        return value.slice(0, -1) + randomError;
      }
    }
    return value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (value.length < formData[id as keyof typeof formData].length) {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
      return;
    }

    const simulatedValue = simulateTypingError(value);
    setFormData((prev) => ({
      ...prev,
      [id]: simulatedValue,
    }));
  };

  useEffect(() => {
    const savedMotorischTime = localStorage.getItem("motorischTime");
    if (savedMotorischTime) {
      setSavedTime(parseInt(savedMotorischTime, 10));
    }

    const savedDifficulty = localStorage.getItem("motorischDifficulty");
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

  const handleInputFocus = () => {
    if (!timerActive) {
      setTimerActive(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("motorischTime", elapsedTime.toString());
      setSavedTime(elapsedTime);
      setCompleted(true);
    }
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

          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <p className={styles.formSubtitle}>{formSubtitle}</p>
            <div className={styles.exampleData}>
              <p>
                <span>{formName}:</span> {placeholders.name}
                <br />
                <span>{formLastname}:</span> {placeholders.lastname}
                <br />
                <span>{formAddress}:</span> {placeholders.address}
                <br />
                <span>{formPostcode}:</span> {placeholders.postcode}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="naam" className={styles.label}>
                  {formName}
                </label>
                <input
                  type="text"
                  id="naam"
                  className={`${styles.input} ${
                    formErrors.name ? styles.inputError : ""
                  }`}
                  onFocus={handleInputFocus}
                  value={formData.naam}
                  onChange={handleInputChange}
                />
                {formErrors.name && (
                  <p className={styles.errorMessage}>{errors.name}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="achternaam" className={styles.label}>
                  {formLastname}
                </label>
                <input
                  type="text"
                  id="achternaam"
                  className={`${styles.input} ${
                    formErrors.lastname ? styles.inputError : ""
                  }`}
                  onFocus={handleInputFocus}
                  value={formData.achternaam}
                  onChange={handleInputChange}
                />
                {formErrors.lastname && (
                  <p className={styles.errorMessage}>{errors.lastname}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="adres" className={styles.label}>
                  {formAddress}
                </label>
                <input
                  type="text"
                  id="adres"
                  className={`${styles.input} ${
                    formErrors.address ? styles.inputError : ""
                  }`}
                  onFocus={handleInputFocus}
                  value={formData.adres}
                  onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className={styles.errorMessage}>{errors.address}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="postcode" className={styles.label}>
                  {formPostcode}
                </label>
                <input
                  type="text"
                  id="postcode"
                  className={`${styles.input} ${
                    formErrors.postcode ? styles.inputError : ""
                  }`}
                  onFocus={handleInputFocus}
                  value={formData.postcode}
                  onChange={handleInputChange}
                />
                {formErrors.postcode && (
                  <p className={styles.errorMessage}>{errors.postcode}</p>
                )}
              </div>

              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                  {formSubmit}
                </button>
              </div>
            </form>
          </div>

          <div className={styles.nextButtonContainer}>
            <button className={styles.nextButton} onClick={handleNextClick}>
              {formNext}
            </button>
          </div>
        </div>
      )}

      {completed && (
        <CompleteScreen
          elapsedTime={elapsedTime}
          savedTime={savedTime}
          difficulty={difficulty}
          onDifficultyChange={(value: string) => setDifficulty(value)}
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

export default Motorisch;
