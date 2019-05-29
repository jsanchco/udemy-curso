import React, { Component } from 'react';

export default class Forms extends Component {

    constructor() {
        super()
        this.state = {
            inputName: 'Jesus',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked })
    }

    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            onChange={e => this.setState({ inputName: e.target.value })}
                            placeholder='Inrtroduce tu nombre'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName} />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            onChange={e => this.setState({ inputTwitter: e.target.value })}
                            placeholder='Inrtroduce tu cuenta de Twitter'
                            value={this.state.inputTwitter} />
                    </p>
                    <p>
                        <label>
                            Acepto los terminos
                            <input
                                checked={this.state.inputTerms}
                                onChange={this.handleChange}
                                type='checkbox' />
                        </label>
                    </p>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
