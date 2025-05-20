import React, { useEffect } from "react";
import styles from "./complete-screen.module.css";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

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
  const locale = useLocale();

  useEffect(() => {
    const timers = window.setInterval(() => {}, 0);
    for (let i = 0; i < timers; i++) {
      window.clearInterval(i);
    }
  }, []);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.25, ease: "backInOut" }}
    >
      <div className={styles.completedContainer}>
        <div className={styles.completedText}>
          <h1>
            {locale === "nl"
              ? "ADHD simulatie compleet!"
              : "ADHD simulation complete!"}
          </h1>
          <p className={styles.completedTime}>
            {locale === "nl" ? "Je hebt " : "You have "}
            <span className={styles.formatTimeSpan}>
              {formatTime(savedTime || elapsedTime)}
            </span>{" "}
            {locale === "nl" ? "besteed aan deze taak." : "spent on this task."}
          </p>
          <p className={styles.completedTime}>
            {elapsedTime < 30
              ? locale === "nl"
                ? "Je hebt deze taak in een kort tijdsbestek afgerond."
                : "You completed this task in a short time."
              : locale === "nl"
              ? "Je hebt deze taak in een redelijk tijdsbestek afgerond."
              : "You completed this task in a reasonable time."}
          </p>
        </div>
        <div className={styles.formGroup}>
          <h1>
            {locale === "nl"
              ? "Hoe moeilijk vond je het om de e-mail te schrijven?"
              : "How difficult was it to write the email?"}
          </h1>
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
                      {locale === "nl" ? "Zeer makkelijk" : "Very easy"}
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
                    {locale === "nl" ? "Redelijk makkelijk" : "Fairly easy"}
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
                    {locale === "nl"
                      ? "Gemiddeld moeilijk"
                      : "Moderately difficult"}
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
                    {locale === "nl"
                      ? "Behoorlijk moeilijk"
                      : "Quite difficult"}
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
                    {locale === "nl" ? "Zeer moeilijk" : "Very difficult"}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.continueButtonContainer}>
          <button className={styles.continueButton} onClick={handleNextClick}>
            {locale === "nl" ? "Volgende" : "Next"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CompleteScreen;
