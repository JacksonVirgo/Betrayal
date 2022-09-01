export interface ElementProps {
	onChangedValue?: (value: string) => void;
}
export interface CellProps {
	defaultValue?: string;
	onChangedValue?: (val: string) => void;
	disabled?: boolean;
}

export * from './AlignmentSelect';
export * from './RoleSelect';
export * from './EditableTextField';
