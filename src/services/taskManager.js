import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import context from '../core/context';

const getTask = (text) => (
	{
		id: rndString(config.idLength),
		text: text,
	});

const init = () => {
	context.actions.addTask('Task 1');
	context.actions.addTask('Task 2');
	context.actions.addTask('Task 3');
};

const addTask = (tasks, text) =>
	(tasks === '' ? tasks : tasks.concat(getTask(text)));

const removeTask = (tasks, task) => tasks.filter((data) => data.id !== task.id);

const taskManager = () => ({
	init,
	removeTask,
	addTask,
});

const TaskManager = taskManager();

export default TaskManager;
