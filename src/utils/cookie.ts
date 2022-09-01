import { NextApiResponse } from 'next';
import Cookies from 'cookie';

export function setCookie(res: NextApiResponse, key: string, value: string, expiry?: number) {
	res.setHeader(
		'Set-Cookie',
		Cookies.serialize(key, value, {
			httpOnly: true,
			secure: process.env.NODE_ENV != 'development',
			maxAge: expiry ?? 60 * 60,
			sameSite: 'strict',
			path: '/',
		})
	);
}

export function removeCookie(res: NextApiResponse, key: string) {
	res.setHeader(
		'Set-Cookie',
		Cookies.serialize(key, '', {
			httpOnly: true,
			secure: process.env.NODE_ENV != 'development',
			maxAge: new Date(0).getTime(),
			sameSite: 'strict',
			path: '/',
		})
	);
}
