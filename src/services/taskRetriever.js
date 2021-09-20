import { rndBetween } from '@laufire/utils/random';
import faker from 'faker';
import context from '../core/context';

const { maxTaskCount, maxTaskLength } = context.config;

const toProperCase = (text) => text.charAt(1).toUpperCase() + text.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }`);

const getTask = () => {
	const count = context.state.tasks.length < maxTaskLength
		&& rndBetween(0, maxTaskCount);
	const task = [];

	for(let i = 0; i < count; i++)
		task.push(getRndTask());

	return task;
};

const taskRetriever = {
	getTask,
};

export default taskRetriever;
