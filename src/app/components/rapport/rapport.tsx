"use client";

import React, { useEffect, useState } from "react";
import styles from "./rapport.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";

interface RapportProps {
  title: string;
  text: string;
  text2: string;
  textBold: string;
  ctaText: string;
}

const Rapport = ({ title, text, text2, textBold, ctaText }: RapportProps) => {
  const [savedTimes, setSavedTimes] = useState({
    cognitief: 0,
    motorisch: 0,
    dyslexie: 0,
  });
  const locale = useLocale();

  useEffect(() => {
    const cognitiefTime = localStorage.getItem("cognitiefTime");
    const motorischTime = localStorage.getItem("motorischTime");
    const dyslexieTime = localStorage.getItem("dyslexieTime");

    setSavedTimes({
      cognitief: cognitiefTime ? parseInt(cognitiefTime, 10) : 0,
      motorisch: motorischTime ? parseInt(motorischTime, 10) : 0,
      dyslexie: dyslexieTime ? parseInt(dyslexieTime, 10) : 0,
    });
  }, []);

  const formatTime = (seconds: number): string => {
    if (seconds === 0)
      return locale === "nl" ? "Niet voltooid" : "Not completed";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleCtaClick = () => {
    window.location.href = "https://www.cardan.com/contact";
  };

  const translations = {
    cognitiveTest: locale === "nl" ? "Cognitieve test" : "Cognitive test",
    motorTest: locale === "nl" ? "Motorische test" : "Motor skills test",
    dyslexiaTest: locale === "nl" ? "Dyslexie test" : "Dyslexia test",
    purpleAlt: locale === "nl" ? "Paars achtergrond" : "Purple background",
    greenAlt: locale === "nl" ? "Groen achtergrond" : "Green background",
  };

  return (
    <>
      <div className={styles.backgroundContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.greyContainer}>
            <div className={styles.results}>
              <p>
                <BrainIcon /> {translations.cognitiveTest}:{" "}
                {formatTime(savedTimes.cognitief)}
              </p>
              <p>
                <HandIcon /> {translations.motorTest}:{" "}
                {formatTime(savedTimes.motorisch)}
              </p>
              <p>
                <BookIcon /> {translations.dyslexiaTest}:{" "}
                {formatTime(savedTimes.dyslexie)}
              </p>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
            <section>
              <p className={styles.textBold}>{textBold}</p>
              <p className={styles.text}>{text2}</p>
              <div>
                <button className={styles.ctaButton} onClick={handleCtaClick}>
                  {ctaText}
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Background decoration */}
        <div className={styles.purpleBackground}>
          <Image
            src="/images/paars-background.png"
            alt={translations.purpleAlt}
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.greenBackground}>
          <Image
            src="/images/groen-background.png"
            alt={translations.greenAlt}
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" />
    </g>
  </svg>
);

const HandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 4V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0 4.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </g>
  </svg>
);

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 7v14m4-9h2m-2-4h2M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3zm3-6h2M6 8h2"
    />
  </svg>
);

export default Rapport;
