import React from 'react';

import classes from './MeetupDetails.module.css';

const MeetupDetails = ({ meetup }) => {
	console.log('details =>', meetup);
	return (
		<>
			<div className={classes.meetup}>
				<div className={classes.image}>
					<img alt={meetup?.title} src={meetup?.image} />
				</div>
				<h2>{meetup?.title}</h2>
				<address>{meetup?.address}</address>
				<p> {meetup?.description}</p>
			</div>
		</>
	);
};

export default MeetupDetails;
