import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { connectToDatabase } from '../../utils/mongodb';
import { GetServerSidePropsContext } from 'next';
import Cookies from 'cookies';
import { type } from 'os';

type Props = {
	code: string;
};

const Login = (props: Props) => {
	const router = useRouter();
	const [redirect] = useState('https://discord.com/api/oauth2/authorize?client_id=1008865918736154655&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Flogin&response_type=code&scope=identify%20guilds%20guilds.members.read');

	const getAccessDetails = async (code: string) => {
		const userData = await axios.post('http://localhost:3000/api/auth/login', { code });
		if (userData.data.success) router.reload();
	};

	useEffect(() => {
		if (!router.isReady) return;
		const { code } = router.query;
		if (code && typeof code == 'string') getAccessDetails(code);
	}, [router.isReady]);

	return (
		<div className="text-black">
			<a href={redirect} className="underline">
				Login with Discord
			</a>
		</div>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {},
	};
}

export default Login;
