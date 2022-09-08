import React from 'react';
import MeetupItem from './MeetupItem';

import classes from  './MeetupList.module.css';

const MeetupList = ({ meetups }) => {
	return (
		<ul className={classes.meetups}>
			{meetups.map((meetup) => (
				<MeetupItem key={meetup.id} meetup={meetup} />
			))}
		</ul>
	);
};

export default MeetupList;
