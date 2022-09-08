import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
	{
		id: 'm1',
		title: 'first meetup',
		image:
			'https://dwj199mwkel52.cloudfront.net/assets/core/banners/banner-home-4f942e047c0e2c428d7b4f19dbf9704327349fa6dda769e1add5b2ec26991b94.jpg',
		address: 'goma, katoyi',
		description: 'first meetup description',
	},
	{
		id: 'm2',
		title: 'second meetup',
		image:
			'https://dwj199mwkel52.cloudfront.net/assets/core/banners/banner-home-4f942e047c0e2c428d7b4f19dbf9704327349fa6dda769e1add5b2ec26991b94.jpg',
		address: 'goma, himbi',
		description: 'second  meetup description',
	},
];

export default function Home() {
	const [meetups, setMeetups] = useState([]);

	useEffect(() => {
		// set a http request to get meetups from the server
		setMeetups(MEETUPS);
	}, []);
	return (
		<>
			<MeetupList meetups={meetups} />
		</>
	);
}
