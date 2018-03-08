import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class DashBoard extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling + " " + styles.dashboardBlock}>
        This is a test
			</div>
		)
	}
};

export default DashBoard;
