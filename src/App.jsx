import MainContainer from './components/main-container/MainContainer';
import Header from './components/header/Header';
import Background from './components/background/Background';
import { GlobalStyles } from './styles/global-styles';
import Body from './components/body/Body';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Background />
			<MainContainer>
				<Header />
				<Body />
			</MainContainer>
		</>
	);
};

export default App;
