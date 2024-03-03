import { useState } from 'react';
import MainContainer from './components/main-container/MainContainer';
import Header from './components/header/Header';
import Background from './components/background/Background';
import { GlobalStyles } from './styles/global-styles';
import Body from './components/body/Body';

const App = () => {
	const [tasks, setTasks] = useState([]);

	return (
		<>
			<GlobalStyles />
			<Background />
			<MainContainer>
				<Header />
				<Body tasks={tasks} setTasks={setTasks} />
			</MainContainer>
		</>
	);
};

export default App;
