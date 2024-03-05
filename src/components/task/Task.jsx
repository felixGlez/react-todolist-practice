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
					onChange={event => completeTask(event)}
					type='checkbox'
				/>
				<StyledTaskText>{task}</StyledTaskText>
				<StyledDeleteButton
					onClick={deleteTask}
					src='./images/icon-cross.svg'
				/>
			</StyledTask>
		</>
	);
};

export default Task;
