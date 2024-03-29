import styled from 'styled-components';

const StyledFooter = styled.div`
	font-family: 'Josefin Sans', sans-serif;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #25273d;
	border-radius: 0px 0px 5px 5px;
	border: none;
	padding: 0px 30px;
	gap: 1.125rem;
`;

const StyledStatus = styled.p`
	color: ${({ $isSelected }) => ($isSelected ? '#3A7CFD' : '#5B5E7E')};
	font-size: 1rem;
	transition: 0.2s;

	&:hover {
		color: white;
		cursor: pointer;
	}
`;

export { StyledFooter, StyledStatus };
