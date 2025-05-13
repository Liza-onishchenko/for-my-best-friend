// components/our-friendship/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import css from "../../css/HeroSectionFriends.module.css"; // Створіть цей файл для стилів

function HeroSectionFriends() {
  const titleVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className={css.heroSectionFriends}>
      <motion.div
        className={css.heroContent}
        initial="initial"
        animate="animate"
        variants={titleVariants}
      >
        <h1 className={css.heroTitle}>
          Крізь роки та відстані: історія нашої незламної дружби
        </h1>
      </motion.div>
      <motion.div
        className={css.heroSubtitle}
        initial="initial"
        animate="animate"
        variants={subtitleVariants}
      ></motion.div>
      {/* Фонове зображення або анімація */}
      <div className={css.heroBackground}>
        {/* Сюди можна додати зображення або анімацію */}
      </div>
    </section>
  );
}

export default HeroSectionFriends;
