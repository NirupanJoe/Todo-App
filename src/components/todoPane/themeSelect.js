import { React } from 'react';
import context from '../../core/context';
import { Select, InputLabel, MenuItem } from '@material-ui/core';

const ThemeOption = (theme) =>
	<MenuItem key={ theme } value={ theme }>
		{theme}
	</MenuItem>;

const ThemeSelect = () =>
	<div className="theme-select">
		<InputLabel>Theme: </InputLabel>
		<Select
			value={ context.state.theme }
			onChange={ (evt) => context.actions.themeSelect(evt.target.value) }
		>
			{ context.config.themes.map(ThemeOption)}
		</Select>
	</div>;

export default ThemeSelect;
