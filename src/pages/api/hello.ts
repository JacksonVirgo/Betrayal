import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { setCookie } from '@/utils/cookie';
import UserSchema from '@/../backend/database/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log('Hello.');
	try {
		const newUser = new UserSchema({ discordId: 'F' });
		const saved = await newUser.save();

		console.log(saved);

		res.status(200).json({ error: false });
	} catch (err) {
		res.status(500).json({ error: true, err });
	}
	console.log('End.');
}
