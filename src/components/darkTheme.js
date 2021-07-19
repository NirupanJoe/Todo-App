import { createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
	palette: {
		primary: {
			light: '#f57f17',
			main: '#ef9a9a',
			dark: '#283593',
			contrastText: '#fff',
		},
		secondary: {
			light: '#607d8b',
			main: '#e1bee7',
			dark: '#6d4c41',
			contrastText: '#8e24aa',
		},
		type: 'dark',
	},
});

export default darkTheme;
