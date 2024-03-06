import { v4 } from 'uuid';
import { StyledForm, StyledInput } from './styles';

const Form = ({ tasks, setTasks }) => {
	return (
		<>
			<StyledForm onSubmit={event => addTask(event, tasks, setTasks)}>
				<StyledInput placeholder='Create a new todo...' name='task-input' />
			</StyledForm>
		</>
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

export default Form;
