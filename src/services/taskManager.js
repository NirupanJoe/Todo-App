const addTask = (tasks, task) => tasks.concat(task);

const removeTask = (tasks, task) => tasks.filter((data) => data.id !== task.id);

const taskManager = () => ({
	removeTask,
	addTask,
});

const TaskManager = taskManager();

export default TaskManager;
