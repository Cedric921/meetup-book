import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const mongoUrl = process.env.MONGO_URI;
const Index = (props) => {
	const meetupData = JSON.parse(props.meetupData);
	return <MeetupDetails meetup={meetupData} />;
};

export async function getStaticPaths() {
	const mongoUrl = process.env.MONGO_URI;

	const client = await MongoClient.connect(mongoUrl);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');
	const meetupsId = await meetupsCollection.find({}, { _id: 1 }).toArray();
	console.log('ids =>', meetupsId);

	client.close();
	return {
		fallback: false,
		paths: meetupsId.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export const getStaticProps = async (context) => {
	const id = context.params.meetupId;
	console.log('id =>', id);

	// fetch single meetup from server
	const mongoUrl = process.env.MONGO_URI;

	const client = await MongoClient.connect(mongoUrl);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');
	const singleMeetup = await meetupsCollection.findOne({ _id: ObjectId(id) });
	console.log('single meetup', singleMeetup);

	client.close();

	return {
		props: {
			meetupData: JSON.stringify(singleMeetup),
		},
	};
};

export default Index;
