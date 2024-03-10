import MainContainer from './components/main-container/MainContainer';
import Header from './components/header/Header';
import Background from './components/background/Background';
import { GlobalStyles } from './styles/global-styles';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Background />
			<MainContainer>
				<Header />
				<Body />
				<Footer />
			</MainContainer>
		</>
	);
};

export default App;
