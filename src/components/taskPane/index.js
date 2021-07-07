import TaskList from "./taskList";
import { Grid } from '@material-ui/core';

const TaskPane = () =>
	<Grid item="true" xs={ 6 } className="pane task-pane">
		<h3>Task</h3>
		<div >{ TaskList() }</div>
	</Grid>

export default TaskPane;
