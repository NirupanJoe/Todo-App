import { React } from 'react';
import context from '../../core/context';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Remote from '../../services/remote';

const AddButton = () =>
	<Button
		variant="contained"
		color="primary"
		disabled={ context.state.input === '' }
		onClick={ () => Remote.createTodo(context.state) }
	>
		<AddCircleOutlineIcon color="secondary"/>
	</Button>;

export default AddButton;
