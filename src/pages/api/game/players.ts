import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchPlayers } from '@/database/Player';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const players = fetchPlayers('Test');
		res.status(200).json({ players });
	} catch (err) {
		res.status(500).json({ error: true, err });
	}
}
