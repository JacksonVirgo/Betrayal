import Table from '@/components/Table';
import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useId, useState } from 'react';
import { Player } from '../database/Player';
import { generateUsername } from 'unique-username-generator';
import { Alignment, Unknown } from '@/../backend/database/Role';
import Head from 'next/head';
import { AlignmentSelect, RoleSelect } from '@/components/game/TableElements';

type CellProps = {
	defaultValue?: string;
	onChangedValue?: (val: string) => void;
	disabled?: boolean;
};
function EditableSpan({ defaultValue, onChangedValue, disabled }: CellProps) {
	const [value, setValue] = useState<string>();
	const handleValue = (val: string) => {
		setValue(val);
	};
	return <input defaultValue={defaultValue} onChange={(e) => handleValue(e.target.value)} className="bg-inherit mr-2" disabled={!!disabled} spellCheck={false} />;
}
function Heading({ defaultValue }: CellProps) {
	return <input defaultValue={defaultValue} className="bg-inherit mr-2" disabled />;
}

function createHeaderRow() {
	let result = ['#', <Heading defaultValue="Name" />, <Heading defaultValue="Alignment" />, <Heading defaultValue="Role" />];
	return result;
}

type DropDownProps = {
	currentSelected: string;
	options: string[];
};
function createPlayerRow({ gameId, number, name, alignment, role }: Player): any[] {
	let result = [number, <EditableSpan defaultValue={name} />, <AlignmentSelect defaultValue={alignment} />, <RoleSelect defaultValue={role} />];
	return result;
}

const headerDefaults = ['2rem', '20rem', '10rem', '10rem'];

/*

Load it all. Have each row dynamically created on component load.
Have the appropriate update/change method callbacks change the relevant shite.

*/

const createRandomData = (amount: number, withHeaders?: boolean) => {
	let result = [createHeaderRow()];
	let gameId = 'test';
	let allRoles = '?,Agent,Analyst,Biker,Cerberus,Detective,Fisherman,Gunman,Hero,Judge,Manager,Mecha,Medium,Nurse,Seraph,Terminal,Time Traveller,Undercover,Wizard,Yeti,Amalgamation,Backstabber,Banker,Bard,Bomber,Cheater,Cyborg,Entertainer,Ghost,Goliath,Incubus,Masochist,Mimic,Nephilim,Pathologist,Sidekick,Succubus,Tinkerer,Villager,Wanderer,Anarchist,Arsonist,Bartender,Consort,Cultist,Doll,Forsaken Angel,Gatekeeper,Hacker,Highwayman,Hunter,Imp,Jester,Juggernaut,Overlord,Phantom,Psychotherapist,Slaughterer,Threatener,Witchdoctor'.split(',');
	let alignments: (Alignment | Unknown)[] = ['?', 'Good', 'Neutral', 'Evil'];

	for (let i = 0; i < amount; i++) {
		let username = generateUsername();
		let role = allRoles[Math.floor(Math.random() * allRoles.length)];
		let alignment = alignments[Math.floor(Math.random() * alignments.length)];

		let data: Player = { gameId, number: i + 1, name: username, alignment, role };
		let playerData = createPlayerRow(data);

		result.push(playerData);
	}

	console.log(result.length);
	return result;
};

function App() {
	//[createPlayerRow({ gameId: 'test', number: 1, name: 'Melancholic', alignment: 'Good' }), createPlayerRow({ gameId: 'test', number: 2, name: 'EqsyLoots', alignment: 'Evil', role: 'Highwayman' }), createPlayerRow({ gameId: 'test', number: 23, name: 'Lunexia', alignment: 'Neutral' })]
	const [data, setData] = useState(createRandomData(30, true));

	return (
		<div className="flex flex-col h-screen">
			<div className="flex flex-row grow h-full">
				<div className="grow bg-slate-200 flex flex-col h-full">
					<div className="bg-survival h-40 bg-center flex flex-col-reverse shadow-lg shadow-black drop-shadow-2xl p-4">
						<h1 className="text-white capitalize text-3xl font-extrabold ">Betrayal Game</h1>
					</div>
					<div className="p-2 py-4 overflow-auto block h-full">
						<Table columns={headerDefaults} rows={data} />
					</div>
				</div>
				{/* <div className="w-60 bg-white" /> */}
			</div>
		</div>
	);
}

export default App;
