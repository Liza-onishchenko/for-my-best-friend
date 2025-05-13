import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "../../css/Navbar.module.css";

export default function Navbar() {
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.styledLink}>
        Привітання
      </Link>
      <Link to="/friendship" className={css.styledLink}>
        Початок дружби
      </Link>
      <Link to="/adultlife" className={css.styledLink}>
        Доросле життя
      </Link>
    </nav>
  );
}
