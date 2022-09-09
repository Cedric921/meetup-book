import { MongoClient } from 'mongodb';
//  /api/new-meetup

const handler = async (req, res) => {
	const mongoUrl = process.env.MONGO_URI;
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(mongoUrl);
		const db = client.db();

		const meetupsCollection = db.collection('meetups');
		const result = await meetupsCollection.insertOne(data);
		console.log(result);

		client.close();

		res.status(201).json({
			message: 'meetup inserted',
		});
	}
};

export default handler;
