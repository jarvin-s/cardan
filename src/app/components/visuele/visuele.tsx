'use client';
import React, { useState } from 'react';
import styles from './visuele.module.css';


interface VisueleProps {
  titel: string;
  paragraaf: string;
  subtekst: string;
  opdracht: string;
  kleur1: string;
  kleur2: string;
  status1: string;
  status2: string;
  hoofdnaam: string;
  combi1: string;
  combi2: string;
  combi3: string;
  volgende: string;
}
const Visuele = ({
  titel,
  paragraaf,
  subtekst,
  opdracht,
  kleur1,
  kleur2,
  status1,
  status2,
  hoofdnaam,
  combi1,
  combi2,
  combi3,
  volgende
}: VisueleProps) => {
  const [selectedMode, setSelectedMode] = useState('kleurenblindheid');

  const seats = Array(8 * 8).fill(null);

  return (
    //tekst gedeelte
    <div className={styles.container}>
      <h1 className={styles.titel}>{titel}</h1>
      <p className={styles.description}> {paragraaf}
      </p>
      <p className={styles.subdescription}>
        {subtekst}
      </p>

      {/* stoelen gedeelte */}
      <div className={styles.content}>
        <div className={styles.seatSection}>
          <p className={styles.seatInstruction}>{opdracht}</p>
          <div className={styles.seatGrid}>
            {seats.map((_, i) => (
              <div key={i} className={styles.seat}></div>
            ))}
          </div>

          <div className={styles.legend}>
            <div>
              <span className={`${styles.legendBox} ${styles.available}`}></span>
              <span>{kleur1}</span> {status1}
            </div>
            <div>
              <span className={`${styles.legendBox} ${styles.occupied}`}></span>
              <span>{kleur2}</span> {status2}
            </div>
          </div>
        </div>

        {/* Filtersectie */}
        <div className={styles.filterSection}>
          <p className={styles.filterLabel}>{hoofdnaam}</p>
          <button
            className={`${styles.filterButton} ${selectedMode === combi1 ? styles.selected : ''}`}
            onClick={() => setSelectedMode(combi1)}
          >
            {combi1}
          </button>
          <button
            className={`${styles.filterButton} ${selectedMode === combi2 ? styles.selected : ''}`}
            onClick={() => setSelectedMode(combi2)}
          >
            {combi2}
          </button>
          <button
            className={`${styles.filterButton} ${selectedMode === combi3 ? styles.selected : ''}`}
            onClick={() => setSelectedMode(combi3)}
          >
            {combi3}
          </button>
        </div>
      </div>
      
      {/* volgende button */}
      <div className={styles.nextContainer}>
        <button
          className={styles.nextButton}
          onClick={() =>
            (window.location.href = "/ervaringsplein/auditieve-beperking")
          }
        >
          {volgende}
        </button>
      </div>
    </div>
  );
};

export default Visuele;