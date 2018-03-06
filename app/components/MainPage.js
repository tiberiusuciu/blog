import React, { Component } from 'react';

import TerminalBox from './TerminalBox';
import DetailsBox from './DetailsBox';
import CanvasBox from './CanvasBox';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					sdf
				</div>
				<div className={"col-8 " + styles.band}>
					<h1>Test!</h1>
					<p>This is a paragraph</p>
				</div>
				<div className="col">
					dsf
				</div>
			</div>
		)
	}
};

export default MainPage;

{/* <div className={styles.TerminalLayout + " col-xs-8"}>
	<TerminalBox
		onUserCurrentInput={this.props.onUserCurrentInput}
		userCurrentInput={this.props.userCurrentInput}
		onSubmitCurrentInput={this.props.onSubmitCurrentInput}
		userInputHistory={this.props.userInputHistory}
		user={this.props.user}
		logs={this.props.logs}
	/>
</div>
<div className={styles.InformationLayout + " col-xs-4"}>
	<div className={styles.CanvasLayout}>
		Test Canvas
	</div>
	<div className={styles.DetailsBox}>
		Test Details
	</div>
</div> */}
