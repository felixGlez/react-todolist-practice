import { v4 } from 'uuid';
import Task from '../task/Task';

const TasksContainer = ({ tasks, setTasks }) => {
	return (
		<>
			{tasks.map(task => {
				return (
					<Task
						key={v4()}
						task={task.task}
						deleteTask={() => deleteTask(tasks, setTasks, task.id)}
						completeTask={event =>
							completeTask(event, tasks, setTasks, task.id)
						}
					/>
				);
			})}
		</>
	);
};

const deleteTask = (tasks, setTasks, taskId) => {
	// console.log(tasks);
	// console.log(taskId);

	const filteredTasks = tasks.filter(task => task.id !== taskId);
	// console.log(filteredTasks);

	setTasks(filteredTasks);
};

const completeTask = (event, tasks, setTasks, taskId) => {
	console.log(event.target.checked);
	console.log(taskId);

	const completedTask = tasks.filter(task => task.id === taskId);

	completedTask[0].completed = true;
};

export default TasksContainer;
