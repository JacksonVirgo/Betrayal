import { Rarity } from './Item';

export type Alignment = 'Good' | 'Neutral' | 'Evil';
export type Unknown = '?';
export type RolePortionType = 'Ability' | 'Perk';
export type NegativeStatusEffect = 'Curse' | 'Freeze' | 'Paralyze' | 'Burn' | 'Drunk' | 'Restrain' | 'Disable' | 'Blackmail' | 'Despair' | 'Unlucky';
export type PositiveStatusEffect = 'Empower' | 'Lucky';
export type StatusEffect = NegativeStatusEffect | PositiveStatusEffect;
export type Immunities = StatusEffect | '1-shot Elimination' | 'Death' | '1-shot Death';

export interface Ability {
	name: string;
	details: string;
	baseCharges?: number;
	baseRole: string;
	AA?: AnyAbility;
}
export interface AnyAbility {
	roleLocks: string[];
	rarity: Rarity;
}
export interface Perk {
	name: string;
	details: string;
}
export interface RolePortion {
	type: RolePortionType;
	name: string;
	details: string;
}
export interface Ability {
	name: string;
	charges: number | undefined;
}
export interface Role {
	name: string;
	alignment: Alignment;
	abilities: string[];
	perks: string[];
	immunities: Immunities[];
}
