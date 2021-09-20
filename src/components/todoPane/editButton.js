import { React } from 'react';
import context from '../../core/context';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Tooltip } from '@material-ui/core';
import Remote from '../../services/remote';

const EditButton = () =>
	<Button
		variant="contained"
		disabled={ context.state.input === '' }
		onClick={ () => Remote.editingTodo(context.state) }
	>
		<Tooltip title="Edit"><EditIcon color="primary"/></Tooltip>
	</Button>;

export default EditButton;
