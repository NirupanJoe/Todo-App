import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { Button, Box } from '@material-ui/core';

const FilterButton = (filter) => {
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;
	const style = filter === context.state.filter
		? 'default'
		: 'secondary';

	return noTodos
		? null
		: <Box key={ filter } component="span" m={ 1 }>
			<Button
				variant="contained"
				color={ style }
				onClick={ () => context.actions.filterButton(filter) }
			>
				{ filter }
			</Button>
		</Box>;
};

export default FilterButton;
