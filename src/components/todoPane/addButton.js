import { React } from 'react';
import context from '../../core/context';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const AddButton = () =>
	<Button
		variant="contained"
		color="primary"
		disabled={ context.state.input === '' }
		onClick={ context.actions.addTodo }
	>
		<AddCircleOutlineIcon color="secondary"/>
	</Button>;

export default AddButton;
