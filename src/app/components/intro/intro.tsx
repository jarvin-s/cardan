"use client";

import React from "react";
import styles from "./intro.module.css";

interface IntroProps {
  title: string;
  heading: string;
  paragraaf: string;
  finalText: string;
  button: string;
}

const Intro = ({
  title,
  heading,
  paragraaf,
  finalText,
  button
}: IntroProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.subheading}>{heading}</p>
        <p className={styles.paragraph}>{paragraaf}</p>
        <p className={styles.finalText}>{finalText}</p>
        <button
          className={styles.button}
          onClick={() =>
            (window.location.href = "/ervaringsplein/visuele-beperking")
          }
        >
          {button}
        </button>
      </div>
    </div>
  )
}

export default Intro;