// components/our-friendship/CommonHobbiesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import css from "../../css/CommonHobbiesSection.module.css"; // Створіть цей файл для стилів
// import hairSalonPerformance from "../../public/images/friendship/hair_salon_performance.jpg"; // Замініть на фото з виступу перукарів
// import chipsEnergyDrink from "../../public/images/friendship/chips_energy_drink.jpg"; // Замініть на фото чіпсів та енергетика (або символічне)

function CommonHobbiesSection() {
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

  return (
    <section className={css.commonHobbiesSection}>
      <motion.h2
        className={css.sectionTitle}
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        Перукарочка назавжди!
      </motion.h2>

      <motion.div
        className={css.contentWrapper}
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className={css.textBlock} variants={textVariants}>
          <p>
            Ми в школі, здається, перепробували всі можливі гуртки, але головним
            гуртком був - перукарочка. Скільки там було ентузіазму, скільки
            сміху та іноді – відверто дивних зачісок, які ми з гордістю
            демонстрували на сцені! Наші виступи були завжди сповнені
            непередбачуваних сюрпризів.
          </p>
          <p>
            А після кожної нашої перукарської феєрії ми мали незмінний ритуал –
            забігти у 'Віват' за пачкою чіпсів та енергетиком, обговорюючи наші
            'шедеври' та сміючись до сліз.
          </p>
        </motion.div>

        <motion.div
          className={css.imageBlock}
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            // src={chipsEnergyDrink}
            alt="Чіпси та енергетик з 'Вівату'"
            className={css.hobbyImage}
          />
          <div className={css.imageCaption}>
            Незмінний ритуал після "феєрії"
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CommonHobbiesSection;
