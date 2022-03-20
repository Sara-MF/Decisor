import { useContext } from 'react';
import { MyContext } from './context';

import 'animate.css';
import './assets/App.css';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Results from './components/results';


const App = () => {

  const HandleComponent = () => {

    const context = useContext(MyContext);

    const screen = context.state.screen;

    if (screen === 0) return <Initial/>
    if (screen === 1) return <Confirm/>
    if (screen === 2) return <Results/>

  }

  return (
    <div className="container">
      {HandleComponent()}
    </div>
  );
}

export default App;
