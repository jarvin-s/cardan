"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./cognitief.module.css";
import FAQ from "../faq/faq";
import faqData from "../faq/faq-data.json";

const Cognitief = () => {
  const adhdFAQs = faqData.find((category) => category.category === "ADHD");
  const [time, setTime] = useState(0);
  const [showDistraction, setShowDistraction] = useState(false);
  const [distractionText, setDistractionText] = useState("");
  const [emailData, setEmailData] = useState({
    naar: "",
    onderwerp: "",
    bericht: "",
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const distractions = [
      "Ik moet nog boodschappen doen vandaag",
      "Wat eten we vanavond?",
      "Ik moet die serie nog afkijken",
      "Heb ik mijn telefoon opgeladen?",
      "Wanneer was ik ook alweer jarig?",
      "Ik moet nog een cadeau kopen",
      "Mijn kamer moet opgeruimd worden",
      "Wat is het weerbericht voor morgen?",
      "Heeft de kat al eten gehad?",
    ];
    const textArea = textareaRef.current;
    if (textArea) {
      const handleTyping = () => {
        if (Math.random() < 0.2 && !showDistraction) {
          const randomIndex = Math.floor(Math.random() * distractions.length);
          setDistractionText(distractions[randomIndex]);
          setShowDistraction(true);

          setTimeout(() => {
            setShowDistraction(false);
          }, 4000);
        }
      };

      textArea.addEventListener("input", handleTyping);

      return () => {
        if (textArea) {
          textArea.removeEventListener("input", handleTyping);
        }
      };
    }
  }, [showDistraction]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Ervaar hoe het is om ADHD te hebben</h1>
        <p className={styles.subtitle}>
          Tijdens het schrijven van de e-mail verschijnen afleidende pop-ups,
          vergelijkbaar met gedachten bij ADHD.
        </p>
        <div className={styles.timer}>
          <span className={styles.timerLabel}>Tijd: </span>
          <span className={styles.timerValue}>{formatTime(time)}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.emailContainer}>
          <h2 className={styles.emailTitle}>E-mail schrijven</h2>
          <p className={styles.emailInstructions}>
            Schrijf een e-mail naar je docent, waarin je meldt dat je te laat
            gaat komen voor de les van vandaag.
          </p>

          <div className={styles.formGroup}>
            <label htmlFor="naar">Naar</label>
            <input
              type="text"
              id="naar"
              className={styles.inputField}
              value={emailData.naar}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="onderwerp">Onderwerp</label>
            <input
              type="text"
              id="onderwerp"
              className={styles.inputField}
              value={emailData.onderwerp}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bericht">Bericht</label>
            <textarea
              id="bericht"
              className={styles.messageField}
              rows={5}
              value={emailData.bericht}
              onChange={handleChange}
              ref={textareaRef}
            ></textarea>
          </div>

          <button className={styles.sendButton}>Verzenden</button>
        </div>

        {showDistraction && (
          <div className={styles.distractionPopup}>
            <p>{distractionText}</p>
          </div>
        )}
      </div>
      <div className={styles.nextButtonContainer}>
        <button className={styles.nextButton}>Volgende</button>
      </div>

      <div className={styles.faqContainer}>
        {adhdFAQs?.faqs.map((faq, index) => (
          <FAQ key={index} title={faq.title} description={faq.description} />
        ))}
      </div>
    </div>
  );
};

export default Cognitief;
