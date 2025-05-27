import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import css from "../../css/Modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          <IoCloseSharp
            size={36}
            className={css.closeButton}
            onClick={onClose}
          />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
