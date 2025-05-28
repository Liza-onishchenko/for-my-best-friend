import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import css from "../../css/FriendshipPage/SchoolTrialsSection.module.css"; // Створіть цей файл для стилів
import broom1 from "../../assets/images/FriendshipPage/SchoolTrialsSection/1.jpg";
import broom2 from "../../assets/images/FriendshipPage/SchoolTrialsSection/2.jpg";
import broom3 from "../../assets/images/FriendshipPage/SchoolTrialsSection/3.jpg";
import broom4 from "../../assets/images/FriendshipPage/SchoolTrialsSection/4.jpg";
import broom5 from "../../assets/images/FriendshipPage/SchoolTrialsSection/5.jpg";
import broom6 from "../../assets/images/FriendshipPage/SchoolTrialsSection/6.jpg";
import Modal from "../layout/Modal.jsx";

const SchoolTrialsSection = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut", delayChildren: 0.3 },
    },
    viewport: { once: true },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const tapeIconVariants = {
    hover: { rotate: 90, scale: 1.1, transition: { duration: 0.3 } },
  };
  const photos = [
    { src: broom4 },
    { src: broom1 },
    { src: broom2 },
    { src: broom3 },
    { src: broom5 },
    { src: broom6 },
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

  const scrollManually = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const amount = container.offsetWidth * 0.8;
      container.scrollLeft += direction * amount;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let speed = 1;
    let rafId;

    const scroll = () => {
      scrollContainer.scrollLeft += speed;

      const scrollWidth = scrollContainer.scrollWidth / 2;

      // Якщо дійшли до кінця першого блоку (до середини)
      if (scrollContainer.scrollLeft >= scrollWidth) {
        // Миттєво перемотуємо назад на початок
        scrollContainer.scrollLeft -= scrollWidth;
      }

      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className={css.schoolTrialsSection}>
      <motion.h2
        className={css.sectionTitle}
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        Наш 16-й кабінет, шкільні події, випускний
      </motion.h2>

      <motion.div
        className={css.contentWrapper}
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className={css.textBlock} variants={textVariants}>
          <p>
            1️⃣6️⃣ Він був не просто класом — це була наша фортеця.🏰 Саме тут ми
            писали наше ДПА з метровими шпаргалками.📝
          </p>
          <p>
            А пам’ятаєш, як хлопці запускали пітарди прямо в класі?🧨 І
            фотосесії в «пристройці» — легендарні! І, звісно, ті відоси, які ми
            знімали… компромат страшної сили 📹😄 Ще чергування в їдальні… не
            найгірше, правда ж? Наша любима Наталья Олексіївна, яка змушувала
            знімати лак цвяхом прямо на уроці?💅 А походи в туалет усім гуртом?
            Саме там, до речі, я дізналася про той самий твій секрет… якщо ти ще
            пам’ятаєш 😉
          </p>
        </motion.div>
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

        {/* Рендеримо компонент Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {activeImage && (
            <>
              <img src={activeImage.src} alt="Повне зображення" />
              <p>{activeImage.caption}</p>
            </>
          )}
        </Modal>
      </motion.div>
    </section>
  );
};

export default SchoolTrialsSection;
