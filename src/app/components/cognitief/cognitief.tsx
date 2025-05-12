"use client";

import React from "react";
import styles from "./cognitief.module.css";
import FAQ from "../faq/faq";
import faqData from "../faq/faq-data.json";
import { useRouter } from "next/navigation";

interface CognitiefProps {
  title: string;
  subtitle: string;
  formTitle: string;
  formTimerLabel: string;
  formSubtitle: string;
  formName: string;
  formSubject: string;
  formMessage: string;
  formSubmit: string;
  formNext: string;
}

const Cognitief = ({
  title,
  subtitle,
  formTitle,
  formTimerLabel,
  formSubtitle,
  formName,
  formSubject,
  formMessage,
  formSubmit,
  formNext,
}: CognitiefProps) => {
  const adhdFAQs = faqData.find((category) => category.category === "ADHD");
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/ervaringsplein/motorische-beperking");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <span className={styles.timerLabel}>{formTimerLabel}</span>
        <span className={styles.timerValue}>00:00</span>
      </div>

      <div className={styles.content}>
        <div className={styles.emailContainer}>
          <h2 className={styles.emailTitle}>{formTitle}</h2>
          <p className={styles.emailInstructions}>{formSubtitle}</p>

          {/* //! ERROR FROM HERE */}
          <div className={styles.formGroup}>
            <label htmlFor="naar">{formName}</label>
            <input type="text" id="naar" className={styles.inputField} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="onderwerp">{formSubject}</label>
            <input type="text" id="onderwerp" className={styles.inputField} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bericht">{formMessage}</label>
            <textarea
              id="bericht"
              className={styles.messageField}
              rows={5}
            ></textarea>
          </div>
          {/* //! ERROR ENDS HERE */}

          <button className={styles.sendButton}>{formSubmit}</button>
        </div>
      </div>
      <div className={styles.nextButtonContainer}>
        <button className={styles.nextButton} onClick={handleNextClick}>
          {formNext}
        </button>
      </div>

      <div className={styles.faqContainer}>
        {adhdFAQs?.faqs.map(
          (faq: { title: string; description: string }, index: number) => (
            <FAQ key={index} title={faq.title} description={faq.description} />
          )
        )}
      </div>
    </div>
  );
};

export default Cognitief;
