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
						completeTask={() => completeTask(tasks, setTasks, task.id)}
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

const completeTask = (tasks, setTasks, taskId) => {
	// versión de tasks actualizada con las modificaciones indicadas
	const completedTask = tasks.map(task => {
		if (task.id === taskId) {
			task.completed = !task.completed;
		}
		// Aquí abajo estamos devolviendo cada tarea de tasks en cada vuelta, lo que conformará un array nuevo con todas las tareas y sus modificaciones
		return task;
	});

	setTasks(completedTask);
};

export default TasksContainer;
