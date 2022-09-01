import { Alignment, Unknown } from '@/backend/database/Role';
import { useState } from 'react';
import { ElementProps } from '.';

const alignmentList: Alignment[] = ['Good', 'Neutral', 'Evil'];
interface AlignmentSelectProps extends ElementProps {
	defaultValue?: Alignment | Unknown;
}
export function AlignmentSelect({ onChangedValue, defaultValue }: AlignmentSelectProps) {
	const [initialFocus, setFocus] = useState<Alignment | Unknown>(defaultValue || '?');
	const handleChange = (val: Alignment | Unknown) => {
		if (onChangedValue) onChangedValue(val);
		setFocus(val);
	};

	return (
		<select className="bg-inherit mr-2" onChange={(e) => handleChange(e.target.value as Alignment | Unknown)}>
			<option selected={initialFocus === '?'}>?</option>
			{alignmentList.map((align, index) => {
				return (
					<option key={index} selected={initialFocus === align}>
						{align}
					</option>
				);
			})}
		</select>
	);
}
