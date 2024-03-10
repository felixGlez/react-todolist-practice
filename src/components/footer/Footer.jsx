import { StyledStatus, StyledFooter } from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledStatus>All</StyledStatus>
			<StyledStatus>Active</StyledStatus>
			<StyledStatus>Completed</StyledStatus>
		</StyledFooter>
	);
};

export default Footer;
