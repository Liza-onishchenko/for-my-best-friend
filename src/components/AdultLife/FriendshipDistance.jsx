import React, { useEffect, useRef } from "react";
import css from "../../css/AdultLife/FriendshipDistance.module.css";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import img4_PNG from "../../assets/images/FriendshipDistance/4.jpg"; // Змінено на img_4_PNG для уникнення конфліктів та відображення розширення
import img1_jpg from "../../assets/images/FriendshipDistance/1.jpg";
import img2_jpg from "../../assets/images/FriendshipDistance/2.jpg";
import img3_PNG from "../../assets/images/FriendshipDistance/3.jpg";
import img5_PNG from "../../assets/images/FriendshipDistance/5.jpg";
import img6_PNG from "../../assets/images/FriendshipDistance/6.jpg";
import img7_jpg from "../../assets/images/FriendshipDistance/7.jpg";

function FriendshipDistance() {
  const photos = [
    { src: img4_PNG }, // Використовуємо імпортовані змінні
    { src: img1_jpg },
    { src: img2_jpg },
    { src: img3_PNG },
    { src: img5_PNG },
    { src: img6_PNG },
    { src: img7_jpg },
  ];
  const loopedPhotos = [...photos, ...photos];
  const scrollRef = useRef(null);

  const openModal = (photo) => {
    const content = `<img src="${photo.src}" alt="Зображення" style="max-width: 90vw; max-height: 90vh;" />`;

    basicLightbox
      .create(
        `
        <div style="text-align: center;">
          ${content}
          <p style="margin-top: 10px; font-size: 18px; color: #fff;">${
            photo.caption || ""
          }</p>
        </div>
      `
      )
      .show();
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
        scrollContainer.scrollLeft -= halfway;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className={css.friendshipDistanceSection}>
      <h2 className={css.sectionTitle}> Відстань та Перевірка на Міцність</h2>
      <div className={css.contentWrapper}>
        <div className={css.textContainer}>
          <p>
            Кожен з нас почав жити своїм дорослим життям. Ми ходили на пари,
            гризли граніт науки, святкували твій День народження 🥂, намагались
            підтримувати зв'язок. Але, визнаймо, спочатку всі трохи загубились у
            вихорі нових подій, обов'язків та знайомств. Це був час, коли наша
            дружба вчилася дихати на відстані, чекаючи нагоди знову зійтися.
          </p>
          <p>
            Але ми не здалися! Потроху, крок за кроком, ми відновили наш
            зв'язок. Святкували День народження 🎉, відчували, як ниточка нашої
            дружби стає міцнішою.
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
    </section>
  );
}
export default FriendshipDistance;
