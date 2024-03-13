import { StyledClearItems } from './styles';

const ClearItems = ({ tasks, setTasks }) => {
	return (
		<StyledClearItems onClick={() => filterActiveTasks(tasks, setTasks)}>
			Clear Completed
		</StyledClearItems>
	);
};

const filterActiveTasks = (tasks, setTasks) => {
	const activeTasks = tasks.filter(task => !task.completed);
	setTasks(activeTasks);
};
export default ClearItems;
