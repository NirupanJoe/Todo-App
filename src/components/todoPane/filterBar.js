import { React } from 'react';
import FilterButton from './filterButton';

const filters = ['all', 'active', 'completed'];

const FilterBar = () =>
	<div> { filters.map((filter) => FilterButton(filter)) } </div>;

export default FilterBar;
