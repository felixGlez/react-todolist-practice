import { v4 } from 'uuid';
import TasksContainer from '../tasks-container/TasksContainer';
import { StyledBody, StyledForm, StyledInput } from './styles';

const Body = ({ tasks, setTasks }) => {
	return (
		<StyledBody>
			<StyledForm onSubmit={event => handleSubmit(event, tasks, setTasks)}>
				<StyledInput placeholder='Create a new todo...' name='task-input' />
			</StyledForm>
			<TasksContainer tasks={tasks} />
		</StyledBody>
	);
};

const handleSubmit = (event, tasks, setTasks) => {
	event.preventDefault();
	const inputName = event.target.elements['task-input'].value;

	const newTask = {
		id: v4(),
		task: inputName,
		completed: false
	};

	setTasks([...tasks, newTask]);
};

export default Body;
