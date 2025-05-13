import React, { useRef, useEffect, useState } from "react";
import css from "../../css/HoverSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HoverSlider = ({ images, onImageClick }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const startScroll = () => {
    if (!scrollRef.current || images.length <= 1) return;
    const container = scrollRef.current;

    intervalRef.current = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollLeft = 0;
        setCurrentSlide(0);
      } else {
        container.scrollLeft += 0.5;
        const newSlide = Math.round(
          container.scrollLeft / container.clientWidth
        );
        setCurrentSlide(newSlide);
      }
    }, 30);
  };

  const stopScroll = () => {
    clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const next = Math.min(currentSlide + 1, images.length - 1);
    container.scrollLeft = container.clientWidth * next;
    setCurrentSlide(next);
  };

  const prevSlide = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const prev = Math.max(currentSlide - 1, 0);
    container.scrollLeft = container.clientWidth * prev;
    setCurrentSlide(prev);
  };

  // 🆕 Запускаємо автопрокрутку, коли компонент потрапляє у viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startScroll();
        } else {
          stopScroll();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      stopScroll();
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [images]);

  return (
    <div className={css.hoverSliderContainer} ref={containerRef}>
      <div className={css.hoverSlider}>
        <div className={css.sliderTrack} ref={scrollRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Зображення ${index + 1}`}
              className={css.sliderImage}
              onClick={() => onImageClick && onImageClick(src)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className={css.controls}>
          <button className={css.prevButton} onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <div className={css.dots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? css.activeDot : css.dot}
              />
            ))}
          </div>
          <button className={css.nextButton} onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default HoverSlider;
