import config from '../core/config';
import context from '../core/context';

const Ticker = () => {
	const { tickerDelay } = config;

	const state = () => {
		setInterval(() => {
			context.actions.addTask('New Task');
		}, tickerDelay);
	};

	return { state };
};

const ticker = Ticker();

export default ticker;
