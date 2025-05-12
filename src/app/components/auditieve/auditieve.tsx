"use client";

import React, { useState } from "react";
import styles from "./auditieve.module.css";

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
}: AudioitieveProps) => {
  const [step, setStep] = useState<'keuze' | 'luisteren' | 'vraag' | 'feedback'>('keuze');
  // const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // const handleLevelSelect = (level: string) => {
  //   setSelectedLevel(level);
  //   setStep('luisteren');
  // };

  const handleAnswer = (answer: string) => {
    const correct = answer === 'spoor3';
    setIsCorrect(correct);
    setStep('feedback');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.hoofdtitle}>{title}</h1>
      <p className={styles.hoofdsubtext}>{subtext}</p>

      <div className={styles.block}>
        {step === 'keuze' && (
          <>
            <h2 className={styles.blocktitle}>{blocktitle1}</h2>
            <p className={styles.subtext}>{subtext1}</p>
            <div className={styles.keuzemenu}>
              {[{ soort: soort1, omschrijving: omschrijving1 },
              { soort: soort2, omschrijving: omschrijving2 },
              { soort: soort3, omschrijving: omschrijving3 },
              { soort: soort4, omschrijving: omschrijving4 }].map((item, index) => (
                <div key={index} className={styles.item}>
                  {/* <button onClick={() => handleLevelSelect(item.soort)}>{item.soort}</button> */}
                  <div className={styles.tekstblockje}>
                    <h3 className={styles.soortbeperking}>{item.soort}</h3>
                    <p className={styles.omschrijving}>{item.omschrijving}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.nextButton} onClick={() => setStep('luisteren')}>
              {naarluisteren}
            </button>
          </>
        )}

        {step === 'luisteren' && (
          <div>
            <div>
              <h1 className={styles.blocktitle}>{blocktitle2}</h1>
              <p className={styles.subtext}>{subtext2}</p>
            </div>
            {/* video/audio hier */}
            <button
              className={styles.nextButton}
              onClick={() => setStep('vraag')}>{gehoord}
            </button>
          </div>
        )}

        {step === 'vraag' && (
          <div>
            <div>
              <h1 className={styles.blocktitle}>{blocktitle3}</h1>
              <p className={styles.subtext}>{subtext3}</p>
            </div>
            <div className={styles.keuzesgrid}>
              <button onClick={() => handleAnswer('spoor1')}>{antwoord1}</button>
              <button onClick={() => handleAnswer('spoor2')}>{antwoord2}</button>
              <button onClick={() => handleAnswer('spoor3')}>{antwoord3}</button>
              <button onClick={() => handleAnswer('spoor4')}>{antwoord4}</button>
              <button onClick={() => handleAnswer('spoor5')}>{antwoord5}</button>
              <button onClick={() => handleAnswer('spoor6')}>{antwoord6}</button>
            </div>
          </div>
        )}

        {step === 'feedback' && (
          <div>
            {isCorrect ? (
              <>
                <div>
                  <h1 className={styles.blocktitle}>{blocktitle5}</h1>
                  <h5 className={styles.headtext}>{headtext5}</h5>
                  <p className={styles.subtext}>{subtext5}</p>
                </div>
                <div className={styles.buttons}>
                  <button
                    className={styles.nextButton}
                    onClick={() => setStep('keuze')}>{ander}
                  </button>

                  <button
                    className={styles.nextButton}
                    onClick={() =>
                      (window.location.href = "/ervaringsplein/cognitieve-beperking")
                    }
                  >
                    {naarcognitief}
                  </button>
                </div>




              </>

            ) : (
              <>
                <div>
                  <h1 className={styles.blocktitle}>{blocktitle4}</h1>
                  <h5 className={styles.headtext}>{headtext4}</h5>
                  <p className={styles.subtext}>{subtext4}</p>
                </div>
                <button className={styles.nextButton}
                  onClick={() => setStep('keuze')}
                >
                  {opnieuw}
                </button>
              </>
            )}


          </div>
        )}
      </div>
    </div >
  );
};

export default Auditieve;
