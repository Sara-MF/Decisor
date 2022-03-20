import { useContext, useEffect } from 'react';
import { MyContext } from '../context';

const Results = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.result();
    }, []);

    return (
        <div>
            <h3>Sua resposta:</h3>

            <div className="view">
                { context.state.result }
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-0.5s">
                <hr/>
                <button className="btn" onClick={ context.reset }>
                    Perguntar de novo
                </button>

                <button className="btn" onClick={ context.result }>
                    Outra resposta
                </button>
            </div>

        </div>
    )

}

export default Results;