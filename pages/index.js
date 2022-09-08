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
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos
				dignissimos reiciendis neque asperiores, sapiente deserunt voluptate.
				Dolorum officia dicta officiis aliquam, harum rem facere? Nobis
				doloremque quaerat dolorem earum!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
				maiores incidunt excepturi possimus, at enim accusantium mollitia error?
				Voluptates maiores doloremque est tenetur asperiores quaerat, totam
				ratione harum sapiente voluptas.
			</p>
		</>
	);
}
