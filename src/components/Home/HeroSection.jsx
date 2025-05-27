import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import css from "../../css/Home/HeroSection.module.css";
import heartImage from "../../assets/images/love_story/heart_17069339.png";
import { FaTimes } from "react-icons/fa"; // Імпортуємо іконку хрестика

export default function HeroSection() {
  const [showSurprise, setShowSurprise] = useState(false);
  const heartRef = useRef(null);
  const surpriseRef = useRef(null); // Референс для контейнера сюрпризу

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const surpriseVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  };

  const heartPulse = {
    scale: [1, 1.1, 1], // Трохи менший пульс
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    setTimeout(() => {
      heartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  const closeSurprise = () => {
    setShowSurprise(false);
  };

  // Закриття при кліку поза контейнером сюрпризу
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        surpriseRef.current &&
        !surpriseRef.current.contains(event.target) &&
        showSurprise
      ) {
        closeSurprise();
      }
    };

    if (showSurprise) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSurprise]);

  return (
    <section className={css.section}>
      <motion.div
        className={css.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Цей сайт — маленький подарунок для тебе...
        <p className={css.subtitle}>
          {" "}
          Я створила його, щоб показати, як сильно ціную нашу дружбу
        </p>
      </motion.div>

      <motion.div
        className={css.wishText}
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        Сонечко моє, вітаю з твоїм чарівним днем весілля! Нехай кожен день
        вашого спільного життя буде зігрітий такою ж сильною любов'ю, яку я бачу
        сьогодні в твоїх очах. Бажаю вам безмежного щастя, ніжності та щоб ваша
        неймовірна історія кохання тривала вічно!
      </motion.div>

      <button className={css.surpriseButton} onClick={handleSurpriseClick}>
        Для тебе
      </button>

      <AnimatePresence>
        {showSurprise && (
          <motion.div
            className={css.surpriseOverlay} // Новий overlay для затемнення фону
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={css.surpriseContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={surpriseVariants}
              ref={surpriseRef} // Прив'язуємо референс до контейнера сюрпризу
            >
              <button className={css.closeButton} onClick={closeSurprise}>
                <FaTimes />
              </button>
              <motion.div className={css.heart} animate={heartPulse}>
                <img
                  src={heartImage}
                  alt="Сердечко"
                  className={css.heartImage}
                />
              </motion.div>
              <div className={css.surpriseText}>Моє серце належить тобі...</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
