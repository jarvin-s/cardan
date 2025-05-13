"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./station.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface StationtkProps {
  title: string;
  stations: {
    naam: string;
    slug: string;
  }[];
}

export default function Stationtk({ title, stations }: StationtkProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const activeIndex = stations.findIndex((station) =>
      pathname.includes(station.slug)
    );
    if (activeIndex !== -1) {
      setCurrentIndex(activeIndex);

      if (sliderRef.current && isMobile) {
        const stationWidth = sliderRef.current.scrollWidth / stations.length;
        sliderRef.current.scrollTo({
          left: activeIndex * stationWidth,
          behavior: "smooth",
        });
      }
    }
  }, [pathname, stations, isMobile]);

  const basePath = locale === "nl" ? "ervaringsplein" : "experience-square";

  const navigateSlider = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;

    const newIndex =
      direction === "next"
        ? Math.min(currentIndex + 1, stations.length - 1)
        : Math.max(currentIndex - 1, 0);

    setCurrentIndex(newIndex);

    const stationWidth = sliderRef.current.scrollWidth / stations.length;
    sliderRef.current.scrollTo({
      left: newIndex * stationWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titel}>{title}</h1>

      <div className={styles.sliderContainer}>
        {isMobile && currentIndex > 0 && (
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={() => navigateSlider("prev")}
            aria-label="Previous station"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              />
            </svg>
          </button>
        )}

        <div className={styles.navitems} ref={sliderRef}>
          {[1, 2, 3, 4, 5].map((num) => {
            const stationSlug = stations[num - 1].slug;
            const isActive = pathname.includes(stationSlug);
            //! ADD ICONS TO STATIONS NAV
            return (
              <Link
                key={num}
                href={`/${basePath}/${stationSlug}`}
                className={styles.stationLink}
              >
                <div
                  className={
                    isActive
                      ? `${styles.station} ${styles.stationActive}`
                      : styles.station
                  }
                >
                  <div
                    className={isActive ? styles.balkjeactief : styles.balkje}
                  ></div>
                  <div className={styles.stationTitel}>
                    <h1 className={styles.nummer}>{num}</h1>
                    <h2 className={styles.naam}>{stations[num - 1].naam}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {isMobile && currentIndex < stations.length - 1 && (
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={() => navigateSlider("next")}
            aria-label="Next station"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
              />
            </svg>
          </button>
        )}
      </div>

      {isMobile && (
        <div className={styles.pagination}>
          {stations.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
