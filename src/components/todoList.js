import { React } from 'react';
import context from '../core/context';
import Todo from './todo';

const AddList = () =>
	<div> {context.state.todos.map(Todo)} </div>;

export default AddList;
