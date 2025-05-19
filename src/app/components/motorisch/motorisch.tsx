"use client";

import React from "react";
import styles from "./motorisch.module.css";
import FAQ from "../faq/faq";
import faqData from "../faq/faq-data.json";
import { useRouter } from "next/navigation";

interface MotorischProps {
  title: string;
  subtitle: string;
  formTitle: string;
  formTimerLabel: string;
  formSubtitle: string;
  formName: string;
  formLastname: string;
  formAddress: string;
  formPostcode: string;
  formSubmit: string;
  formNext: string;
}

const Motorisch = ({
  title,
  subtitle,
  formTitle,
  formTimerLabel,
  formSubtitle,
  formName,
  formLastname,
  formAddress,
  formPostcode,
  formSubmit,
  formNext,
}: MotorischProps) => {
  const router = useRouter();
  const faqs = faqData.find((faq) => faq.category === "Cerebrale Parese")?.faqs;

  const handleNextClick = () => {
    router.push("/ervaringsplein/dyslexie");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <span className={styles.timerLabel}>{formTimerLabel}</span>
        <span className={styles.timer}>00:00</span>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>{formTitle}</h2>
        <p className={styles.formSubtitle}>{formSubtitle}</p>

        <form>
          <div className={styles.formGroup}>
            <label htmlFor="naam" className={styles.label}>
              {formName}
            </label>
            <input type="text" id="naam" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="achternaam" className={styles.label}>
              {formLastname}
            </label>
            <input
              type="text"
              id="achternaam"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="adres" className={styles.label}>
              {formAddress}
            </label>
            <input type="text" id="adres" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="postcode" className={styles.label}>
              {formPostcode}
            </label>
            <input
              type="text"
              id="postcode"
              className={styles.input}
              required
            />
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

      <div className={styles.faqContainer}>
        {faqs?.map(
          (faq: { title: string; description: string }, index: number) => (
            <FAQ key={index} title={faq.title} description={faq.description} />
          )
        )}
      </div>
    </div>
  );
};

export default Motorisch;
