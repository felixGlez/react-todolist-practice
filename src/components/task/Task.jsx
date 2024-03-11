import {
	StyledCheckbox,
	StyledDeleteButton,
	StyledTask,
	StyledTaskText
} from './styles';

const Task = ({ task, deleteTask, completeTask }) => {
	return (
		<>
			<StyledTask>
				<StyledCheckbox
					type='checkbox'
					onChange={completeTask}
					checked={task.completed}
				/>
				<StyledTaskText $isCompleted={task.completed}>
					{task.task}
				</StyledTaskText>
				<StyledDeleteButton
					src='./images/icon-cross.svg'
					onClick={deleteTask}
				/>
			</StyledTask>
		</>
	);
};

export default Task;
