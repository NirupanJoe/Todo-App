import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import { Button, Box } from '@material-ui/core';

const ClearButton = () => {
	const noCompletedTodo = TodoManager.getCompletedTodo(context.state.todos)
	=== 0;

	return noCompletedTodo
		? null
		: <Box component="span">
			<Button
				variant="outline"
				color="default"
				onClick={ context.actions.clearButton }
			>
				<DeleteSweepTwoToneIcon color="action"/>
			</Button>
		</Box>;
};

export default ClearButton;
