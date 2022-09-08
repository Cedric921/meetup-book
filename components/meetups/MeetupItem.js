import Image from 'next/image';
import React from 'react';

const MeetupItem = ({ meetup }) => {
	return (
		<div>
			<h2>{meetup.title}</h2>
			<Image src={meetup.image} alt={meetup.title} />
			<p>{meetup.address}</p>
		</div>
	);
};

export default MeetupItem;
