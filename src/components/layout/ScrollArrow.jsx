import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import css from "../../css/ScrollArrow.module.css";

const ScrollArrow = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setIsVisible(scrollTop > 100);
      setIsBottom(scrollTop + windowHeight >= fullHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    isVisible && (
      <button className={css.scrollArrow} onClick={handleClick}>
        {isBottom ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    )
  );
};

export default ScrollArrow;
