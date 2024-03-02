import TasksContainer from '../tasks-container/TasksContainer';
import { StyledBody, StyledForm, StyledInput } from './styles';

const Body = () => {
	return (
		<StyledBody>
			<StyledForm onSubmit={event => handleSubmit(event)}>
				<StyledInput placeholder='Create a new todo...' />
			</StyledForm>
			<TasksContainer />
		</StyledBody>
	);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default Body;
