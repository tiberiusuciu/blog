import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class NavigatorBar extends Component {
	render() {
		return (
			<div className={"row " + styles.navigatorBar + " " + styles.mainRowStyling}>
				<h1>Hello!!!</h1>
			</div>
		)
	}
};

export default NavigatorBar;
