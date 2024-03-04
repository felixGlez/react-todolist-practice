import {
	StyledCheckbox,
	StyledDeleteButton,
	StyledTask,
	StyledTaskText
} from './styles';

const Task = ({ tasks, setTasks, task, taskId }) => {
	return (
		<>
			<StyledTask>
				<StyledCheckbox type='checkbox' />
				<StyledTaskText>{task}</StyledTaskText>
				<StyledDeleteButton
					onClick={event => deleteTask(tasks, setTasks, task, taskId)}
					src='./images/icon-cross.svg'
				/>
			</StyledTask>
		</>
	);
};

const deleteTask = (tasks, setTasks, task, taskId) => {
	console.log(tasks);
	console.log(task);
	console.log(taskId);

	const deletedTask = tasks.filter(task => task.id !== taskId);
	console.log(deletedTask);

	setTasks(deletedTask);
};

export default Task;
