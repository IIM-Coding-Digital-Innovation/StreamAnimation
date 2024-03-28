import { useEffect, useRef } from 'react';
import styles from "../assets/styles/page.module.css";
import clsx from 'clsx';

const Modal = ({isModalOpen, setIsModalOpen}) => {
  const modalRef = useRef()
  useEffect(() => {
    function handleKeyPress(event) {
      if (KeyToDisable.includes(event.key)) {
        disableModal();
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const KeyToDisable = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Enter'];

  function disableModal() {
    const modalElement = document.querySelector('[data-modal="true"]');
    const keyboardElement = document.querySelector('[data-keyboard="true"]');

    if (modalElement && keyboardElement) {
      setIsModalOpen(false)
      // modalRef.current.classList.add('disabledModal');
      // keyboardElement.classList.add('normal');
      // document.querySelector('body').style.overflowY = 'auto';
    } else {
      console.error("Modal or keyboard element not found.");
    }
  }

  return (
    <div ref={modalRef} className={clsx(styles.glass, styles.modal, 'modal')} style={
      { opacity: isModalOpen ? "1" : "0"}
    } data-modal="true">
      <div className={`${styles.modalContent} ${styles.glass}`}>
        <p>Hello toi</p>
        <p>Bienvenu sur ce wiki des streamers / streameuses !</p>
        <p>LACHE TA SOURIS !! ELLE NE TE SERS À RIEN ICI (;</p>
        <p>Si tu manges des cartes graphiques appuye sur ENTRER</p>
      </div>
      <div className={styles.modalOuter}></div>
    </div>
  );
}

export default Modal;
