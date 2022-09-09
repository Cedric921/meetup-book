import React from 'react';
import NewMeetupForm from '../../components/meetups/newMeetupForm';

const NewMeetupPage = () => {
	const addMeetupHanler = (newMeetup) => {
		console.log(newMeetup);
	};
	return <NewMeetupForm onAdd={addMeetupHanler} />;
};

export default NewMeetupPage;
