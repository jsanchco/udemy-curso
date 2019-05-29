import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import Forms from './sections/forms';
import cars from './data/cars.json';
import PropTypes from 'prop-types'
import FetchExample from './sections/fetch-example';
import EjemploDeCicloDeActualizacion from './sections/ejemploCicloDeActualizacion';
import EjemploDeComponentWillUnmount from './sections/ComponenteADesmontar';
import EjemploDeComponentDidCatch from './sections/ejemploDeComponentDidCatch';
import BitCoinPriceContainer from './sections/container-component/index';

//function Hello(props) {
//    return <h2>{props.title}</h2>
//}

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
    render() {
        return <h2>{this.props.title}</h2>
    }
}

//class Text extends Component {
//    render() {
//        return <p>{this.props.text}</p>

//    }
//}


class Text extends Component {
    render() {
        const {
            arrayOfNumbers,
            isActivated,
            multiply,
            objectWithInfo,
            title
        } = this.props

        const textoSegunBool = isActivated ? 'On' : 'Off'
        const mappedNumbers = arrayOfNumbers.map(multiply)

        return (
            <div>
                <p>{textoSegunBool}</p>
                <p>{mappedNumbers.join(', ')}</p>
                <p>{objectWithInfo.key}</p>
                <p>{objectWithInfo.key2}</p>
                <p>{title}</p>
                <p><ConditionalSection /></p>
            </div>
        )
    }
}

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: this.props.contadorInicial }
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1 })
        }, 1000)
    }

    render() {
        return <span><ContadorNumero numero={this.state.contador} /></span>
    }
}

Contador.defaultProps = {
    contadorInicial: 700
}

class ContadorNumero extends Component {
    render() {
        return <span>{this.props.numero}</span>
    }
}

class CarItem extends Component {
    render() {
        const { car, id } = this.props
        return (
            <li key={car.id}>
                <p><strong>Id: {id}</strong></p>
                <p><strong>Nombre: {car.name}</strong></p>
                <p><strong>Marca: {car.company}</strong></p>
            </li>
        )
    }
}

//class Box extends Component {
//    render() {
//        return (
//            <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
//                {this.props.children}
//            </div>
//        )
//    }
//}

function Box(props) {
    return (
        <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
            {props.children}
        </div>
    )
}


const Button = ({ borderColor = 'red', label }) => (
    <button style={{ borderColor }}>
        {label}
    </button>
)

Button.propTypes = {
    borderColor: PropTypes.string,
    label: PropTypes.string.isRequired
}

class Article extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }

    render() {
        const { author, children, date, title } = this.props
        return (
            <section>
                <h2>{title}</h2>
                {author && < p > <em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}

class App extends Component {

    constructor() {
        super()
        this.state = { mouseX: 0, mouseY: 0 }
    }

    handleClick(e) {
        alert('Hi here!!!');
    }

    handleMouseMove = (e) => {
        const { clientX, clientY } = e
        this.setState({ mouseX: clientX, mouseY: clientY })
    }

    render() {
        const numbers = [1, 1, 3, 4, 5]
        return (
            <div className="App">
                <Text
                    arrayOfNumbers={[1, 2, 3]}
                    isActivated
                    multiply={(number) => number * 4}
                    number={2}
                    objectWithInfo={{ key: 'First value', key2: 'Other value' }}
                    text='Texto en string'
                    title={<h1>Este es el Titulo</h1>}
                />
                <Contador />
                {numbers.map((number, index) => {
                    return <p key={index}>Soy el numero {number}</p>
                })}

                <h4>Trabajando con listas de Objetos</h4>

                <ul>
                    {
                        cars.map(car => {
                            return (
                                <CarItem id={car.id} key={car.id} car={car} />
                            )
                        })
                    }
                </ul>

                <h4>Eventos</h4>
                <button onClick={this.handleClick}>Hi here!!!</button>

                <div
                    onMouseMove={this.handleMouseMove}
                    style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
                    <p>{this.state.mouseX}, {this.state.mouseY}</p>
                </div>
                <div>
                    <Forms />
                </div>
                <div>
                    <h4>Children props</h4>
                    <Box>Hola! Soy un children!!!</Box>
                    <Box>Hola! Soy otro contenido!!!</Box>
                </div>
                <div>
                    <h4>Children props 2</h4>
                    <Article
                        author='Jesus'
                        date={new Date().toLocaleDateString()}
                        title='Artículo sobre la prop children'
                    >
                        <p>
                            El contenido que envolvemos debtro del componente Article será enviado al componente como this.props.children
                        </p>
                        <strong>
                            Y mantiene las etiquetas y componentes que hayáis añadido dentro
                        </strong>
                    </Article>
                    <Article
                        date={new Date().toLocaleDateString()}
                        title='Otro articulo'
                    >
                        <p>
                            El contenido que envolvemos debtro del componente Article será enviado al componente como this.props.children
                        </p>
                        <strong>
                            Y mantiene las etiquetas y componentes que hayáis añadido dentro
                        </strong>
                    </Article>
                </div>
                <div>
                    <FetchExample />
                </div>
                <div>
                    <EjemploDeCicloDeActualizacion />
                </div>
                <div>
                    <EjemploDeComponentWillUnmount />
                </div>

                <div>
                    <EjemploDeComponentDidCatch />
                </div>

                <div>
                    <Button label='Mi Boton' />
                </div>

                <div>
                    <BitCoinPriceContainer />
                </div>

            </div>
        );
    }
}

export default App;
