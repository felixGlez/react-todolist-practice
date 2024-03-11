import { FILTERS } from '../../constants/filters';
import { StyledStatus, StyledFooter } from './styles';

const Footer = ({ filter, setFilter }) => {
	return (
		<StyledFooter>
			<StyledStatus
				$isSelected={filter === FILTERS.ALL}
				onClick={() => setFilter(FILTERS.ALL)}
			>
				All
			</StyledStatus>
			<StyledStatus
				$isSelected={filter === FILTERS.ACTIVE}
				onClick={() => setFilter(FILTERS.ACTIVE)}
			>
				Active
			</StyledStatus>
			<StyledStatus
				$isSelected={filter === FILTERS.COMPLETED}
				onClick={() => setFilter(FILTERS.COMPLETED)}
			>
				Completed
			</StyledStatus>
		</StyledFooter>
	);
};

/*
Al final no hace falta, actualizamos el setFilter desde el onChange

const handleFilter = (selectedFilter, setFilter) => {
	setFilter(selectedFilter);
};
*/

const filterByActive = tasks => {
	return tasks.filter(task => !task.completed);
};

const filterByCompleted = tasks => {
	return tasks.filter(task => task.completed);
};

export const filterTasks = (filter, tasks) => {
	switch (filter) {
		case FILTERS.ACTIVE:
			return filterByActive(tasks);
		case FILTERS.COMPLETED:
			return filterByCompleted(tasks);
		case FILTERS.ALL:
			return [...tasks];
	}
};

export default Footer;
