import { CellProps } from '.';
import { useState } from 'react';

export function EditableTextField({ defaultValue, onChangedValue, disabled }: CellProps) {
	const [value, setValue] = useState<string>();
	const handleValue = (val: string) => {
		setValue(val);
	};
	return <input defaultValue={defaultValue} onChange={(e) => handleValue(e.target.value)} className="bg-inherit mr-2" disabled={!!disabled} spellCheck={false} />;
}
