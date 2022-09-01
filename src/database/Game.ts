import { Player } from './Player';

export const RoleList = 'Agent,Analyst,Biker,Cerberus,Detective,Fisherman,Gunman,Hero,Judge,Manager,Mecha,Medium,Nurse,Seraph,Terminal,Time Traveller,Undercover,Wizard,Yeti,Amalgamation,Backstabber,Banker,Bard,Bomber,Cheater,Cyborg,Entertainer,Ghost,Goliath,Incubus,Masochist,Mimic,Nephilim,Pathologist,Sidekick,Succubus,Tinkerer,Villager,Wanderer,Anarchist,Arsonist,Bartender,Consort,Cultist,Doll,Forsaken Angel,Gatekeeper,Hacker,Highwayman,Hunter,Imp,Jester,Juggernaut,Overlord,Phantom,Psychotherapist,Slaughterer,Threatener,Witchdoctor'.split(',');
export const AlignmentList = 'Good,Neutral,Evil'.split(',');

export interface Game {
	gameId: string;
	playerCount: number;
}
