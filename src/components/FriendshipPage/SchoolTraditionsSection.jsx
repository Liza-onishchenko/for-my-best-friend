import React, { useRef, useState, useEffect } from "react";
import css from "../../css/FriendshipPage/SchoolTraditionsSection.module.css";
import img1 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/1.jpg";
import img2 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/2.jpg";
import img3 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/3.jpg";
import img4 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/4.jpg";

import img9 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/9.jpg";
import img10 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/15.jpg";
import img11 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/11.jpg";
import img12 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/12.jpg";
import img13 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/13.jpg";
import img14 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/14.jpg";

import img5 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/5.jpg";
import img6 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/6.jpg";
import img7 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/7.jpg";
import img8 from "../../assets/images/FriendshipPage/SchoolTraditionsSection/8.jpg";

const cardsData = [
  {
    text: "Пам'ятаєш, якими особливими були наші шкільні подарунки? Ми завжди знаходили спосіб зробити щось символічне та від душі. Особливо пам'ятаю той плакат у стилі супергероїв, який ми намалювали тобі!",
    images: [img1, img2, img3, img4],
  },
  {
    text: "А наші новорічні мюзикли, осінній бал! Це були справжній треш— репетиції з Тонькою, костюми та море сміху та незадоволення!",
    images: [img5, img6, img7, img8],
  },
  {
    text: "Пам’ятаєш наші перші досліди дорослого життя? Спочатку — енергетик Black Energy, а потім — щось серйозніше",
    images: [img9, img10, img11, img12, img13, img14],
  },
];

const SchoolTraditionsSection = () => {
  const scrollRefs = useRef([]);

  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const animationIds = [];

    scrollRefs.current.forEach((scrollContainer) => {
      if (!scrollContainer) return;

      // Встановлюємо scroll-behavior: auto, щоб уникнути анімації при reset
      scrollContainer.style.scrollBehavior = "auto";

      const speed = 0.8;

      const autoScroll = () => {
        scrollContainer.scrollLeft += speed;

        // Коли дійшли до середини (кінець першого набору), скидаємо скролл
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }

        const id = requestAnimationFrame(autoScroll);
        animationIds.push(id);
      };

      const id = requestAnimationFrame(autoScroll);
      animationIds.push(id);
    });

    return () => animationIds.forEach((id) => cancelAnimationFrame(id));
  }, []);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className={css.schoolTraditionsSection}>
      <h2 className={css.sectionTitle}>
        Наші шкільні традиції — теплі моменти, які завжди з нами
      </h2>
      <div className={css.cardsWrapper}>
        {cardsData.map((card, index) => (
          <div className={css.card} key={index}>
            <p className={css.cardText}>{card.text}</p>
            <div className={css.galleryContainer}>
              <div
                className={css.galleryScroll}
                ref={(el) => (scrollRefs.current[index] = el)}
              >
                {[...card.images, ...card.images].map((img, i) => (
                  <div
                    key={i}
                    className={css.imageCard}
                    onClick={() => openModal(img)}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && modalImage && (
        <div className={css.modal} onClick={closeModal}>
          <img
            src={modalImage}
            alt="Повне зображення"
            className={css.modalImage}
          />
        </div>
      )}
    </section>
  );
};

export default SchoolTraditionsSection;
