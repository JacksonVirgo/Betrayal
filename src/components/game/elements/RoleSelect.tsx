import { Unknown } from '@/backend/database/Role';
import { useState } from 'react';
import { ElementProps } from '.';

const roleList = 'Agent,Analyst,Biker,Cerberus,Detective,Fisherman,Gunman,Hero,Judge,Manager,Mecha,Medium,Nurse,Seraph,Terminal,Time Traveller,Undercover,Wizard,Yeti,Amalgamation,Backstabber,Banker,Bard,Bomber,Cheater,Cyborg,Entertainer,Ghost,Goliath,Incubus,Masochist,Mimic,Nephilim,Pathologist,Sidekick,Succubus,Tinkerer,Villager,Wanderer,Anarchist,Arsonist,Bartender,Consort,Cultist,Doll,Forsaken Angel,Gatekeeper,Hacker,Highwayman,Hunter,Imp,Jester,Juggernaut,Overlord,Phantom,Psychotherapist,Slaughterer,Threatener,Witchdoctor'.split(',');
interface RoleSelectProps extends ElementProps {
	defaultValue?: string | Unknown;
}
export function RoleSelect({ onChangedValue, defaultValue }: RoleSelectProps) {
	const [initialFocus, setFocus] = useState<string | Unknown>(defaultValue || '?');
	const handleChange = (val: string | Unknown) => {
		if (onChangedValue) onChangedValue(val);
		setFocus(val);
	};

	return (
		<select className="bg-inherit mr-2" onChange={(e) => handleChange(e.target.value as string | Unknown)}>
			<option selected={initialFocus === '?'}>?</option>
			{roleList.map((align, index) => {
				return (
					<option key={index} selected={initialFocus === align}>
						{align}
					</option>
				);
			})}
		</select>
	);
}
