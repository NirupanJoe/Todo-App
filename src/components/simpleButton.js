import { React } from 'react';
import context from '../core/context';

const SimpleButton = () =>
	<button onClick={ context.actions.increaseCount }>
		Add</button>;

export default SimpleButton;
