import TaskList from "./taskList";

const TaskPane = () =>
	<div className="pane task-pane">
		<h3>Task</h3>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
