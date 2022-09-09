import { MongoClient } from 'mongodb';

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

export default function Home(props) {
	return (
		<>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// export const getServerSideProps = async (context) => {
// 	const { req, res } = context;
// 	// fetch data from server
// 	return {
// 		props: {
// 			meetups: MEETUPS,
// 		},
// 	};
// };

export async function getStaticProps() {
	const mongoUrl = process.env.MONGO_URI;
	const client = await MongoClient.connect(mongoUrl);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find().toArray();
	console.log(meetups);

	client.close();
	// fetch data from server
	return {
		props: {
			meetups: meetups?.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				// contact: meetup.contact,
				id: meetup._id.toString(),
			})),
		},
		/** revalidate is the number of seconds who next will wait until it 			 	generate this page for incoming requests
		 *
		 */
		revalidate: 10,
	};
}
