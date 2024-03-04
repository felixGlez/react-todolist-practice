import { v4 } from 'uuid';
import Task from '../task/Task';

const TasksContainer = ({ tasks, setTasks }) => {
	console.log(tasks);
	return (
		<>
			{tasks.map(task => {
				return (
					<Task
						key={v4()}
						tasks={tasks}
						setTasks={setTasks}
						task={task.task}
						taskId={task.id}
					/>
				);
			})}
		</>
	);
};

export default TasksContainer;
