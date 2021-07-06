import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { Button, Box } from '@material-ui/core';

const Color = {
	all: 'default',
	active: 'primary',
	completed: 'secondary',
};

const FilterButton = (filter) => {
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;
	// const style = filter === context.state.filter
	// 	? 'active-btn-filter'
	// 	: 'inactive-btn-filter';

	return noTodos
		? null
		: <Box component="span" m={ 1 }>
			<Button
				key={ filter }
				variant="contained"
				color={ Color[filter] }
				onClick={ () => context.actions.filterButton(filter) }
			>
				{ filter }
			</Button>
		</Box>;
};

export default FilterButton;
