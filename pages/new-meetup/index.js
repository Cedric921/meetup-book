import React from 'react';
import NewMeetupForm from '../../components/meetups/newMeetupForm';

const NewMeetupPage = () => {
	const addMeetupHanler = async (newMeetup) => {
		await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(newMeetup),
			headers: { 'Content-Type': 'application/json' },
		});

		const data = await response.json();
		console.log(data);
	};
	return <NewMeetupForm onAdd={addMeetupHanler} />;
};

export default NewMeetupPage;
