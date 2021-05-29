/* eslint-disable indent */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const FilterButton = (filter) => {
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return noTodos
		? null
		: <button
				key={ filter }
				onClick={ () => context.actions.filterButton(filter) }
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		  >
			{ filter }
		</button>;
};

export default FilterButton;
