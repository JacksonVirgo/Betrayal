import type { NextApiRequest, NextApiResponse } from 'next';
import { removeCookie } from '@/utils/cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		removeCookie(res, 'accessToken');
		removeCookie(res, 'refreshToken');
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(500).json({ success: false });
	}
}
