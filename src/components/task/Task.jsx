import {
	StyledCheckbox,
	StyledDeleteButton,
	StyledTask,
	StyledTaskText
} from './styles';

const Task = ({ task }) => {
	return (
		<>
			<StyledTask>
				<StyledCheckbox type='checkbox' />
				<StyledTaskText>{task}</StyledTaskText>
				<StyledDeleteButton src='./images/icon-cross.svg' />
			</StyledTask>
		</>
	);
};

export default Task;
