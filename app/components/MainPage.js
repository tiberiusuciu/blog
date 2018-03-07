import React, { Component } from 'react';

import PostList from './PostList';
import NavigatorBar from './NavigatorBar';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling}>
				<NavigatorBar />
				<div className="col" ></div>
				<div className={"col-8 " + styles.noPadding}>
					<div className={"row " + styles.mainRowStyling}>
						<PostList />
					</div>
				</div>
				<div className="col"></div>
			</div>
		)
	}
};

export default MainPage;
