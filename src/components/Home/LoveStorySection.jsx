import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import HoverSlider from "../layout/HoverSlider.jsx";
import css from "../../css/Home/LoveStorySection.module.css";
import Modal from "../layout/Modal.jsx";
// Для першої картки
import photo16 from "../../assets/images/love_story/photo16.jpg";
import photo1 from "../../assets/images/love_story/photo1.jpg";
import photo32 from "../../assets/images/love_story/photo32.jpg";
import photo33 from "../../assets/images/love_story/photo33.jpg";

// Для другої картки
import photo2 from "../../assets/images/love_story/photo2.jpg";
import img2_1 from "../../assets/images/love_story/2.jpg";
import img2_2 from "../../assets/images/love_story/1.jpg";
import img2_3 from "../../assets/images/love_story/3.jpg";
import img2_4 from "../../assets/images/love_story/4.jpg";
import img2_5 from "../../assets/images/love_story/5.jpg";
import img2_6 from "../../assets/images/love_story/6.jpg";
import img2_7 from "../../assets/images/love_story/7.jpg";
import img2_8 from "../../assets/images/love_story/8.jpg";
import img2_9 from "../../assets/images/love_story/9.jpg";
import img2_10 from "../../assets/images/love_story/10.jpg";
import img2_11 from "../../assets/images/love_story/11.jpg";
// import img2_12 from "../../assets/images/love_story/12.jpg";

// Для третьої картки
import photo5 from "../../assets/images/love_story/photo5.jpg";
import photo4 from "../../assets/images/love_story/photo4.jpg";
import photo3 from "../../assets/images/love_story/photo3.jpg";

// Для четвертої картки
import photo6 from "../../assets/images/love_story/photo6.jpg";
import img4_1 from "../../assets/images/love_story/13.jpg";
import img4_2 from "../../assets/images/love_story/14.jpg";
import img4_3 from "../../assets/images/love_story/15.jpg";
import img4_4 from "../../assets/images/love_story/16.jpg";
import img4_5 from "../../assets/images/love_story/17.jpg";

// Для п'ятої картки
import photo7 from "../../assets/images/love_story/photo7.jpg";
import photo8 from "../../assets/images/love_story/photo8.jpg";
import photo9 from "../../assets/images/love_story/photo9.jpg";
import photo10 from "../../assets/images/love_story/photo10.jpg";
import photo11 from "../../assets/images/love_story/photo11.jpg";
import photo12 from "../../assets/images/love_story/photo12.jpg";

// Для шостої картки
import photo13 from "../../assets/images/love_story/photo13.jpg";
import photo14 from "../../assets/images/love_story/photo14.jpg";
import photo15 from "../../assets/images/love_story/photo15.jpg";

// Для сьомої картки
import img7_1 from "../../assets/images/love_story/18.jpg";
import img7_2 from "../../assets/images/love_story/20.jpg";
import img7_3 from "../../assets/images/love_story/21.jpg";
import img7_4 from "../../assets/images/love_story/22.jpg";
import img7_5 from "../../assets/images/love_story/23.jpg";

// Для восьмої картки
import photo21 from "../../assets/images/love_story/photo21.jpg";
import photo19 from "../../assets/images/love_story/photo19.jpg";
import photo20 from "../../assets/images/love_story/photo20.jpg";
import photo18 from "../../assets/images/love_story/photo18.jpg";

// Для дев'ятої картки
import photo17 from "../../assets/images/love_story/photo17.jpg";
import photo22 from "../../assets/images/love_story/photo22.jpg";
import photo23 from "../../assets/images/love_story/photo23.jpg";
import photo24 from "../../assets/images/love_story/photo24.jpg";
import photo25 from "../../assets/images/love_story/photo25.jpg";

// Для десятої картки
import photo31 from "../../assets/images/love_story/photo31.jpg";
import photo30 from "../../assets/images/love_story/photo30.jpg";
import photo29 from "../../assets/images/love_story/photo29.jpg";
import photo27 from "../../assets/images/love_story/photo27.jpg";
import photo26 from "../../assets/images/love_story/photo26.jpg";
import photo28 from "../../assets/images/love_story/photo28.jpg";
// --- КІНЕЦЬ ІМПОРТІВ ЗОБРАЖЕНЬ ---

const loveStoryEvents = [
  {
    date: "25.04.22",
    title: "Перше знайомство",
    description:
      "Можливо, це не найгламурніше фото, але саме так Паша побачив тебе вперше. Що ж, навіть супергероям потрібні маски 🦸‍♂️ ",
    images: [photo16, photo1, photo32, photo33],
  },
  {
    date: "21.05.22",
    title: "Перші квіти",
    description:
      "Перший ніжний подарунок – квіти від Паші. Квітів багато не буває 🌺",
    images: [
      photo2,
      img2_1,
      img2_2,
      img2_3,
      img2_4,
      img2_5,
      img2_6,
      img2_7,
      img2_8,
      img2_9,
      img2_10,
      img2_11,
      // img2_12,
    ],
  },
  {
    date: "05.06.22",
    title: "Перше офіційне побачення та подорож",
    description: "Ірландія, пригоди й серця, що б’ються в унісон 🌊",
    images: [photo5, photo4, photo3],
  },
  {
    date: "09.06.22",
    title: "Перша іграшка",
    description:
      "Пам'ятаєш цю милу пандочку від Паші? Кажуть, перша іграшка – назавжди в серці (і в ліжку 😉)",
    images: [photo6, img4_1, img4_2, img4_3, img4_4, img4_5],
  },
  {
    date: "20.06.22",
    title: "Поїздка на Хоут",
    description:
      "Ця поїздка до Хоута назавжди залишиться в пам'яті як початок вашої великої спільної подорожі 🗺️",
    images: [photo7, photo8, photo9, photo10, photo11, photo12],
  },
  {
    date: "02.07.22",
    title: "Перший раз тебе побачив в сукні",
    description: "Саме в той вечір Паша зрозумів, що принцеси існують👑",
    images: [photo13, photo14, photo15],
  },
  {
    date: "15.05.22",
    title: "Офіційний початок ваших відносин 💖",
    description:
      "Ваші погляди зустрілися, і між вами відчутно запала іскра. Розуміння було майже без слів, незважаючи на мовні відмінності. Після проведеного разом часу стався ніжний поцілунок. Тоді Паша, з його польським шармом, запитав: Będziesz moja?. І ти, з усмішкою та теплом у душі, відповіла: Twoja",
    images: [img7_1, img7_2, img7_3, img7_4, img7_5],
  },
  {
    date: "27.10.22",
    title: "Перша подорож за кордон Португалія",
    description: "Разом відкривали світ ще ширше! 🌞🏖️",
    images: [photo21, photo19, photo20, photo18],
  },
  {
    date: "01.06.23",
    title: "У той самий день, коли світ змінився",
    description:
      "Солодкі миті невідання... поки Паша готував найважливіший сюрприз у вашому житті. 💍 Ти тоді навіть не підозрювала, що кожна секунда наближала тебе до найважливішого 'так' у вашому житті ❤️, адже, прибувши на локацію з Пашою і відчувши роздратування через натовп, який згодом розійшовся, ти, відчувши спрагу та невдоволення запропонованою спортивною водою, заспокоїлась лише пропозицією Паші приготувати вино, поки фотографувала природу.",
    images: [photo17, photo22, photo23, photo24, photo25],
  },
  {
    date: "01.06.23",
    title: "Пропозиція💍 Найромантичніший момент вашої історії кохання ❤️",
    description:
      "Паша привернув твою увагу обручкою в руці, викликавши твоє невір'я та розгубленість від неочікуваної пропозиції, адже серце ще не усвідомлювало, яке важливе - Так, вже готове зірватися з вуст. Стоячи на коліні, він запитав, чи станеш ти його дружиною, і ти відповіла - Так, започаткувавши нову главу вашої історії, сповнені ейфорії та щастя, відсвяткували цю подію вином на прогулянці в горах, де кожен ковток і кожен крок були пронизані магією моменту.",
    images: [photo31, photo30, photo29, photo27, photo26, photo28],
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

export default function LoveStorySection() {
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
    <section className={css.loveStorySection}>
      <motion.h2 className={css.sectionTitle} {...textAnimation}>
        Ваша історія кохання
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
            <div className={css.timelineYear}>{event.date}</div>
            <div className={css.timelineContent}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className={css.imageWrapper}>
                <HoverSlider
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
