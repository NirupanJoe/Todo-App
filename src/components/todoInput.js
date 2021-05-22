import { React } from 'react';
import context from '../core/context';

// const actionKeys = {
// 	Enter: () => context.actions.addTodo(),
// 	Escape: () => context.actions.updateInput(''),
// };

const TodoInput = () =>
	<input
		value={ context.state.input }
		onChange={ context.actions.updateInput }
		// onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default TodoInput;
