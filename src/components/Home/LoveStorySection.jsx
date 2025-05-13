import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import HoverSlider from "../layout/HoverSlider.jsx";
import css from "../../css/LoveStorySection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../../components/layout/Modal.jsx";

const loveStoryEvents = [
  {
    date: "25.04.22",
    title: "Перше знайомство",
    description:
      "Можливо, це не найгламурніше фото, але саме так Паша побачив тебе вперше. Що ж, навіть супергероям потрібні маски",
    images: ["/photo16.jpg", "/photo1.jpg", "photo32.jpg", "photo33.jpg"],
  },
  {
    date: "21.05.22",
    title: "Перші квіти",
    description:
      "Перший ніжний подарунок – квіти від Паші. Квітів багато не буває 🌺",
    images: [
      "/photo2.jpg",
      "/2.jpg",
      "/1.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
      "/7.jpg",
      "/8.jpg",
      "/9.jpg",
      "/10.jpg",
      "/11.jpg",
      "/12.jpg",
    ],
  },
  {
    date: "05.06.22",
    title: "Перше офіційне побачення та подорож",
    description: "Ірландія, пригоди й серця, що б’ються в унісон 🌊",
    images: ["/photo5.jpg", "/photo4.jpg", "/photo3.jpg"],
  },
  {
    date: "09.06.22",
    title: "Перша іграшка",
    description:
      "Пам'ятаєш цю милу пандочку від Паші? Кажуть, перша іграшка – назавжди в серці (і в ліжку 😉)",
    images: [
      "photo6.jpg",
      "/13.jpg",
      "/14.jpg",
      "/15.jpg",
      "/16.jpg",
      "/17.jpg",
    ],
  },
  {
    date: "20.06.22",
    title: "Поїздка на Хоут",
    description:
      "Ця поїздка до Хоута назавжди залишиться в пам'яті як початок вашої великої спільної подорожі 🗺️",
    images: [
      "photo7.jpg",
      "photo8.jpg",
      "photo9.jpg",
      "photo10.jpg",
      "photo11.jpg",
      "photo12.jpg",
    ],
  },
  {
    date: "02.07.22",
    title: "Перший раз тебе побачив в сукні",
    description: "Саме в той вечір Паша зрозумів, що принцеси існують👑",
    images: ["photo13.jpg", "photo14.jpg", "photo15.jpg"],
  },
  {
    date: "15.05.22",
    title: "Офіційний початок ваших відносин 💖",
    images: [],
  },
  {
    date: "27.10.22",
    title: "Перша подорож за кордон Португалія",
    description: "Разом відкривали світ ще ширше!  🌞🏖️",
    images: ["photo21.jpg", "photo19.jpg", "photo20.jpg", "photo18.jpg"],
  },
  {
    date: "01.06.23",
    title: "У той самий день, коли світ змінився",
    description:
      "Солодкі миті невідання... поки Паша готував найважливіший сюрприз у вашому житті.💍 Ти тоді навіть не підозрювала, що кожна секунда наближала тебе до найважливішого 'так' у вашому житті ❤️",
    images: [
      "photo17.jpg",
      "photo22.jpg",
      "photo23.jpg",
      "photo24.jpg",
      "photo25.jpg",
    ],
  },
  {
    date: "01.06.23",
    title: "Пропозиція",
    description: "Найромантичніший момент вашої історії кохання ❤️",
    images: [
      "photo31.jpg",
      "photo30.jpg",
      "photo29.jpg",
      "photo27.jpg",
      "photo26.jpg",
      "photo28.jpg",
    ],
  },
];

const textAnimation = {
  //зявляється картки
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  viewport: { once: true },
};

export default function LoveStorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
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
                  images={event.images.map(
                    (img) => `/images/love_story/${img}`
                  )}
                  onImageClick={openModal}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={modalImage}
          alt="Перегляд"
          className={css.modalImage}
          style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "8px" }}
        />
      </Modal>
    </section>
  );
}
