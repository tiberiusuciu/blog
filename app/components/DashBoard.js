import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class DashBoard extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling + " " + styles.dashboardBlock}>
        <div className="col" ></div>
        <div className={"col-8 " + styles.noPadding}>
          <div className={"row " + styles.mainRowStyling + " " + styles.dashboardTextPadding}>
            Number of Posts: 0 posts
          </div>
        </div>
        <div className="col"></div>
			</div>
		)
	}
};

export default DashBoard;
