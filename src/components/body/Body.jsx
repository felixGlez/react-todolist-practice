import { useState } from 'react';
import TasksContainer from '../tasks-container/TasksContainer';
import { StyledBody } from './styles';
import Form from '../form/Form';

const Body = () => {
	const [tasks, setTasks] = useState([]);
	console.log(tasks);

	return (
		<StyledBody>
			<Form tasks={tasks} setTasks={setTasks} />
			<TasksContainer tasks={tasks} setTasks={setTasks} />
		</StyledBody>
	);
};

export default Body;
