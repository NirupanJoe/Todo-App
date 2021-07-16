import { createTheme } from '@material-ui/core';

const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#ef9a9a',
			contrastText: '##fff',
		},
		secondary: {
			main: '#e1bee7',
			contrastText: '##8e24aa',
		},
	},
});

export default darkTheme;
