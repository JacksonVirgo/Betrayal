import Table from '@/components/Table';
import React, { useEffect, useState } from 'react';
import { Player } from '../database/Player';
import { generateUsername } from 'unique-username-generator';
import { Alignment, Unknown } from '@/backend/database/Role';
import { AlignmentSelect, EditableTextField, RoleSelect } from '@/components/game/elements';
import axios from 'axios';
import { trpc } from '@/utils/trpc';

const headerDefaults = ['2rem', '20rem', '10rem', '10rem'];
const createHeaderRow = () => ['#', <EditableTextField defaultValue="Name" disabled />, <EditableTextField defaultValue="Alignment" disabled />, <EditableTextField defaultValue="Role" disabled />];
const createPlayerRow = ({ number, name, alignment, role }: Player) => [number, <EditableTextField defaultValue={name} />, <AlignmentSelect defaultValue={alignment} />, <RoleSelect defaultValue={role} />];

const formatPlayerData = (players: Player[]) => {
	let result: any[] = [createHeaderRow()];
	for (const player of players) {
		result.push(createPlayerRow(player));
	}
	return result;
};

function App() {
	//[createPlayerRow({ gameId: 'test', number: 1, name: 'Melancholic', alignment: 'Good' }), createPlayerRow({ gameId: 'test', number: 2, name: 'EqsyLoots', alignment: 'Evil', role: 'Highwayman' }), createPlayerRow({ gameId: 'test', number: 23, name: 'Lunexia', alignment: 'Neutral' })]
	const [rowData, setData] = useState<any[] | null>(null);

	const { data, isLoading } = trpc.useQuery(['hello']);

	const fetchPlayerData = async () => {
		try {
		} catch (err) {}
	};

	useEffect(() => {
		fetchPlayerData();
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<div className="flex flex-row grow h-full">
				<div className="grow bg-slate-200 flex flex-col h-full">
					<div className="bg-survival h-40 bg-center flex flex-col-reverse shadow-lg shadow-black drop-shadow-2xl p-4">
						<h1 className="text-white capitalize text-3xl font-extrabold ">Betrayal Game</h1>
					</div>
					<div className="p-2 py-4 overflow-auto block h-full">{rowData ? <Table columns={headerDefaults} rows={rowData} /> : ''}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
