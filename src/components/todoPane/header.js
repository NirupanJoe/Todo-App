import { React } from 'react';
import { Box, Grid } from '@material-ui/core';
import ToggleAllButton from './toggleAllButton';
import TodoInput from './todoInput';
import ActionButton from './actionButton';

const Header = () =>
	<Box>
		<Grid
			container="true"
			justifyContent="center"
			alignItems="flex-end"
		>
			<Grid item="true" xs={ 2 }>{ ToggleAllButton() }</Grid>
			<Grid item="true" xs={ 4 }>{ TodoInput() }</Grid>
			<Grid item="true" xs={ 2 }>{ ActionButton() }</Grid>
		</Grid>
	</Box>;

export default Header;
