import React from "react";
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header>
          <nav className={classes.Topbar}>
            <img src='https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png' alt='Amazon Logo' />
          </nav>
        </header>
    );
}

export default Topbar;