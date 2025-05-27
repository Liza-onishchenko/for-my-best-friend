import React from "react";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import { motion } from "framer-motion";
import HoverSlider from "../layout/HoverSlider.jsx"; // Шлях до компонента HoverSlider
import css from "../../css/AdultLife/ComingOfAgeSection.module.css"; // Шлях до CSS модуля

// Імпортуємо зображення. Шляхи повинні бути відносними від ComingOfAgeSection.jsx до файлів зображень.
// Припускаємо, що ComingOfAgeSection.jsx знаходиться у src/AdultLife/
// а зображення у src/assets/images/ComingOfAgeSection/.
// Отже, потрібно вийти на один рівень вгору (з AdultLife до src), потім зайти в assets/images/...

// Важливо: перевірте регістр розширень файлів! (PNG vs png, JPG vs jpg)
// Згідно Screenshot_4.png: 1.PNG, 2.jpg, 3.jpg, 4.PNG, 5.PNG, 6.jpg, 7.jpg.
import img1 from "../../assets/images/ComingOfAgeSection/1.PNG"; // Змінено на .PNG
import img2 from "../../assets/images/ComingOfAgeSection/2.jpg";
import img3 from "../../assets/images/ComingOfAgeSection/3.jpg";
import img4 from "../../assets/images/ComingOfAgeSection/4.PNG"; // Змінено на .PNG
import img5 from "../../assets/images/ComingOfAgeSection/5.PNG"; // Змінено на .PNG
import img6 from "../../assets/images/ComingOfAgeSection/6.jpg";
import img7 from "../../assets/images/ComingOfAgeSection/7.jpg";
import img8 from "../../assets/images/ComingOfAgeSection/2.jpg"; // Якщо це те саме зображення, що й img2, це нормально.

const ComingOfAgeSection = () => {
  const comingOfAgeEvents = [
    {
      title: "Випускний та безтурботне літо",
      description:
        "Пам'ятаєш те літо після школи? Ми здали те страшно очікуване ЗНО, і світ раптом відкрився. Ти тоді почала зустрічатись з хлопцем, і ми разом провели таке веселе літо: купались у басейні до забуття, смажили сосиски, сміялись до сліз.",
      images: [img3, img4, img8, img6, img7], // Передаємо імпортовані змінні без змін
    },
    {
      title: "Розлука та навчання",
      description:
        "А потім настав час вступати: ти в Університет у Бердянську, а я – в коледж у Запоріжжі. Я й досі пам'ятаю, як ми проводжали тебе на потяг до Бердянську. Сльози текли рікою, було так сумно, що між нами буде відстань. Тоді ми ще не знали, наскільки міцним виявиться наш зв'язок попри кілометри. ",
      images: [img1, img2, img5], // Передаємо імпортовані змінні без змін
    },
    // Додайте інші події за потреби
  ];

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    viewport: { once: true },
  };

  const openLightbox = (imageSrc) => {
    const instance = basicLightbox.create(
      `
      <div class="covers-full-image-wrapper">
        <img
          src="${imageSrc}"
          alt="Фото"
          class="covers-full-image"
          style="max-width: 90vw; max-height: 80vh; border-radius: 8px;"
        />
        <button class="covers-close-button" aria-label="Закрити"></button>
      </div>
    `,
      {
        onShow: (instance) => {
          const closeButton = instance
            .element()
            .querySelector(".covers-close-button");
          closeButton.addEventListener("click", () => instance.close());

          const closeOnEscape = (e) => {
            if (e.code === "Escape") instance.close();
          };

          window.addEventListener("keydown", closeOnEscape);
          instance.element().addEventListener("basiclightbox:close", () => {
            window.removeEventListener("keydown", closeOnEscape);
          });
        },
      }
    );

    instance.show();
  };

  return (
    <section className={css.comingOfAgeSection}>
      <motion.h2 className={css.sectionTitle} {...textAnimation}>
        Наша історія дорослішання
      </motion.h2>

      <div className={css.timeline}>
        {comingOfAgeEvents.map((event, index) => (
          <motion.div
            className={css.timelineItem}
            key={index}
            variants={textAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className={css.timelineYear}>{event.date}</div>
            <div className={css.timelineContent}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className={css.imageWrapper}>
                <HoverSlider
                  images={event.images} // Оновлено: передаємо масив імпортованих змінних
                  onImageClick={openLightbox}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComingOfAgeSection;
