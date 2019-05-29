import React, { Component } from 'react';

class BotonQueLanzaError extends Component {

    state = { throwError: false }

    render() {
        if (this.state.throwError) {
            throw new Error('Error lanzado por el boton')
        }

        return (
            <div>
                <button onClick={() => this.setState({ throwError: true })}>
                    Lanza Error!!!
                </button>
            </div>
        )
    }
}

export default class EjemploDeComponentDidCatch extends Component {

    state = { hasError: false, errorMsg: '' }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        console.log({ error, errorInfo })
        this.setState({ hasError: true, errorMsg: error.toString() })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error en el componete: {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({ hasError: false })}>
                            Recuperar componente!!!
                    </button>
                </div>
            )
        }
        return (
            <div>
                <h2>Ciclo de montaje: Ejemplo DidCatch</h2>
                <BotonQueLanzaError />
            </div>
        );
    }
}