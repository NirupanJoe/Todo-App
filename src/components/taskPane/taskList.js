import { React } from 'react';
import context from '../../core/context';
import Task from './task';
import { Container } from '@material-ui/core';

const TaskList = () => {
	const { tasks } = context.state;

	return	<Container>{tasks.map(Task)}</Container>;
};

export default TaskList;
