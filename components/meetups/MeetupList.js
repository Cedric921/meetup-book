import React from 'react';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) => {
	return (
		<ul>
			{meetups.map((meetup) => (
				<MeetupItem key={meetup.id} meetup={meetup} />
			))}
		</ul>
	);
};

export default MeetupList;
