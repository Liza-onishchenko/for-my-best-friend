import React, { useEffect, useRef } from "react";
import css from "../../css/AdultLife/War.module.css";

export default function War() {
  return (
    <>
      <section className={css.warSection}>
        <div className={css.Container}>
          <h2 className={css.title}>
            Переломний момент: війна, розлука та шлях до Ірландії
          </h2>
          <p className={css.titleText}>
            Потім у нас з'явився план переїхати жити в Бердянськ, ми будували
            такі надії. Але не тут-то було.
          </p>
          <p className={css.titleText}>
            Зранку мама твоя подзвонила, потім моя, і ми почули найстрашніше –
            почалася війна 💣💥. Це був найгірший момент нашого життя, і ми
            чомусь вирішили поїхати в село, де було ще гірше. Ми переживали такі
            тяжкі часи, не знаючи, що буде завтра, що робити...
          </p>
          <p className={css.titleText}>
            У тебе з'явився шанс полетіти до Руслана в Ірландію ✈️, і ти
            запропонувала його мені. Це був такий важкий вибір, але я не могла
            покинути Сашу. І ось, ми з тобою знову на відстані.
          </p>
        </div>
      </section>
    </>
  );
}
