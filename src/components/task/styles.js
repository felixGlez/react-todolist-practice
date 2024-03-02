import styled from 'styled-components';

const StyledTask = styled.div`
	font-family: 'Josefin Sans', sans-serif;
	width: 100%;
	height: 3.5rem;
	background-color: #25273d;
	border-radius: 5px;
	border: none;
	color: #c8cbe7;
	padding: 0px 30px;
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledCheckbox = styled.input`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	appearance: none;
	border: 2px solid #e3e4f1;
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
`;

const StyledDeleteButton = styled.img`
	width: 1rem;
`;

export { StyledTask, StyledCheckbox, StyledTaskText, StyledDeleteButton };
