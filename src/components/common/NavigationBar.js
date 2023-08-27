import React from 'react';
import styles from './NavigationBar.module.css'
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return ( 
    <div className={styles.NavigationContainer}>
      <FontAwesomeIcon icon={faHeart} />
      <Link to='/'className={styles.links} >Home</Link>
      <Link to='/introducing' className={styles.links}>Introducing</Link>
      <Link to='/drawing' className={styles.links}>Drawing</Link>
      <HamburgerMenu />
    </div>
    );
}

export default NavigationBar;