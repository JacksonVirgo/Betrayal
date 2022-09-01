import { throws } from 'assert';
import { NextApiRequest, NextApiResponse } from 'next';

export type Endpoint<T> = (req: NextApiRequest, res: NextApiResponse<T>) => any;

export class RestEndpoint<T> {
	private getEndpoint: Endpoint<T> | undefined;
	private postEndpoint: Endpoint<T> | undefined;
	constructor() {
		this.run = this.run.bind(this);
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
	}

	public get(endpoint: Endpoint<T>) {
		console.log('Loaded Get');
		this.getEndpoint = endpoint;
		return this;
	}
	public post(endpoint: Endpoint<T>) {
		this.postEndpoint = endpoint;
		return this;
	}
	public run(req: NextApiRequest, res: NextApiResponse<T>) {
		const { method } = req;
		if (method === 'GET' && this.getEndpoint) return this.getEndpoint(req, res);
		else if (method === 'POST' && this.postEndpoint) return this.postEndpoint(req, res);
		else {
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
			return;
		}
	}
}
