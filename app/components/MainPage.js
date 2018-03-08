import React, { Component } from 'react';

import PostList from './PostList';
import NavigatorBar from './NavigatorBar';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling}>
				<NavigatorBar />
				<div className={"col-12 " + styles.noPadding}>
				<div className={"row " + styles.mainRowStyling + " " + styles.dashboardBlock}>
					<div className={"col-12 " + styles.noPadding}>
						<div className={"row " + styles.mainRowStyling}>
							<div>This is a test</div>
						</div>
					</div>
				</div>
				</div>
				<div className={"col-12 " + styles.noPadding}>
					<div className={"row " + styles.mainRowStyling}>
						<div className="col" ></div>
						<div className={"col-8 " + styles.noPadding}>
							<div className={"row " + styles.mainRowStyling}>
								<PostList />
							</div>
						</div>
						<div className="col"></div>
					</div>
				</div>
			</div>
		)
	}
};

export default MainPage;
