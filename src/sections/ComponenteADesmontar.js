import React, { Component } from 'react';

class ComponenteADesmontar extends Component {

    state = { windowWidth: 0 }

    _updateStateWthWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }

    componentDidMount() {
        this._updateStateWthWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWthWindowWidth
        )
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            this._updateStateWthWindowWidth
        )
    }

    render() {
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        )
    }
}

export default class EjemploDeComponentWillUnmount extends Component {
    state = { mostrarComponente: true }

    render() {

        if (this.state.mostrarComponente) {
            return (
                <div>
                    <h4>Ciclo de desmontaje: componentWillUnmount</h4>
                    <ComponenteADesmontar />
                    <button onClick={() => this.setState({ mostrarComponente: false })}>
                        Desmontar componente
                    </button>
                </div>
            )
        }
        return (
            <p>Componente desmontado</p>
        )
    }
}