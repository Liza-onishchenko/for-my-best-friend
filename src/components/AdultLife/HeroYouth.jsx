import React, { useRef, useEffect } from "react";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import css from "../../css/AdultLife/HeroYouth.module.css";

import img1 from "../../assets/images/AdultLife/1.jpg";
import img2 from "../../assets/images/AdultLife/2.jpg";
import img4 from "../../assets/images/AdultLife/4.jpg";
import img5 from "../../assets/images/AdultLife/5.jpg";
import img7 from "../../assets/images/AdultLife/7.jpg";
import img8 from "../../assets/images/AdultLife/8.jpg";
import img9 from "../../assets/images/AdultLife/9.jpg";
import img10 from "../../assets/images/AdultLife/10.jpg";
import img12 from "../../assets/images/AdultLife/12.jpg";
import img13 from "../../assets/images/AdultLife/13.JPEG";
import img14 from "../../assets/images/AdultLife/14.JPG";
import img15 from "../../assets/images/AdultLife/15.JPG";
import img16 from "../../assets/images/AdultLife/16.JPG";
import img17 from "../../assets/images/AdultLife/17.jpg";
import img18 from "../../assets/images/AdultLife/18.JPG";
import img19 from "../../assets/images/AdultLife/19.jpg";
import img22 from "../../assets/images/AdultLife/22.jpg";
import img23 from "../../assets/images/AdultLife/23.jpg";
import img24 from "../../assets/images/AdultLife/24.jpg";
const allImages = [
  // Збільшена кількість зображень для кращого ефекту безперервності
  img1,
  img2,
  img4,
  img5,
  img7,
  img8,
  img9,
  img10,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img22,
  img23,
  img24,
  // Дублюємо зображення, щоб анімація була безперервною без видимого стрибка
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img22,
  img23,
  img24,
  img1,
  img2,
  img4,
  img5,
  img7,
  img8,
  img9,
  img10,
  img12,
];

const HeroYouth = () => {
  const scrollContainerRef = useRef([]); // Використовуємо масив рефів для кожного ряду

  // Функція для показу зображення у basicLightbox
  const openLightboxImage = (imageSrc, altText = "") => {
    const lightboxContent = `
          <div class="${css.coversFullImageWrapper}">
              <img
                  src="${imageSrc}"
                  alt="${altText}"
                  class="${css.coversFullImage}"
              />
              <button class="${css.coversCloseButton}"></button>
          </div>
      `;

    const instance = basicLightbox.create(lightboxContent, {
      onShow: (instance) => {
        const closeOnEscape = (e) => {
          if (e.code === "Escape") {
            instance.close();
          }
        };
        window.addEventListener("keydown", closeOnEscape);

        const closeButton = instance
          .element()
          .querySelector(`.${css.coversCloseButton}`);
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            instance.close();
          });
        }
        instance._closeOnEscapeHandler = closeOnEscape;
      },
      onClose: (instance) => {
        if (instance._closeOnEscapeHandler) {
          window.removeEventListener("keydown", instance._closeOnEscapeHandler);
        }
      },
    });

    instance.show();
  };

  // Компонент, що рендерить один рядок зображень
  const ImageRow = ({ images, directionClass, index }) => (
    <div
      className={`${css.imageRow} ${directionClass}`}
      ref={(el) => (scrollContainerRef.current[index] = el)}
    >
      {images.map((imgSrc, i) => (
        <div
          key={i}
          className={css.imageCard}
          onClick={() => openLightboxImage(imgSrc, `Image ${i + 1}`)}
        >
          <img src={imgSrc} alt={`Image ${i + 1}`} />
        </div>
      ))}
    </div>
  );

  return (
    <section className={css.heroYouthSection}>
      {/* Можна додати заголовок, якщо він потрібен */}
      {/* <h2 className={css.sectionTitle}>Деякі моменти</h2> */}

      <div className={css.galleryGrid}>
        {/* Рядок 1: Рух вправо */}
        <ImageRow images={allImages} directionClass={css.rowRight} index={0} />
        {/* Рядок 2: Рух вліво */}
        <ImageRow images={allImages} directionClass={css.rowLeft} index={1} />
        {/* Рядок 3: Рух вправо */}
        <ImageRow images={allImages} directionClass={css.rowRight} index={2} />
        {/* Рядок 4: Рух вліво */}
        <ImageRow images={allImages} directionClass={css.rowLeft} index={3} />
      </div>
    </section>
  );
};

export default HeroYouth;
