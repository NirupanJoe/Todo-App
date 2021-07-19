import AddList from './todoList';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ThemeSelect from './themeSelect';
import { Box, Typography } from '@material-ui/core';
import Header from './header';

const TodoPane = () => {

	return (
		<Box className="pane todo-pane"height="100vh" overflow="auto">
			<Typography variant="h4" color="error">Todo</Typography>
			{ Header() }
			{ AddList() }
			{ ClearButton() }
			{ FilterBar() }
			{ ThemeSelect() }
		</Box>
	);
};

export default TodoPane;
