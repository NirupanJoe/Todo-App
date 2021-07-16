import { React } from 'react';
import context from '../../core/context';
import { Button, Grid } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const AddButton = () =>
	<Grid item="true" xs={ 2 }>
		<Button
			variant="contained"
			color="primary"
			disabled={ context.state.input === '' }
			onClick={ context.actions.addTodo }
		>
			<AddCircleOutlineIcon color="secondary"/>
		</Button>
	</Grid>;

export default AddButton;
