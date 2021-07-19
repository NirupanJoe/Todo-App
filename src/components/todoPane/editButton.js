import { React } from 'react';
import context from '../../core/context';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Tooltip } from '@material-ui/core';

const EditButton = () =>
	<Button
		variant="contained"
		disabled={ context.state.editing === null }
		onClick={ context.actions.editingTodo }
	>
		<Tooltip title="Edit"><EditIcon color="primary"/></Tooltip>
	</Button>;

export default EditButton;
