import { StyledItems } from './styles';

const ItemsLeft = ({ tasks }) => {
	const filteredItems = filterItems(tasks);

	if (filteredItems.length === 0)
		return <StyledItems>All items completed!</StyledItems>;

	return <StyledItems>{filteredItems.length} items left</StyledItems>;
};

const filterItems = tasks => {
	return tasks.filter(task => !task.completed);
};

export default ItemsLeft;
