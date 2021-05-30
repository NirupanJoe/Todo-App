import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import context from '../core/context';

const getTask = (text) => (
	{
		id: rndString(config.idLength),
		text: text,
	});

const init = () => context.actions.setTasks([
	getTask('Task 1'),
	getTask('Task 2'),
	getTask('Task 3'),
]);

const removeTask = (tasks, task) => tasks.filter((data) => data.id !== task.id);

const taskManager = () => ({
	init,
	removeTask,
});

const TaskManager = taskManager();

export default TaskManager;
