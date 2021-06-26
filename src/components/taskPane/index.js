import TaskList from "./taskList";

const TaskPane = () =>
	<div className="task-pane pane">
		<h3>Task</h3>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
