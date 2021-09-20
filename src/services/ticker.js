import config from '../core/config';
import Remote from './remote';
import taskRetriever from './taskRetriever';

const state = () => {
	const { tickerDelay } = config;

	setInterval(() =>
		taskRetriever.getTask().map(Remote.createTask), tickerDelay);
};

const ticker = {
	state,
};

export default ticker;
