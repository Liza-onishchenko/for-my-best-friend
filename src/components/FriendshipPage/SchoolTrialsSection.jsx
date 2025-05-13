// components/our-friendship/SchoolTrialsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import css from "../../css/SchoolTrialsSection.module.css"; // Створіть цей файл для стилів
// import girlsWithSpargalki from '../../public/images/friendship/girls_with_spargalki.jpg'; // Замініть на стилізоване зображення дівчат зі шпаргалками
// import tapeRollIcon from '../../public/images/icons/tape_roll.png'; // Зображення рулону скотчу

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

  return (
    <section className={css.schoolTrialsSection}>
      <motion.h2
        className={css.sectionTitle}
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        ДПА в рідному 16-му: коли скотч склеїв не лише папір, а й нашу надію
      </motion.h2>

      <motion.div
        className={css.contentWrapper}
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className={css.textBlock} variants={textVariants}>
          <p>
            Наш улюблений 16-й кабінет того дня здавався не таким вже й затишним
            – тут вершилася доля наших перших серйозних іспитів, ДПА. І ми,
            звісно, підійшли до справи з усією серйозністю (у нашому розумінні
            цього слова!). Наташа виявила чудеса друкарської майстерності,
            роздрукувавши справжнісінькі 'кілометри' шпаргалок, які ми потім
            старанно склеювали скотчем, сподіваючись, що ці паперові змії
            стануть нашою рятівною соломинкою.
            <motion.img
              //   src={tapeRollIcon}
              alt="Іконка рулону скотчу"
              className={css.tapeIcon}
              variants={tapeIconVariants}
              whileHover="hover"
            />
          </p>
          <p>
            Сам процес іспиту перетворився на справжній екстрим – кожен похід до
            вбиральні ставав секретною місією з пошуку потрібної відповіді, а
            кожен вихід вчителя з класу викликав бурю надії. Чи допомогли ті
            шпаргалки? 50 на 50, як то кажуть. Але головне – ми були в цьому
            разом, об'єднані спільною метою вижити в цій нелегкій битві за
            знання.
          </p>
        </motion.div>
        <motion.div
          className={css.imageBlock}
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            // src={girlsWithSpargalki}
            alt="Дівчата зі шпаргалками"
            className={css.trialImage}
          />
          <div className={css.imageCaption}>
            Наші секретні "кілометри" знань
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SchoolTrialsSection;
