import React, { useEffect, useRef, useState } from "react";
import css from "../../css/FriendshipPage/EarlyYearsSection.module.css";
import broom1 from "../../assets/images/FriendshipPage/CommonHobbiesSection/4i5SZfNcwiI.jpg";
import broom2 from "../../assets/images/FriendshipPage/CommonHobbiesSection/BI3DgzSmp8E.jpg";
import broom3 from "../../assets/images/FriendshipPage/CommonHobbiesSection/xGf0YL0J2RY.jpg";

import Modal from "../layout/Modal.jsx";

function CommonHobbiesSection() {
  const photos = [
    { src: broom1, caption: "Погляд, сповнений пригод" },
    { src: broom2, caption: "Наші перші витівки — турнік + віник = музика :)" },
    { src: broom3, caption: "Погляд, сповнений пригод" },
  ];
  const loopedPhotos = [...photos, ...photos];
  const [activeImage, setActiveImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Стан для видимості модального вікна
  const scrollRef = useRef(null);

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
      <h2 className={css.sectionTitle}> Перукарочка назавжди!</h2>
      <div className={css.contentWrapper}>
        <div className={css.textContainer}>
          <p>
            Ми в школі, здається, перепробували всі можливі гуртки, але головним
            гуртком був - перукарочка. Скільки там було ентузіазму, скільки
            сміху та іноді – відверто дивних зачісок, які ми з гордістю
            демонстрували на сцені! Наші виступи були завжди сповнені
            непередбачуваних сюрпризів.
          </p>
          <p>
            А після кожної нашої перукарської феєрії ми мали незмінний ритуал –
            забігти у 'Віват' за пачкою чіпсів та енергетиком, обговорюючи наші
            'шедеври' та сміючись до сліз.
          </p>
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

      {/* Рендеримо компонент Modal */}
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
export default CommonHobbiesSection;
