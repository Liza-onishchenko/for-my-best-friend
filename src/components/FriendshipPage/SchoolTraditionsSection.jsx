// components/our-friendship/SchoolTraditionsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import css from "../../css/SchoolTraditionsSection.module.css"; // Створіть цей файл для стилів
// import superheroPoster from "../../public/images/friendship/superhero_poster.jpg"; // Замініть на фото плаката (якщо є) або символічне зображення
// import musicalImage from "../../public/images/friendship/school_musical.jpg"; // Замініть на фото з мюзиклу (якщо є) або символічне зображення
// import energyDrinkIcon from "../../public/images/icons/energy_drink.png"; // Зображення енергетика
// import liquorBottleIcon from "../../public/images/icons/liquor_bottle.png"; // Зображення пляшки алкоголю

const SchoolTraditionsSection = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    viewport: { once: true },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
  };

  return (
    <section className={css.schoolTraditionsSection}>
      <motion.h2
        className={css.sectionTitle}
        variants={itemVariants}
        initial="initial"
        whileInView="animate"
      >
        Наші шкільні традиції: від символічних подарунків до епічних мюзиклів
      </motion.h2>

      <motion.div
        className={css.traditionItem}
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.img
          //   src={superheroPoster}
          alt="Плакат супергероїв"
          className={css.traditionImage}
          variants={itemVariants}
        />
        <motion.div className={css.traditionText} variants={itemVariants}>
          <h3>Символи нашої дружби: особливі подарунки від щирого серця</h3>
          <p>
            Пам'ятаєш, якими особливими були наші шкільні подарунки? Не маючи
            багато грошей, ми завжди знаходили спосіб зробити щось символічне та
            від душі. Ми скидалися на милі прикраси, першу косметику, а іноді
            навіть створювали щось своїми руками.
          </p>
          <p>
            Особливо пам'ятаю той плакат у стилі супергероїв, який ми намалювали
            тобі! Наша спільна фотографія посередині, і ми – непереможна
            команда!
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className={css.traditionItem}
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className={css.traditionText} variants={itemVariants}>
          <h3>Новорічні мюзикли: репетиції, костюми та незабутній сміх</h3>
          <p>
            А наші новорічні мюзикли! Це були справжні події, сповнені сміху та
            творчості,репетиції з Тонькою та відпрашування з уроків.
          </p>
        </motion.div>
        <motion.img
          //   src={musicalImage}
          alt="Шкільний мюзикл"
          className={css.traditionImage}
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className={css.traditionItem}
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className={css.traditionText} variants={itemVariants}>
          <h3>
            Перші "дорослі" експерименти: від енергетиків до серйозніших напоїв
          </h3>
          <p>
            Ну і, звісно, шкільні роки не обійшлися без перших "дослідів"
            дорослого життя. Пам'ятаєш, як все починалося з невинного "Блек
            Енерджі"?
            <motion.img
              //   src={energyDrinkIcon}
              alt="Іконка енергетика"
              className={css.smallIcon}
              variants={iconVariants}
              whileHover="hover"
            />
            А потім наші смаки ставали все "вишуканішими"...
            <motion.img
              //   src={liquorBottleIcon}
              alt="Іконка пляшки алкоголю"
              className={css.smallIcon}
              variants={iconVariants}
              whileHover="hover"
            />
            Це були наші перші кроки у "дорослий" світ, сповнені цікавості та
            юнацького максималізму.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SchoolTraditionsSection;
