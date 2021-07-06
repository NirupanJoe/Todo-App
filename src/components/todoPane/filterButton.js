import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import Button from '@material-ui/core/Button';

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
		: <span>
			<Button
				key={ filter }
				variant="contained"
				color={ Color[filter] }
				onClick={ () => context.actions.filterButton(filter) }
			>
				{ filter }
			</Button>
		</span>;
};

export default FilterButton;
