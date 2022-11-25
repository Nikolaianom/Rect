import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // Метод жизненного цикла компонента
    // Вызывается сразу после того, как компонент был отрендерен
    componentDidMount() {
        // setInterval() - метод, который вызывает функцию через определённый интервал времени
        this.timerId = setInterval(() => this.timer(), 1000)
    }

    componentDidUpdate() {
        console.log('Component was updated');
    }

    // Метод жизненного цикла
    // Вызывается сразу перед тем, как компонент будет удалён из DOM
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    timer() {
        // setState() - метод, который обновляет состояние компонента
        this.setState({
            date: new Date()
        })
            
        
    }

    render() {
        return(
            <div>
                <h1>Hello, World</h1>
                <h2>Сейчас: {this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}

export default Clock; 