import styled from 'styled-components';

const StyledBody = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledForm = styled.form`
	font-family: 'Josefin Sans', sans-serif;
	width: 100%;
	margin-bottom: 20px;
`;

const StyledInput = styled.input`
	font-family: 'Josefin Sans', sans-serif;
	width: 100%;
	height: 3.5rem;
	background-color: #25273d;
	border-radius: 5px;
	border: none;
	color: #c8cbe7;
	padding: 0px 30px;
	font-size: 1rem;
`;

const StyledTasksContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledTask = styled.div`
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export {
	StyledBody,
	StyledForm,
	StyledInput,
	StyledTasksContainer,
	StyledTask
};
