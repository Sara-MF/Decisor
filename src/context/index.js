import React, { Component } from 'react';

const list = [
    'Sim', 'Não', 'Talvez', 'Nem pense nisso', 'Não tenho certeza. Pergunte de novo',
    'Fale com um amigo', 'Pare imediatamente', 'Você deveria desistir', 'Não vale a pena',
    'Sim, definitivamente sim', 'Muito provavelmente sim', 'Acho que pode ser', 'É uma boa ideia',
    'Pergunte de novo mais tarde', 'Você não quer ouvir a resposta', 'Você deveria se esforçar mais',
    'As duas coisas', 'Acho arriscado', 'Você deveria fazer outra coisa'
]

const MyContext = React.createContext();

class MyProvider extends Component {

    state = { 
        screen: 0,
        question: '',
        result: ''
    }

    handleGoTo = (value) => {
        this.setState({screen:value});
    } 

    handleQuestion = (value) => {
        this.setState({question:value});
    }

    getRandomValue = () => {
        return list[Math.floor(Math.random() * list.length)];
    }

    handleResult = () => {

        let rand = this.getRandomValue();

        // pra não repetir a resposta 2 vezes seguidas
        if (this.state.result !== '') {
            while (rand === this.state.result) {
                rand = this.getRandomValue();
            }
        }

        this.setState({result:rand});
    }

    handleReset = () => {
        this.setState({
            screen: 0,
            question: '',
            result: ''
        });
    }

    render() {

        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion,
                    result: this.handleResult,
                    reset: this.handleReset
                }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        )

    }

}

export {
    MyContext,
    MyProvider
}