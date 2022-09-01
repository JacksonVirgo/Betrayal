import { MongoClient, MongoClientOptions, Db } from 'mongodb';
import { Collection, Document, ObjectId } from 'mongoose';

let uri = process.env.MONGODB_URI || '';
let dbName = process.env.MONGODB_DB || '';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

type DBCollections = 'discord-users' | 'betrayal-games' | 'betrayal-players';

const getCollection = (label: DBCollections) => {
	if (!cachedDb) throw Error('Function called without database being initialized');
	return cachedDb.collection(label);
};

if (!uri) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!dbName) {
	throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

export async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb, getCollection };
	}

	const options: MongoClientOptions = {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
	};

	const client = await MongoClient.connect(uri, options);
	const db = client.db(dbName);

	cachedClient = client;
	cachedDb = db;
	return { client, db, getCollection };
}
