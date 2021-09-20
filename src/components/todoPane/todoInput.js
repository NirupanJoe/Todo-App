import { React } from 'react';
import context from '../../core/context';
import { TextField } from '@material-ui/core';
import Remote from '../../services/remote';

const getEnterKeyAction = () =>
	(context.state.editing
		? Remote.editingTodo(context.state)
		: Remote.createTodo(context.state.input));

const actionKeys = {
	Enter: () => getEnterKeyAction(),
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
