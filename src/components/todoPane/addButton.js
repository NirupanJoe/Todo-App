import { React } from 'react';
import context from '../../core/context';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const AddButton = () =>
	<Button
		className="btn"
		variant="contained"
		color="primary"
		disabled={ context.state.input === '' }
		onClick={ context.actions.addTodo }
	>
		<AddCircleOutlineIcon/>
	</Button>;

export default AddButton;
