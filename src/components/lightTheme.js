import { createTheme } from '@material-ui/core';

const lightTheme = createTheme({
	palette: {
		primary: {
			main: '#f44336',
			contrastText: '#fff',
		},
		secondary: {
			main: '#ab47bc',
			contrastText: '#fff',
		},
	},
});

export default lightTheme;
