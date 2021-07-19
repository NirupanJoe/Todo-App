import TaskList from "./taskList";
import { Box, Grid, Typography } from '@material-ui/core';

const TaskPane = () =>
	<Box className="pane task-pane"height="100vh"overflow="auto">
		<Typography variant="h4">Task</Typography>
		{ TaskList() }
	</Box>;

export default TaskPane;
