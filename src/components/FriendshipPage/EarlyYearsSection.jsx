import React, { useEffect, useRef, useState } from "react";
import css from "../../css/EarlyYearsSection.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import broom1 from "../../../public/images/FriendshipPage/EarlyYearsSection/1.jpg";
import broom2 from "../../../public/images/FriendshipPage/EarlyYearsSection/2.jpg";
import broom3 from "../../../public/images/FriendshipPage/EarlyYearsSection/3.jpg";
import broom4 from "../../../public/images/FriendshipPage/EarlyYearsSection/4.jpg";
import broom5 from "../../../public/images/FriendshipPage/EarlyYearsSection/5.jpg";

const photos = [
  { src: broom1, caption: "Наші перші витівки — турнік + віник = музика :)" },
  { src: broom2, caption: "Погляд, сповнений пригод" },
  { src: broom3, caption: "Наша дружба починалася зі сміху" },
  { src: broom4, caption: "Погляд, сповнений пригод" },
  { src: broom5, caption: "Наша дружба починалася зі сміху" },
];

function EarlyYearsSection() {
  const [activeImage, setActiveImage] = useState(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const speedRef = useRef(0.5); // базова швидкість

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      scrollContainer.scrollLeft += speedRef.current;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleSpeed = (direction) => {
    if (direction === "left") speedRef.current = -7;
    if (direction === "right") speedRef.current = 7;
  };

  const resetSpeed = () => {
    speedRef.current = 0.5;
  };

  return (
    <section className={css.earlyYearsSection}>
      <h2 className={css.sectionTitle}>Перші кроки разом (5–6 класи)</h2>

      <div className={css.textContainer}>
        <p>
          Пам'ятаю той вересневий ранок у 5-му класі. Нові обличчя,
          хвилювання... і дівчинка, про яку я знала лише одне: вона – сестра
          Насті Трофімової...
        </p>
        <p>
          Пам'ятаєш ті перші шкільні фото? Маленькі, беззахисні, але вже з
          іскринками в очах...
        </p>
        <p>Наша перша фотосесія у школі, в тюльпанах...назавжди</p>
      </div>

      <div className={css.galleryWrapper}>
        <div
          className={css.arrowLeft}
          onMouseEnter={() => handleSpeed("left")}
          onMouseLeave={resetSpeed}
        >
          <FaChevronLeft />
        </div>

        <div className={css.galleryScroll} ref={scrollRef}>
          {[...photos, ...photos].map((photo, i) => (
            <div
              key={i}
              className={css.imageCard}
              onClick={() => setActiveImage(photo)}
            >
              <img src={photo.src} alt={photo.caption} />
              <div className={css.caption}>{photo.caption}</div>
            </div>
          ))}
        </div>

        <div
          className={css.arrowRight}
          onMouseEnter={() => handleSpeed("right")}
          onMouseLeave={resetSpeed}
        >
          <FaChevronRight />
        </div>
      </div>

      {activeImage && (
        <div className={css.lightbox} onClick={() => setActiveImage(null)}>
          <img src={activeImage.src} alt="Full size" />
          <p>{activeImage.caption}</p>
        </div>
      )}
    </section>
  );
}

export default EarlyYearsSection;
