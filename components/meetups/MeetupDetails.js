import React from 'react';

import classes from './MeetupDetails.module.css'

const MeetupDetails = () => {
	return (
		<>
			<div className={classes.meetup}>
				<div className={classes.image}>
					<img alt='meetup image' />
				</div>
				<h2>Meet up title</h2>
				<address>meet up address</address>
				<p> meet up description</p>
			</div>
		</>
	);
};

export default MeetupDetails;
