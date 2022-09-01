import { setCookie } from '@/utils/cookie';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAuthToken } from './login';

export async function refreshAuthToken(refreshToken: string) {
	const params = new URLSearchParams();
	params.append('client_id', process.env.DISCORD_CLIENT_ID || '');
	params.append('client_secret', process.env.DISCORD_CLIENT_SECRET || '');
	params.append('grant_type', 'authorization_code');
	params.append('refresh_token', refreshToken);

	const response = await axios.post('https://discord.com/api/v8/oauth2/token', params, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	return response.data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { code } = req.body;
	try {
		const { access_token, refresh_token, expires_in } = await getAuthToken(code);
		setCookie(res, 'access_token', access_token, expires_in);
		setCookie(res, 'refresh_token', refresh_token);
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ success: false, error: err });
	}
}
