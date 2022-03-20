import { useRef, useState, useContext } from 'react';
import { MyContext } from '../context';

const Initial = () => {

    const context = useContext(MyContext);

    const textInput = useRef();
    
    const [showButton, setShowButton] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = () => {

        if (textInput.current.value.length > 5) setShowButton(true);
        else setShowButton(false);

    };

    const handleSubmit = () => {
    
        const value = textInput.current.value;

        if (value.length > 30) {
            setShowError(true);
            return false;
        }

        context.goTo(1);
        context.question(value);

    };

    return (
        <div>
            <h1>Pergunte algo</h1>
            <input
                ref={textInput}
                onChange={handleChange}
                name="question"
                type="text"
                className="form-control"
            />

            { showButton &&
                <button
                    className="btn animate__animated animate__fadeIn"
                    onClick={handleSubmit}
                >
                    Próximo
                </button>
            }

            { showError &&

                <div className="error">
                    ERRO: A pergunta é muito grande
                </div>

            }
            
        </div>

        
        


    )

}

export default Initial;