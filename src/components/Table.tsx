import { Player } from '@/database/Player';
import { RowData } from '@tanstack/react-table';
import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';

const TableContext = createContext<TableContent | undefined>(undefined);

interface ColumnHeader {
	label: string;
	width: string;
}

interface TableContent {
	columns: string[];
	rows: any[][];
}

type HeaderState = string[];
type RowDataState = any[][];
export default function Table({ columns, rows }: TableContent) {
	const [columnHeaders, setColumnHeaders] = useState<HeaderState>(columns);
	const [rowData, setRowData] = useState<RowDataState>(rows);

	return (
		<div className="flex flex-col">
			{rowData.map((row: any[], ind) => {
				return (
					<div
						key={ind}
						className="flex flex-row m-1 px-2"
						style={
							ind !== 0
								? {
										border: '1px solid black',
								  }
								: {}
						}
					>
						{row.map((cellData, index) => {
							return (
								<div key={index} style={{ flexBasis: columnHeaders[index], display: 'flex', flexDirection: 'column' }}>
									{cellData}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
