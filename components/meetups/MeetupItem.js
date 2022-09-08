import Image from 'next/image';
import React from 'react';

import classes from './MeetupItem.module.css'

const MeetupItem = ({ meetup }) => {
	return (
		<div className={classes.singleMeetup}>
			<h2>{meetup.title}</h2>
			<Image src={meetup.image} alt={meetup.title} />
			<p>{meetup.address}</p>
		</div>
	);
};

export default MeetupItem;
