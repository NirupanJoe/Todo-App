import { React } from 'react';
import context from '../../core/context';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const EditButton = () =>
	<Button
		disabled={ context.state.editing === null }
		onClick={ context.actions.editingTodo }
	>
		<EditIcon/>
	</Button>;

export default EditButton;
