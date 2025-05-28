import React, { useEffect, useRef, useState } from "react";
import css from "../../css/AdultLife/Acquaintance.module.css";
import broom1 from "../../assets/images/Acquaintance/1.jpg";
import broom2 from "../../assets/images/Acquaintance/2.jpg";
import broom3 from "../../assets/images/Acquaintance/3.jpg";
import broom4 from "../../assets/images/Acquaintance/4.jpg";
import broom5 from "../../assets/images/Acquaintance/5.jpg";
import broom6 from "../../assets/images/Acquaintance/6.jpg";
import broom7 from "../../assets/images/Acquaintance/7.jpg";
import broom8 from "../../assets/images/Acquaintance/8.jpg";
import Modal from "../layout/Modal.jsx";

function Acquaintance() {
  const photos = [
    { src: broom4 },
    { src: broom1 },
    { src: broom2 },
    { src: broom3 },
    { src: broom5 },
    { src: broom6 },
    { src: broom7 },
    { src: broom8 },
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
    <section className={css.AcquaintanceSection}>
      <h2 className={css.sectionTitle}>Дякую, що ти є 💖 </h2>
      <div className={css.contentWrapper}>
        <div className={css.textContainer}>
          <p>
            Але я неймовірно щаслива, що ти в Ірландії змогла знайти своє
            кохання!❤️ Я дуже вдячна Паші за те, що він тебе знайшов, що ти не
            була там сама і так швидко стала щасливою. Тепер я не хвилююсь за
            тебе.
          </p>
          <p>
            Ти стала для мене як рідна сестра 👩. Для моєї сім’ї ти вже своя, і
            ми всі тебе дуже любимо 👩‍👩‍👧‍👦. Ти ж це знаєш.
          </p>
          <p>
            Я була безмежно рада, коли ти прилетіла з Ірландії в Україну, щоб
            побачитись, познайомила нас із Пашею. Я побачила, як ти змінилася,
            як ти світишся від щастя, і як добре вам разом. Ми всі щиро раді за
            тебе — і, звичайно, за Пашу. Йому дуже пощастило з тобою!
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {activeImage && (
          <>
            <img src={activeImage.src} alt="Повне зображення" />
            <p>{activeImage.caption}</p>
          </>
        )}
      </Modal>
      <div className={css.wedding}>
        <p>
          І що тепер? Я йду дружкою на твоє весілля!👰 Я така рада, що ти змогла
          знайти своє щастя і ти зараз живеш своє найкраще життя. Ця відстань не
          стала між нами перешкодою, і ми спілкуємось як завжди – про все, що
          тільки можна. Не буду приховувати, мені дуже сумно, що тебе немає
          поряд. Я так сумую за нашими гульками, за нашими душевними розмовами,
          за тим, щоб просто посидіти поруч. Я дуже сумую за тобою, і ще більше
          зрозуміла, як я тебе люблю і що наша дружба – це на все життя. Я дуже
          вдячна, що ти в мене є, це великий подарунок долі. Люблю тебе, моя
          мала!
        </p>
        <p>НА ЦЬОМУ МІСЦІ БУДУТЬ ВЕСІЛЬНІ ФОТО</p>
      </div>
    </section>
  );
}

export default Acquaintance;
