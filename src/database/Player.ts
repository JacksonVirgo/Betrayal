import { Unknown } from '@/../backend/database/Role';

type Alignment = 'Good' | 'Neutral' | 'Evil';

export interface Player {
	gameId: string;
	number: number;
	name: string;
	alignment?: Alignment | Unknown;
	role?: string;
}
