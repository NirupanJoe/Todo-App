import { createTheme } from '@material-ui/core/styles';

const lightTheme = createTheme({
	palette: {
		primary: {
			light: '#ffe0b2',
			main: '#1b5e20',
			dark: '#0d47a1',
			contrastText: '#fff',
		},
		secondary: {
			light: '#f57f17',
			main: '#ab47bc',
			dark: '#212121',
			contrastText: '#fff',
		},
		action: {
			disabledBackground: 'orange',
			disabled: 'white',
		},
		type: 'light',
	},
});

export default lightTheme;
