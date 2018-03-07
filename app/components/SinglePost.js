import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class SinglePost extends Component {
	render() {
		return (
			<div className={"row " + styles.singlePostStyling + " " + styles.mainRowStyling}>
        <h2>This is a post!</h2>
			</div>
		)
	}
};

export default SinglePost;
