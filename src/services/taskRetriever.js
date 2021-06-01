import { rndBetween } from '@laufire/utils/random';
import config from '../core/config';
import faker from 'faker';

const toProperCase = (text) => text.charAt(1).toUpperCase() + text.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }`);

const getTask = () => {
	const count = rndBetween(0, config.maxTaskCount);
	const task = [];

	for(let i = 0; i < count; i++)
		task.push(getRndTask());

	return task;
};

const taskRetriever = {
	getTask,
};

export default taskRetriever;
