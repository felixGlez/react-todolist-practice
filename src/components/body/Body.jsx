import { useState } from 'react';
import { v4 } from 'uuid';
import TasksContainer from '../tasks-container/TasksContainer';
import { StyledBody, StyledForm, StyledInput } from './styles';

const Body = () => {
	const [tasks, setTasks] = useState([]);
	console.log(tasks);

	return (
		<StyledBody>
			<StyledForm onSubmit={event => addTask(event, tasks, setTasks)}>
				<StyledInput placeholder='Create a new todo...' name='task-input' />
			</StyledForm>
			<TasksContainer tasks={tasks} setTasks={setTasks} />
		</StyledBody>
	);
};

const addTask = (event, tasks, setTasks) => {
	event.preventDefault();
	const inputValue = event.target['task-input'].value;

	const newTask = {
		id: v4(),
		task: inputValue,
		completed: false
	};

	setTasks([...tasks, newTask]);

	/*
	event.target['task-input'].value = '';
	equivalente a:
	*/
	event.target.reset();
};

export default Body;
