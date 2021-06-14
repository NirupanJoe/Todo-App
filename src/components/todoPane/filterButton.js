import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const FilterButton = (filter) => {
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;
	const style = filter === context.state.filter
		? 'active-btn-filter'
		: 'inactive-btn-filter';

	return noTodos
		? null
		: <span>
			<button
				key={ filter }
				className={ style }
				onClick={ () => context.actions.filterButton(filter) }
			>
				{ filter }
			</button>
		</span>;
};

export default FilterButton;
