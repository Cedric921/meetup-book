import React from 'react';
import NewMeetupForm from '../../components/meetups/newMeetupForm';

const NewMeetupPage = () => {
	const addMeetupHanler = () => {};
	return <NewMeetupForm onAdd={addMeetupHanler} />;
};

export default NewMeetupPage;
