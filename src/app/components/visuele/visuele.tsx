"use client";
import React, { useState, useEffect } from "react";
import styles from "./visuele.module.css";

interface VisueleProps {
  title: string;
  paragraaf: string;
  subtekst: string;
  opdracht: string;
  hoofdnaam: string;
  combi1: string;
  combi2: string;
  combi3: string;
  volgende: string;
  reserved_message: string;
  success_message: string;
}

type SeatStatus = "green" | "red";

const Visuele = ({
  title,
  paragraaf,
  subtekst,
  opdracht,
  hoofdnaam,
  combi1,
  combi2,
  combi3,
  volgende,
  reserved_message,
  success_message,
}: VisueleProps) => {
  const [selectedMode, setSelectedMode] = useState(combi1);
  const [seats, setSeats] = useState<SeatStatus[]>([]);
  const [firstClickStatus, setFirstClickStatus] = useState<SeatStatus | null>(
    null
  );
  const [userReservedSeats, setUserReservedSeats] = useState<number[]>([]);
  const [message, setMessage] = useState<{
    text: string;
    type: "error" | "success";
  } | null>(null);

  // Genereer stoelen random met 'green' of 'red'
  useEffect(() => {
    const randomSeats: SeatStatus[] = Array.from({ length: 64 }, () =>
      Math.random() > 0.5 ? "green" : "red"
    );
    setSeats(randomSeats);
  }, []);

  // Bepaal welke kleur op basis van filter
  const getSeatClass = (status: SeatStatus) => {
    if (selectedMode === combi1) {
      return status === "green" ? styles.kleur1 : styles.kleur2;
    } else if (selectedMode === combi2) {
      return status === "green" ? styles.kleur3 : styles.kleur4;
    } else if (selectedMode === combi3) {
      return status === "green" ? styles.kleur5 : styles.kleur6;
    }
    return "";
  };

  const handleSeatClick = (index: number, status: SeatStatus) => {
    if (firstClickStatus === null) {
      setFirstClickStatus(status);
      setUserReservedSeats((prev) => [...prev, index]);
      setMessage({ text: reserved_message, type: "error" });
    } else {
      if (status === firstClickStatus) {
        setMessage({ text: reserved_message, type: "error" });
      } else {
        if (!userReservedSeats.includes(index)) {
          setUserReservedSeats((prev) => [...prev, index]);
          setMessage({ text: success_message, type: "success" });
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{paragraaf}</p>
      <p className={styles.subdescription}>{subtekst}</p>

      <div className={styles.content}>
        {/* Stoelen */}
        <div className={styles.seatSection}>
          <p className={styles.seatInstruction}>{opdracht}</p>
          <div className={styles.seatGrid}>
            {seats.map((seat, i) => {
              const isUserReserved = userReservedSeats.includes(i);
              const seatClass = getSeatClass(seat);
              const reservedClass = isUserReserved ? styles.userReserved : "";
              return (
                <div
                  key={i}
                  className={`${styles.seat} ${seatClass} ${reservedClass}`}
                  onClick={() => handleSeatClick(i, seat)}
                ></div>
              );
            })}
          </div>

          {message && (
            <div className={`${styles.message} ${styles[message.type]}`}>
              {message.text}
            </div>
          )}
        </div>

        {/* Filterselectie */}
        <div className={styles.filterSection}>
          <p className={styles.filterLabel}>{hoofdnaam}</p>
          {[combi1, combi2, combi3].map((mode) => (
            <button
              key={mode}
              className={`${styles.filterButton} ${
                selectedMode === mode ? styles.selected : ""
              }`}
              onClick={() => setSelectedMode(mode)}
            >
              <div className={styles.colorSquares}>
                {mode === combi1 && (
                  <>
                    <div
                      className={`${styles.colorSquare} ${styles.tritanColor1}`}
                    />
                    <div
                      className={`${styles.colorSquare} ${styles.tritanColor2}`}
                    />
                  </>
                )}
                {mode === combi2 && (
                  <>
                    <div
                      className={`${styles.colorSquare} ${styles.deuteranColor1}`}
                    />
                    <div
                      className={`${styles.colorSquare} ${styles.deuteranColor2}`}
                    />
                  </>
                )}
              </div>
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Volgende knop */}
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
