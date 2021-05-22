import { React } from 'react';
import context from '../core/context';

const AddButton = () =>
	<button onClick={ context.actions.addButton }>
		Add
	</button>;

export default AddButton;
