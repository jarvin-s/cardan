"use client";

import React from "react";
import styles from "./rapport.module.css";
import Image from "next/image";

interface RapportProps {
  title: string;
  text: string;
  text2: string;
  textBold: string;
  ctaText: string;
  resultText: string;
}

const Rapport = ({
  title,
  text,
  text2,
  textBold,
  ctaText,
  resultText,
}: RapportProps) => {
  const handleCtaClick = () => {
    window.location.href = "https://www.cardan.com/contact";
  };
  return (
    <>
      <div className={styles.backgroundContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.greyContainer}>
            <h2 className={styles.greyContainerTitle}>{resultText}</h2>
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
            alt="Paars achtergrond"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.greenBackground}>
          <Image
            src="/images/groen-background.png"
            alt="Groen achtergrond"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default Rapport;
