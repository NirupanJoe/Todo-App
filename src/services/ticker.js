import config from '../core/config';
import context from '../core/context';
import taskRetriever from './taskRetriever';

const state = () => {
	const { addTask } = context.actions;
	const { tickerDelay } = config;

	setInterval(() => taskRetriever.getTask().map(addTask), tickerDelay);
};

const ticker = {
	state,
};

export default ticker;
