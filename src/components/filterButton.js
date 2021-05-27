import { React } from 'react';
import context from '../core/context';

const FilterButton = (filter) =>
	<button
		onClick={ () => context.actions.filterButton(filter) }
	>
		{ filter }
	</button>;

export default FilterButton;
