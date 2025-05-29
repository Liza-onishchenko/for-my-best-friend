import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import css from "../../css/ScrollArrow.module.css";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNotBottom, setIsNotBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setIsVisible(scrollTop > 100); // показувати кнопку "вгору" після прокрутки
      setIsNotBottom(scrollTop + windowHeight < fullHeight - 100); // показувати "вниз", якщо ще не внизу
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          className={`${css.scrollArrow} ${css.up}`}
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </button>
      )}
      {isNotBottom && (
        <button
          className={`${css.scrollArrow} ${css.down}`}
          onClick={scrollToBottom}
        >
          <FaChevronDown />
        </button>
      )}
    </>
  );
};

export default ScrollArrow;
