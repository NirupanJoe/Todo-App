import { React } from 'react';
import context from '../../core/context';
import Button from '@material-ui/core/Button';

const AddButton = () =>
	<Button
		style={ { verticalAlign: 'bottom' } }
		className="btn"
		variant="contained"
		color="primary"
		disabled={ context.state.input === '' }
		onClick={ context.actions.addTodo }
	>
		+
	</Button>;

export default AddButton;
