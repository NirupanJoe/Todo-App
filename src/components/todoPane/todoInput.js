import { React } from 'react';
import context from '../../core/context';
import { TextField } from '@material-ui/core';

const getEnterKeyAction = () =>
	(context.state.editing ? 'editingTodo' : 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterKeyAction()](),
	Escape: () => context.actions.updateInput(''),
};

const TodoInput = () =>
	<TextField
		label="Text"
		className="input"
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default TodoInput;
