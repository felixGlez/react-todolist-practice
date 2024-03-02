import { useState } from 'react';
import { v4 } from 'uuid';
import MainContainer from './components/main-container/MainContainer';
import Header from './components/header/Header';
import Background from './components/background/Background';
import { GlobalStyles } from './styles/global-styles';
import Body from './components/body/Body';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: v4(),
			task: 'Pasear al perro',
			completed: true
		}
	]);

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
