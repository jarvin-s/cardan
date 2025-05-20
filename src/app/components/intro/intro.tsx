"use client";

import React from "react";
import styles from "./intro.module.css";
import Image from "next/image";

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
  button,
}: IntroProps) => {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <div className={styles.container}>
          <h1 className={styles.heading}>{title}</h1>
          <p className={styles.subheading}>{heading}</p>
          <p className={styles.paragraph}>{paragraaf}</p>
          <p className={styles.finalText}>{finalText}</p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href = "/ervaringsplein/kleurenblindheid")
            }
          >
            {button}
          </button>
        </div>
        <div className={styles.purpleBackground}>
          <Image
            src="/images/paars-background.png"
            alt="Paars achtergrond"
            width={600}
            height={400}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.greenBackground}>
          <Image
            src="/images/groen-background.png"
            alt="Groen achtergrond"
            width={600}
            height={400}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
