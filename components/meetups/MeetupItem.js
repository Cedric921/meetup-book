import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import classes from './MeetupItem.module.css';

const MeetupItem = ({ meetup }) => {
	const router = useRouter();
   const showDetails = () => {
      router.push(`/${meetup.id}`);
   };
	return (
		<div className={classes.singleMeetup}>
			<div className={classes.image}>
				<img src={meetup.image} alt={meetup.title} />
			</div>
			<h2>{meetup.title}</h2>
			<p>{meetup.address}</p>
			<div className={classes.actions}>
				<button onClick={showDetails}>More</button>
			</div>
		</div>
	);
};

export default MeetupItem;
