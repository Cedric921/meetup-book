import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/newMeetupForm';

const NewMeetupPage = () => {
	const router = useRouter();
	const addMeetupHanler = async (newMeetup) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(newMeetup),
			headers: { 'Content-Type': 'application/json' },
		});

		const data = await response.json();
		console.log(data);
		router.push('/');
	};
	return <NewMeetupForm onAdd={addMeetupHanler} />;
};

export default NewMeetupPage;
