import React, { useEffect, useRef, useState } from "react";
import css from "../../css/AdultLife/CityLifeSection.module.css";
import HoverSlider from "../layout/HoverSlider.jsx";
import * as basicLightbox from "basiclightbox"; // Імпортуємо basicLightbox
import "basiclightbox/dist/basicLightbox.min.css"; // Імпортуємо стилі basicLightbox
import image1 from "../../assets/images/CityLifeSection/1.jpg";
import image2 from "../../assets/images/CityLifeSection/2.jpg";
import image3 from "../../assets/images/CityLifeSection/3.jpg";

import image4 from "../../assets/images/CityLifeSection/4.PNG";
import image5 from "../../assets/images/CityLifeSection/5.jpg";

import image6 from "../../assets/images/CityLifeSection/6.jpg";
import image7 from "../../assets/images/CityLifeSection/7.jpg";
import image8 from "../../assets/images/CityLifeSection/8.jpg";
import image9 from "../../assets/images/CityLifeSection/9.jpg";
import image10 from "../../assets/images/CityLifeSection/10.jpg";
import image11 from "../../assets/images/CityLifeSection/11.jpg";
import image12 from "../../assets/images/CityLifeSection/12.jpg";
import image13 from "../../assets/images/CityLifeSection/13.jpg";

import image14 from "../../assets/images/CityLifeSection/14.jpg";
import image15 from "../../assets/images/CityLifeSection/15.jpg";
import image16 from "../../assets/images/CityLifeSection/16.jpg";
import image17 from "../../assets/images/CityLifeSection/17.jpg";
import image18 from "../../assets/images/CityLifeSection/18.jpg";
import image19 from "../../assets/images/CityLifeSection/19.jpg";
import image20 from "../../assets/images/CityLifeSection/20.jpg";
import image21 from "../../assets/images/CityLifeSection/21.jpg";
import image22 from "../../assets/images/CityLifeSection/22.jpg";
import image23 from "../../assets/images/CityLifeSection/23.jpg";

import image24 from "../../assets/images/CityLifeSection/24.JPG";
import image25 from "../../assets/images/CityLifeSection/25.JPG";
import image26 from "../../assets/images/CityLifeSection/26.JPG";
import image27 from "../../assets/images/CityLifeSection/27.JPG";
import image28 from "../../assets/images/CityLifeSection/28.JPG";
import image29 from "../../assets/images/CityLifeSection/29.JPG";

import image30 from "../../assets/images/CityLifeSection/30.jpg";
import image31 from "../../assets/images/CityLifeSection/31.jpg";
import image32 from "../../assets/images/CityLifeSection/32.jpg";
import image33 from "../../assets/images/CityLifeSection/33.jpg";
import image34 from "../../assets/images/CityLifeSection/34.jpg";
import image35 from "../../assets/images/CityLifeSection/35.jpg";

import image36 from "../../assets/images/CityLifeSection/36.jpg";
import image37 from "../../assets/images/CityLifeSection/37.jpg";
import image38 from "../../assets/images/CityLifeSection/38.jpg";
import image39 from "../../assets/images/CityLifeSection/39.jpg";
import image40 from "../../assets/images/CityLifeSection/40.JPG";
import image41 from "../../assets/images/CityLifeSection/41.JPG";

import image42 from "../../assets/images/CityLifeSection/42.jpg";
import image43 from "../../assets/images/CityLifeSection/43.jpg";
import image44 from "../../assets/images/CityLifeSection/44.jpg";
import image45 from "../../assets/images/CityLifeSection/45.jpg";
import image46 from "../../assets/images/CityLifeSection/46.jpg";
import image47 from "../../assets/images/CityLifeSection/47.jpg";
import image48 from "../../assets/images/CityLifeSection/48.jpg";
import image49 from "../../assets/images/CityLifeSection/49.jpg";
import image50 from "../../assets/images/CityLifeSection/50.JPG";
import image51 from "../../assets/images/CityLifeSection/51.jpg";
import image52 from "../../assets/images/CityLifeSection/52.jpg";

const cardsData = [
  {
    text: "Потім ми з Сашою вирішили переїхати до міста й орендувати власну квартиру. Саме в той непростий період твого життя, коли ти переживала розрив із хлопцем, ми не могли стояти осторонь. Ми запропонували тобі також переїхати до міста, щоб бути поруч, підтримати тебе й пройти цей шлях разом. І з цього моменту почалася нова, весела сторінка нашого життя. Ми всі оселилися в місті, і будні перетворилися на пригоди.",
    images: [
      image1, // Використовуємо імпортовані змінні
      image2,
      image3,
      image19,
      image20,
      image21,
      image28,
      image29,
      image27,
      image44,
    ],
  },
  {
    text: "Я досі пам’ятаю, як ми з тобою вперше ночували в мене — удвох, ти допомагала мені прати плед той тяжкий у ванні. На затишному диванчику, дивилися «Поліцейського з Рубльовки»до глибокої ночі, пили каву, а потім – вино. Це було так по-дорослому, так по-новому!",
    images: [
      image4,
      image5,
      image15,
      image14,
      image16,
      image18,
      image22,
      image23,
      image24,
      image25,
      image26,
    ],
  },
  {
    text: "Ти працювала в бібліотеці, я — кондитером, а Саша був ювеліром. Ми відривалися на концертах — Макс Барських, Quest Pistols, Даяна, Океан Ельзи, гурти 90-х. Майже весь вільний час ми проводили разом: ходили в кіно ночами, курили кальян із Геною.А ваш з Сашою ритуал – ходити о 02:00 ночі в АТБ до Раї – це ж окрема історія! А ще ти часто ночувала в нас на кухонному диванчику.",
    images: [
      image6,
      image7,
      image11,
      image8,
      image9,
      image10,
      image12,
      image13,
      image17,
    ],
  },
  {
    text: " Твій День народження відсвяткували двічі: спочатку суші-вечірка вдома, а потім продовжили в кафе на набережній.Потім мій день народження)Також ми з Сашою вирішили зробити тобі подарунок, стрибок з моста. Разом ми пережили карантин, який пройшов весело та 'з плюсом' у вазі для всіх! Відпочивали на ставку, вчились ловити рибу та встигли зробити чудову фотосесію. Відпочивали в Веселянці та їли сирий шашлик.",
    images: [
      image30,
      image31,
      image32,
      image33,
      image34,
      image35,
      image36,
      image37,
      image38,
      image39,
      image40,
      image41,
      image42,
      image43,
      image44,
      image45,
      image46,
      image47,
      image48,
      image49,
      image50,
      image51,
      image52,
    ],
  },
];
const CityLifeSection = () => {
  const openLightbox = (imageSrc) => {
    const instance = basicLightbox.create(
      `
      <div class="covers-full-image-wrapper">
        <img
          src="${imageSrc}"
          alt="Повне зображення"
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
    <section className={css.cityLifeSectionSection}>
      <h2 className={css.sectionTitle}>Разом — попри все</h2>
      <div className={css.cardsWrapper}>
        {cardsData.map((card, index) => (
          <div className={css.card} key={index}>
            <p className={css.cardText}>{card.text}</p>
            <div className={css.galleryContainer}>
              {/* Замінюємо кастомну галерею на HoverSlider */}
              <HoverSlider
                images={card.images}
                onImageClick={openLightbox} // Передаємо функцію openLightbox
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityLifeSection;
