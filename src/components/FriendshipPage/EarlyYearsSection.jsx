import React, { useEffect, useRef, useState } from "react";
import css from "../../css/FriendshipPage/EarlyYearsSection.module.css";
import broom1 from "../../assets/images/FriendshipPage/EarlyYearsSection/1.jpg";
import broom2 from "../../assets/images/FriendshipPage/EarlyYearsSection/2.jpg";
import broom3 from "../../assets/images/FriendshipPage/EarlyYearsSection/3.jpg";
import broom4 from "../../assets/images/FriendshipPage/EarlyYearsSection/4.jpg";
import broom5 from "../../assets/images/FriendshipPage/EarlyYearsSection/5.jpg";
import broom6 from "../../assets/images/FriendshipPage/EarlyYearsSection/6.jpg";
import Modal from "../layout/Modal.jsx";

function EarlyYearsSection() {
  const photos = [
    { src: broom4 },
    { src: broom1 },
    { src: broom2 },
    { src: broom3 },
    { src: broom5 },
    { src: broom6 },
  ];

  const loopedPhotos = [...photos, ...photos]; // ✨ Подвоєний масив для безкінечної прокрутки
  const scrollRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo) => {
    setActiveImage(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let speed = 0.5;
    let animationFrameId;

    const autoScroll = () => {
      scrollContainer.scrollLeft += speed;

      const halfway = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= halfway) {
        // Без анімації — щоб не було видно
        scrollContainer.scrollLeft -= halfway;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className={css.earlyYearsSection}>
      <h2 className={css.sectionTitle}>Перші кроки разом</h2>
      <div className={css.contentWrapper}>
        <div className={css.textContainer}>
          <p>
            Пам'ятаю той вересневий ранок у 5-му класі. Нові обличчя,
            хвилювання... і дівчинка, про яку я знала лише одне: вона – сестра
            Насті Трофімової...
          </p>
          <p>Пам'ятаєш ті перші шкільні фото?</p>
          <p>Наша перша фотосесія у школі, в тюльпанах...🌷</p>
        </div>

        <div className={css.galleryContainer}>
          <div className={css.galleryScroll} ref={scrollRef}>
            {loopedPhotos.map((photo, i) => (
              <div
                key={i}
                className={css.imageCard}
                onClick={() => openModal(photo)}
              >
                <img src={photo.src} alt={photo.caption} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {activeImage && (
          <>
            <img src={activeImage.src} alt="Повне зображення" />
            <p>{activeImage.caption}</p>
          </>
        )}
      </Modal>
    </section>
  );
}

export default EarlyYearsSection;
