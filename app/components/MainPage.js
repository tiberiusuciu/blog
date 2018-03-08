import React, { Component } from 'react';

import PostList from './PostList';
import DashBoard from './DashBoard';
import NavigatorBar from './NavigatorBar';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling + " " + styles.mainBody}>
				<NavigatorBar />
				<div className={"col-12 " + styles.noPadding}>
					<DashBoard />
				</div>
				<div className={"col-12 " + styles.noPadding}>
					<div className={"row " + styles.mainRowStyling}>
						<div className="col" ></div>
						<div className={"col-8 " + styles.noPadding}>
							<PostList />
						</div>
						<div className="col"></div>
					</div>
				</div>
			</div>
		)
	}
};

export default MainPage;
