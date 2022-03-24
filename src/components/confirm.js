import { useContext } from 'react';
import { MyContext } from '../context';

const Confirm = () => {

    const context = useContext(MyContext);

    const goNext = () => {
        context.goTo(2);
    }

    const goBack = () => {
        context.question('');
        context.goTo(0);
    }

    return (
        <div>

            <h3>Sua pergunta:</h3>

            <div className="view">
                { context.state.question }
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-0.5s">
                <hr/>
                <button className="btn" onClick={ goNext }>
                    Perguntar
                </button>

                <button className="btn" onClick={ goBack }>
                    Fazer outra pergunta
                </button>
            </div>

        </div>
    )

}

export default Confirm;