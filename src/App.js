import { useContext } from 'react';
import { MyContext } from './context';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import 'animate.css';
import './assets/App.css';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Results from './components/results';


	const App = () => {

		const context = useContext(MyContext);

		const HandleComponent = () => {

			const screen = context.state.screen;

			if (screen === 0) return <Initial />
			if (screen === 1) return <Confirm />
			if (screen === 2) return <Results />

		}

		return (

			<div>

				<div className="container">

					<SwitchTransition mode="out-in">
						<CSSTransition
							key={context.state.screen}
							timeout={300}
							classNames="fade"
						>
							{HandleComponent()}
						</CSSTransition>
					</SwitchTransition>

				</div>

				<ToastContainer 
					toastStyle={{ 
						backgroundColor: "#e597af",
						color: "#011638"
					}}
				/>
				
			</div>

		);
	}

export default App;
