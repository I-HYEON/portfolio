import React from 'react';
import styles from './NavigationBar.module.css'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return ( 
    <div className={styles.NavigationContainer}>
      <Link to='/'>Home</Link>
      <Link to='/introducing'>About</Link>
      <Link to='/drawing'>Drawing</Link>
    </div>
    );
}

export default NavigationBar;