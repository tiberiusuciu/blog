import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class NavigatorBar extends Component {
	render() {
		return (
			<div className={"row " + styles.navigatorBar + " " + styles.mainRowStyling}>
        <div className={"col " + styles.noPadding}></div>
				<div className={"col-8 align-self-center " + styles.noPadding}>
          <div className={"row " + styles.mainRowStyling}>
            <div className={"col " + styles.navButton}>ABOUT</div>
            <div className={"col " + styles.navButton}>IMAGES</div>
            <div className={"col " + styles.navButton}>EVENT</div>
            <div className={"col-4"}>
              <h1>TIBERIUS</h1>
            </div>
            <div className={"col " + styles.navButton}>GAMES</div>
            <div className={"col " + styles.navButton}>DEV</div>
            <div className={"col " + styles.navButton}>MISC</div>
          </div>
        </div>
        <div className={"col " + styles.noPadding}></div>
			</div>
		)
	}
};

export default NavigatorBar;
