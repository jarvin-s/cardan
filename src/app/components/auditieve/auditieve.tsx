"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./auditieve.module.css";
import {
  MaterialSymbolsPlayArrowRounded,
  LineMdPlayFilledToPauseTransition,
} from "./icons";

interface AudioitieveProps {
  title: string;
  subtext: string;
  blocktitle1: string;
  subtext1: string;
  soort1: string;
  omschrijving1: string;
  soort2: string;
  omschrijving2: string;
  soort3: string;
  omschrijving3: string;
  soort4: string;
  omschrijving4: string;
  naarluisteren: string;
  blocktitle2: string;
  subtext2: string;
  gehoord: string;
  blocktitle3: string;
  subtext3: string;
  antwoord1: string;
  antwoord2: string;
  antwoord3: string;
  antwoord4: string;
  antwoord5: string;
  antwoord6: string;
  blocktitle4: string;
  headtext4: string;
  subtext4: string;
  opnieuw: string;
  blocktitle5: string;
  headtext5: string;
  subtext5: string;
  ander: string;
  naarcognitief: string;
  nietnormaal1: string;
}

const Auditieve = ({
  title,
  subtext,
  blocktitle1,
  subtext1,
  soort1,
  omschrijving1,
  soort2,
  omschrijving2,
  soort3,
  omschrijving3,
  soort4,
  omschrijving4,
  naarluisteren,
  blocktitle2,
  subtext2,
  gehoord,
  blocktitle3,
  subtext3,
  antwoord1,
  antwoord2,
  antwoord3,
  antwoord4,
  antwoord5,
  antwoord6,
  blocktitle4,
  headtext4,
  subtext4,
  opnieuw,
  blocktitle5,
  headtext5,
  subtext5,
  ander,
  naarcognitief,
  nietnormaal1,
}: AudioitieveProps) => {
  const [step, setStep] = useState<
    "keuze" | "luisteren" | "vraag" | "feedback"
  >("keuze");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<string>("ernstig.mp3"); // default to first audio
  const [hasListenedOnce, setHasListenedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioHasPlayed, setAudioHasPlayed] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      // console.log("progress:", percent);
      setProgress(percent);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
      setAudioHasPlayed(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleAnswer = (answer: string) => {
    const correct = answer === "spoor3";
    setIsCorrect(correct);
    setStep("feedback");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.hoofdtitle}>{title}</h1>
      <p className={styles.hoofdsubtext}>{subtext}</p>

      <div className={styles.block}>
        {step === "keuze" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "backInOut" }}
          >
            <h2 className={styles.blocktitle}>{blocktitle1}</h2>
            <p className={styles.subtext}>{subtext1}</p>

            <div className={styles.keuzemenu}>
              {[
                {
                  soort: soort1,
                  omschrijving: omschrijving1,
                  bestand: "ernstig.mp3",
                },
                {
                  soort: soort2,
                  omschrijving: omschrijving2,
                  bestand: "matig.mp3",
                },
                {
                  soort: soort3,
                  omschrijving: omschrijving3,
                  bestand: "licht.mp3",
                },
                {
                  soort: soort4,
                  omschrijving: omschrijving4,
                  bestand: "normaal.mp3",
                },
              ].map((item, index) => {
                const isNormaal = item.bestand === "normaal.mp3";
                const isDisabled = isNormaal && !hasListenedOnce;
                const isSelected = selectedAudio === item.bestand;

                return (
                  <div
                    key={index}
                    className={`${styles.item} ${
                      isSelected ? styles.selected : ""
                    } ${isDisabled ? styles.disabled : ""}`}
                    onClick={() => {
                      if (!isDisabled) setSelectedAudio(item.bestand);
                    }}
                  >
                    <div className={styles.tekstblockje}>
                      <h3 className={styles.soortbeperking}>{item.soort}</h3>
                      <p className={styles.omschrijving}>{item.omschrijving}</p>
                      {isDisabled && (
                        <span className={styles.locked}>{nietnormaal1}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className={styles.nextButton}
              onClick={() => setStep("luisteren")}
              disabled={!selectedAudio} // Only enabled if an audio is selected
            >
              {naarluisteren}
            </button>
          </motion.div>
        )}

        {step === "luisteren" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "backInOut" }}
          >
            <h1 className={styles.blocktitle}>{blocktitle2}</h1>
            <p className={styles.subtext}>{subtext2}</p>

            <div className={styles.audioplayer}>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `50%` }} />
              </div>
              <button className={styles.playButton} onClick={togglePlay}>
                {isPlaying ? (
                  <LineMdPlayFilledToPauseTransition />
                ) : (
                  <MaterialSymbolsPlayArrowRounded />
                )}
              </button>
            </div>

            <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
              <source src={`/audio/${selectedAudio}`} type="audio/mpeg" />
              Je browser ondersteunt dit audio-element niet.
            </audio>

            <button
              className={styles.nextButton}
              onClick={() => {
                setHasListenedOnce(true);
                setStep("vraag");
              }}
              disabled={!audioHasPlayed}
            >
              {gehoord}
            </button>
          </motion.div>
        )}

        {step === "vraag" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "backInOut" }}
          >
            <h1 className={styles.blocktitle}>{blocktitle3}</h1>
            <p className={styles.subtext}>{subtext3}</p>
            <div className={styles.keuzesgrid}>
              <button onClick={() => handleAnswer("spoor1")}>
                {antwoord1}
              </button>
              <button onClick={() => handleAnswer("spoor2")}>
                {antwoord2}
              </button>
              <button onClick={() => handleAnswer("spoor3")}>
                {antwoord3}
              </button>
              <button onClick={() => handleAnswer("spoor4")}>
                {antwoord4}
              </button>
              <button onClick={() => handleAnswer("spoor5")}>
                {antwoord5}
              </button>
              <button onClick={() => handleAnswer("spoor6")}>
                {antwoord6}
              </button>
            </div>
          </motion.div>
        )}

        {step === "feedback" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "backInOut" }}
          >
            {isCorrect ? (
              <>
                <h1 className={styles.blocktitle}>{blocktitle5}</h1>
                <h5 className={styles.headtext}>{headtext5}</h5>
                <p className={styles.subtext}>{subtext5}</p>
                <div className={styles.buttons}>
                  <button
                    className={styles.nextButton}
                    onClick={() => setStep("keuze")}
                  >
                    {ander}
                  </button>
                  <button
                    className={styles.nextButton}
                    onClick={() =>
                      (window.location.href =
                        "/ervaringsplein/cognitieve-beperking")
                    }
                  >
                    {naarcognitief}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className={styles.blocktitle}>{blocktitle4}</h1>
                <h5 className={styles.headtext}>{headtext4}</h5>
                <p className={styles.subtext}>{subtext4}</p>
                <button
                  className={styles.nextButton}
                  onClick={() => setStep("keuze")}
                >
                  {opnieuw}
                </button>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Auditieve;
