import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
	{
		id: 'm1',
		title: 'first meetup',
		image: '',
		address: 'goma, katoyi',
		description: 'first meetup description',
	},
	{
		id: 'm2',
		title: 'second meetup',
		image: '',
		address: 'goma, himbi',
		description: 'second  meetup description',
	},
];

export default function Home() {
	return (
		<>
			<MeetupList meetups={MEETUPS} />
		</>
	);
}
