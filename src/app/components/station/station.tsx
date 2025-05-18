"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./station.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface StationtkProps {
  stations: {
    naam: string;
    slug: string;
  }[];
  naam1: string;
  slug1: string;
  naam2: string;
  slug2: string;
  naam3: string;
  slug3: string;
  naam4: string;
  slug4: string;
  naam5: string;
  slug5: string;
}

export default function Station({
  stations,
  naam1,
  slug1,
  naam2,
  slug2,
  naam3,
  slug3,
  naam4,
  slug4,
  naam5,
  slug5,
}: StationtkProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const enNames = [naam1, naam2, naam3, naam4, naam5];
  const enSlugs = [slug1, slug2, slug3, slug4, slug5];

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

  const getIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return <EyeIcon />;
      case 1:
        return <EarIcon />;
      case 2:
        return <BrainIcon />;
      case 3:
        return <HandIcon />;
      case 4:
        return <BookIcon />;
      default:
        return <BookIcon />;
    }
  };

  return (
    <div className={styles.container}>
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
            const stationIndex = num - 1;
            const stationSlug = stations[stationIndex].slug;
            const dynamicSlug =
              locale === "nl" ? stationSlug : enSlugs[stationIndex];
            const isActive = pathname.includes(dynamicSlug);

            return (
              <Link
                key={num}
                href={`/${basePath}/${dynamicSlug}`}
                className={styles.stationLink}
              >
                <div
                  className={
                    isActive
                      ? `${styles.station} ${styles.stationActive}`
                      : styles.station
                  }
                >
                  <div className={styles.stationTitel}>
                    <div className={styles.iconWrapper}>
                      {getIconByIndex(stationIndex)}
                    </div>
                    <h2 className={styles.naam}>
                      {locale === "nl"
                        ? stations[stationIndex].naam
                        : enNames[stationIndex]}
                    </h2>
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

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
    />
  </svg>
);

const EarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </g>
  </svg>
);

const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" />
    </g>
  </svg>
);

const HandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 4V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0 4.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </g>
  </svg>
);

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 7v14m4-9h2m-2-4h2M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3zm3-6h2M6 8h2"
    />
  </svg>
);
