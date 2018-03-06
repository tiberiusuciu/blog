import React, { Component } from 'react';

import PostList from './PostList';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling}>
				<div className="col" ></div>
				<div className={"col-8 " + styles.noPadding}>
					<PostList />
				</div>
				<div className="col"></div>
			</div>
		)
	}
};

export default MainPage;
