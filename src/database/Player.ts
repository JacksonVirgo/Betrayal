import { Unknown } from '@/backend/database/Role';
import { generateUsername } from 'unique-username-generator';
import { AlignmentList, Game, RoleList } from './Game';

type Alignment = 'Good' | 'Neutral' | 'Evil';

export interface Player {
	gameId: string;
	number: number;
	name: string;
	alignment?: Alignment | Unknown;
	role?: string;
}

export function fetchPlayers(gameId: string) {
	let result: Player[] = [];

	const fetchedGame: Game = {
		gameId: gameId,
		playerCount: 24,
	};

	for (let i = 0; i < fetchedGame.playerCount; i++) {
		result.push(fetchPlayer(gameId, { playerNumber: i + 1 }));
	}

	return result;
}

interface FetchQuery {
	playerNumber: number;
}
export function fetchPlayer(gameId: string, fetchQuery: FetchQuery) {
	let randomAlignment = AlignmentList[Math.floor(Math.random() * AlignmentList.length)] as Alignment;
	let randomRole = RoleList[Math.floor(Math.random() * RoleList.length)];
	let randomUsername = generateUsername();

	let returnValue: Player = {
		gameId,
		number: fetchQuery.playerNumber,
		name: randomUsername,
		role: randomRole,
		alignment: randomAlignment,
	};

	return returnValue;
}
