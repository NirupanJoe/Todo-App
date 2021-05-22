import { React } from 'react';
import context from '../core/context';

const TodoInputColor = () =>
	<input
		value={ context.state.color }
		onChange={ (evt) => context.actions.updateColor(evt.target.value) }
	/>;

export default TodoInputColor;
