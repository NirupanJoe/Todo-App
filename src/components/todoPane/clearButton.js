import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import Button from '@material-ui/core/Button';

const ClearButton = () => {
	const noCompletedTodo = TodoManager.getCompletedTodo(context.state.todos)
	=== 0;

	return noCompletedTodo
		? null
		: <span>
			<Button
				variant="contained"
				color="default"
				onClick={ context.actions.clearButton }
			>
				<DeleteSweepTwoToneIcon/>
			</Button>
		</span>;
};

export default ClearButton;
