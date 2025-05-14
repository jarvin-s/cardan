import React from "react";
import styles from "./complete-screen.module.css";
import { useRouter } from "next/navigation";

interface CompleteScreenProps {
  elapsedTime: number;
  savedTime: number | null;
  difficulty: string;
  onDifficultyChange: (value: string) => void;
}

const CompleteScreen = ({
  elapsedTime,
  savedTime,
  difficulty,
  onDifficultyChange,
}: CompleteScreenProps) => {
  const router = useRouter();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleNextClick = () => {
    router.push("/ervaringsplein/motorische-beperking");
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDifficulty = e.target.value;
    onDifficultyChange(selectedDifficulty);
    localStorage.setItem("cognitiefDifficulty", selectedDifficulty);
  };

  return (
    <div className={styles.completedContainer}>
      <div className={styles.completedText}>
        <h1>ADHD simulatie compleet!</h1>
        <p className={styles.completedTime}>
          Je hebt{" "}
          <span className={styles.formatTimeSpan}>
            {formatTime(savedTime || elapsedTime)}
          </span>{" "}
          besteed aan deze taak.
        </p>
      </div>
      <div className={styles.formGroup}>
        <h1>Hoe moeilijk vond je het om de e-mail te schrijven?</h1>
        <div className={styles.difficultyContainer}>
          <div className={styles.difficultyOptions}>
            <div className={styles.difficultyOption}>
              <input
                type="radio"
                id="difficulty1"
                name="difficulty"
                value="1"
                className={styles.difficultyDot}
                checked={difficulty === "1"}
                onChange={handleDifficultyChange}
              />
              <div>
                <label htmlFor="difficulty1">
                  <span className={styles.difficultyDescription}>
                    Zeer makkelijk
                  </span>
                </label>
              </div>
            </div>
            <div className={styles.difficultyOption}>
              <input
                type="radio"
                id="difficulty2"
                name="difficulty"
                value="2"
                className={styles.difficultyDot}
                checked={difficulty === "2"}
                onChange={handleDifficultyChange}
              />
              <label htmlFor="difficulty2">
                <span className={styles.difficultyDescription}>
                  Redelijk makkelijk
                </span>
              </label>
            </div>
            <div className={styles.difficultyOption}>
              <input
                type="radio"
                id="difficulty3"
                name="difficulty"
                value="3"
                className={styles.difficultyDot}
                checked={difficulty === "3"}
                onChange={handleDifficultyChange}
              />
              <label htmlFor="difficulty3">
                <span className={styles.difficultyDescription}>
                  Gemiddeld moeilijk
                </span>
              </label>
            </div>
            <div className={styles.difficultyOption}>
              <input
                type="radio"
                id="difficulty4"
                name="difficulty"
                value="4"
                className={styles.difficultyDot}
                checked={difficulty === "4"}
                onChange={handleDifficultyChange}
              />
              <label htmlFor="difficulty4">
                <span className={styles.difficultyDescription}>
                  Behoorlijk moeilijk
                </span>
              </label>
            </div>
            <div className={styles.difficultyOption}>
              <input
                type="radio"
                id="difficulty5"
                name="difficulty"
                value="5"
                className={styles.difficultyDot}
                checked={difficulty === "5"}
                onChange={handleDifficultyChange}
              />
              <label htmlFor="difficulty5">
                <span className={styles.difficultyDescription}>
                  Zeer moeilijk
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.continueButtonContainer}>
        <button className={styles.continueButton} onClick={handleNextClick}>
          Volgende
        </button>
      </div>
    </div>
  );
};

export default CompleteScreen;
