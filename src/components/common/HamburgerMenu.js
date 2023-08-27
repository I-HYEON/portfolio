import React from 'react';
import styles from './HamburgerMenu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default HamburgerMenu;
