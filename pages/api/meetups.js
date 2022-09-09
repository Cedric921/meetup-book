import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'GET') {
		const client = await MongoClient.connect(mongoUrl);
		const db = client.db();

		const meetupsCollection = db.collection('meetups');
		const result = meetupsCollection.find();
		console.log(result);

		client.close();

		res.status(200).json({
			meetups: result,
		});
	}
};
