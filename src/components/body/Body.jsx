import { useState } from 'react';
import TasksContainer from '../tasks-container/TasksContainer';
import { StyledBody } from './styles';
import Form from '../form/Form';
import { v4 } from 'uuid';
import Footer, { filterTasks } from '../footer/Footer';
import { FILTERS } from '../../constants/filters';

const Body = () => {
	const [tasks, setTasks] = useState([
		{
			id: v4(),
			task: 'Make a todo app',
			completed: false
		}
	]);
	const [filter, setFilter] = useState(FILTERS.ALL);

	const filteredTasks = filterTasks(filter, tasks);

	return (
		<StyledBody>
			<Form tasks={filteredTasks} setTasks={setTasks} />
			<TasksContainer tasks={filteredTasks} setTasks={setTasks} />
			<Footer
				filter={filter}
				setFilter={setFilter}
				tasks={tasks}
				setTasks={setTasks}
			/>
		</StyledBody>
	);
};

export default Body;
