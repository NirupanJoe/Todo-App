import { React } from 'react';
import FilterButton from './filterButton';

const Filter = ['all', 'active', 'completed'];

const FilterBar = () =>
	<div> { Filter.map(FilterButton) } </div>;

export default FilterBar;
