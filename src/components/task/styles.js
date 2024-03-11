import styled from 'styled-components';

const StyledTask = styled.div`
	font-family: 'Josefin Sans', sans-serif;
	width: 100%;
	height: 3.5rem;
	background-color: #25273d;
	border-radius: 5px;
	color: #c8cbe7;
	padding: 0px 30px;
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #393a4b;
`;

const StyledCheckbox = styled.input`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	appearance: none;
	border: 2px solid #393a4b;
	position: relative;
	cursor: pointer;

	&:checked {
		border: none;
	}

	&:checked::after {
		content: '';
		background-image: url(./images/tic.svg);
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: 0.4px;
		left: 0.6px;
		width: 34px;
		height: 28px;
	}
`;

const StyledTaskText = styled.p`
	font-size: 1rem;
	text-decoration: ${({ $isCompleted }) =>
		$isCompleted ? 'line-through' : 'inherit'};
	color: ${({ $isCompleted }) => ($isCompleted ? '#4D5067' : '#c8cbe7;')};
`;

const StyledDeleteButton = styled.img`
	width: 1rem;
	cursor: pointer;
`;

export { StyledTask, StyledCheckbox, StyledTaskText, StyledDeleteButton };
