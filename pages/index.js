import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
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
	console.log('from getStaticProps', meetups);

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
		revalidate: 10,
	};
}
