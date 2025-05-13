// Footer.jsx
import React from "react";
import css from "../../css/Footer.module.css"; // Імпортуємо CSS Module
import { FaInstagram } from "react-icons/fa"; // Імпортуємо іконку Instagram

export default function Footer() {
  return (
    <footer className={css.footerContainer}>
      {/* Використовуємо клас через css.footerContainer */}
      <div className={css.container}>
        <p>З любов’ю 💗 створено спеціально для тебе</p>

        <p className={css.smallText}>
          {/* Використовуємо клас через css.smallText */}
          &copy; {new Date().getFullYear()} My Best Friend Project
        </p>
        <a
          href="https://www.instagram.com/yelyzavetaonyshchenko?igsh=MWpkNHI1ejJwczllOQ%3D%3D&utm_source=qr"
          // Замініть на свій профіль target="_blank" rel="noopener noreferrer"
          className={css.instagramLink}
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
}
