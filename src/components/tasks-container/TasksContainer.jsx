import { v4 } from 'uuid';
import Task from '../task/Task';

const TasksContainer = ({ tasks }) => {
	console.log(tasks);
	return (
		<>
			{tasks.map(task => {
				return <Task key={v4()} task={task.task} />;
			})}
		</>
	);
};

export default TasksContainer;
