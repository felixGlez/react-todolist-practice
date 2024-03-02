import {
	StyledCheckbox,
	StyledDeleteButton,
	StyledTask,
	StyledTaskText
} from './styles';

const Task = () => {
	return (
		<>
			<StyledTask>
				<StyledCheckbox type='checkbox' />
				<StyledTaskText>Hola</StyledTaskText>
				<StyledDeleteButton src='./images/icon-cross.svg' />
			</StyledTask>
		</>
	);
};

export default Task;
