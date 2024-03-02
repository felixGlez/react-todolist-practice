import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLogo = styled.h1`
	font-size: 2rem;
	letter-spacing: 10px;
	color: white;
`;

const StyledIcon = styled.img`
	width: 2rem;
`;

export { StyledHeader, StyledLogo, StyledIcon };
