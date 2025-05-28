import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import HoverSliderSea from "../layout/HoverSliderSea.jsx";
import css from "../../css/AdultLife/SeaTravel.module.css";
import Modal from "../layout/Modal.jsx";

// Для першої картки
import photo1 from "../../assets/images/SeaTravel/1.JPEG";
import photo2 from "../../assets/images/SeaTravel/2.JPEG";
import photo3 from "../../assets/images/SeaTravel/3.jpg";
import photo4 from "../../assets/images/SeaTravel/4.jpg";
import photo5 from "../../assets/images/SeaTravel/5.JPEG";
import photo6 from "../../assets/images/SeaTravel/6.JPEG";
import photo7 from "../../assets/images/SeaTravel/7.jpg";
import photo8 from "../../assets/images/SeaTravel/8.JPEG";
import photo9 from "../../assets/images/SeaTravel/9.JPEG";
import photo10 from "../../assets/images/SeaTravel/10.JPEG";
import photo11 from "../../assets/images/SeaTravel/11.JPEG";
import photo12 from "../../assets/images/SeaTravel/12.JPEG";
import photo13 from "../../assets/images/SeaTravel/13.JPEG";
import photo14 from "../../assets/images/SeaTravel/14.JPEG";
import photo15 from "../../assets/images/SeaTravel/15.JPEG";
import photo16 from "../../assets/images/SeaTravel/16.jpg";
import photo17 from "../../assets/images/SeaTravel/17.jpg";
import photo18 from "../../assets/images/SeaTravel/18.jpg";
import photo19 from "../../assets/images/SeaTravel/19.JPEG";
import photo20 from "../../assets/images/SeaTravel/20.JPEG";

// Для другої картки
import photo21 from "../../assets/images/Poland/1.jpg";
import photo22 from "../../assets/images/Poland/2.jpg";
import photo23 from "../../assets/images/Poland/3.jpg";
import photo24 from "../../assets/images/Poland/4.jpg";
import photo25 from "../../assets/images/Poland/5.jpg";
import photo26 from "../../assets/images/Poland/6.JPEG";
import photo27 from "../../assets/images/Poland/7.JPEG";
import photo28 from "../../assets/images/Poland/8.jpg";
import photo29 from "../../assets/images/Poland/9.jpg";
import photo30 from "../../assets/images/Poland/10.JPEG";
import photo31 from "../../assets/images/Poland/11.jpg";
import photo32 from "../../assets/images/Poland/12.jpg";

// Для третя картки
import photo33 from "../../assets/images/Testing/1.jpg";
import photo34 from "../../assets/images/Testing/3.jpg";
import photo35 from "../../assets/images/Testing/4.JPG";
import photo36 from "../../assets/images/Testing/5.jpg";
import photo37 from "../../assets/images/Testing/6.jpg";
import photo38 from "../../assets/images/Testing/7.jpg";
import photo39 from "../../assets/images/Testing/2.jpg";
import photo40 from "../../assets/images/Testing/9.jpg";
import photo41 from "../../assets/images/Testing/10.jpg";
import photo42 from "../../assets/images/Testing/11.jpg";
import photo43 from "../../assets/images/Testing/12.jpg";
import photo44 from "../../assets/images/Testing/13.JPEG";
import photo45 from "../../assets/images/Testing/14.JPEG";
import photo46 from "../../assets/images/Testing/15.JPEG";
import photo47 from "../../assets/images/Testing/16.JPEG";
import photo48 from "../../assets/images/Testing/17.JPEG";
import photo49 from "../../assets/images/Testing/18.JPEG";
import photo50 from "../../assets/images/Testing/19.JPG";
import photo51 from "../../assets/images/Testing/20.JPG";
import photo52 from "../../assets/images/Testing/21.JPG";
import photo53 from "../../assets/images/Testing/22.JPG";
import photo54 from "../../assets/images/Testing/23.jpg";
import photo55 from "../../assets/images/Testing/24.jpg";
import photo56 from "../../assets/images/Testing/25.jpg";
import photo57 from "../../assets/images/Testing/26.jpg";
import photo58 from "../../assets/images/Testing/27.jpg";

const loveStoryEvents = [
  {
    title: "Морські подорожі та нові плани",
    description:
      "Потім у нас з'явився новий грандіозний план – поїхати на море в Бердянськ 🌊, а згодом і на заробітки. У Бердянську ми гарно провели час: заснули прямо на березі 🏖️, незважаючи ні на що, каталися на ланцюгах 🎡, відвідували 'Дім Жахів' (де було швидше смішно, ніж страшно!), курили кальян під зірками 💨✨. А зранку, пам'ятаєш, робили фотосесію 'на фоні баб'? Це було так безтурботно і весело, справжній ковток свободи перед невідомим.Потім ми зібрались і поїхали на справжні пригоди – до Польщі! Це була найдовша дорога в автобусі, яку ми тільки могли уявити.",
    images: [
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
      photo11,
      photo12,
      photo13,
      photo14,
      photo15,
      photo16,
      photo17,
      photo18,
      photo19,
      photo20,
    ],
  },
  {
    title: "Польські випробування та пригоди",
    description:
      " Приїхали, сиділи на карантині 😷, а потім ти захворіла. Ох, як ми тебе тоді 'відкачували'! Купили горілки 🥃, огірків 🥒, скумбрії 🐟 та картоплі, і, здається, всі вилікувались після цього 'еліксиру' і поїхали в хостел.А в хостелі нас чекав дощ і, звичайно ж, Русік зі словами: - Це наша остання ковбаса!Перші дні на роботі були складними. Я молилась, щоб ми були разом, але нас розділили на різні процеси. Спочатку було важко, але потім почались справжні - жорсткі пригоди. Вечірка на Хелловін🎃 була такою веселою, хоча ти, мабуть, половини не пам'ятаєш! А потім була поїздка до невідомого - Давсона🧑🏿 і пригоди вже там. Нам не сиділось на місці, і ми поїхали на іншу роботу в Познань, на - зару. Там нас чекав гарний хостел і справді гарне місто. Там почався тві пошук  у Тіндері! Але, на жаль, там ми прочекали декілька тижнів омріяної роботи і врешті повернулись додому з надією, що повернемось знову після візи 🛂",
    images: [
      photo21,
      photo22,
      photo23,
      photo24,
      photo25,
      photo26,
      photo27,
      photo28,
      photo29,
      photo30,
      photo31,
      photo32,
    ],
  },
  {
    title: "Від тяжкого періоду до життя разом",
    description:
      "Після того, як ми повернулись, почалася не дуже гарна смуга нашого життя. Нас кидали з роботою, а кошти закінчувались. Ми пішли працювати в офіс 🏢, який швидко перетворився на справжню каторгу. Добре, що Саша знайшов роботу, і ми знову переїхали в місто, але тепер вже жили разом на Пісках.Мучаючись на офісі та обідаючи біля РАГСу, ми чітко зрозуміли – це не наше. Тоді Саша взяв нас під своє крило. І саме тоді почалось наше 'розгульне життя' та, на жаль, невдалий бізнес із сумками 👜. Це був період пошуків, помилок, але завжди разом.",
    images: [
      photo33,
      photo34,
      photo35,
      photo36,
      photo37,
      photo38,
      photo39,
      photo40,
      photo41,
      photo42,
      photo43,
      photo44,
      photo45,
      photo46,
      photo47,
      photo48,
      photo49,
      photo50,
      photo51,
      photo52,
      photo53,
      photo54,
      photo55,
      photo56,
      photo57,
      photo58,
    ],
  },
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

export default function SeaTravel() {
  // Додаємо стан для керування модальним вікном
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(""); // Для збереження поточного зображення

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc); // Встановлюємо зображення, яке потрібно показати
    setIsModalOpen(true); // Відкриваємо модальне вікно
  };

  const closeLightbox = () => {
    setIsModalOpen(false); // Закриваємо модальне вікно
    setCurrentImage(""); // Очищаємо поточне зображення
  };

  return (
    <section className={css.seaTravelSection}>
      <motion.h2 className={css.sectionTitle} {...textAnimation}>
        Великі зміни
      </motion.h2>

      <div className={css.timeline}>
        {loveStoryEvents.map((event, index) => (
          <motion.div
            className={css.timelineItem}
            key={index}
            variants={textAnimation}
            initial="initial"
            whileInView="animate"
          >
            <div className={css.timelineContent}>
              <h3>{event.title}</h3>
              <p> {event.description} </p>
              <div className={css.imageWrapper}>
                <HoverSliderSea
                  images={event.images}
                  onImageClick={openLightbox} // Викликаємо openLightbox
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* РЕНДЕРИМО ВАШ КОМПОНЕНТ МОДАЛЬНОГО ВІКНА */}
      <Modal isOpen={isModalOpen} onClose={closeLightbox}>
        {/* Передаємо зображення як children */}
        <img
          src={currentImage}
          alt="Фото"
          className={
            css.modalImage
          } /* ДОДАЄМО КЛАС ДЛЯ СТИЛІЗАЦІЇ ЗОБРАЖЕННЯ В МОДАЛЦІ */
          style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "8px" }} // Вбудований стиль, як ви просили
        />
      </Modal>
    </section>
  );
}
