import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            count: this.props.count
        }
        // bind() - привязывает контекст к функции
        this.increment = this.increment.bind(this)
        this.dicrement = this.dicrement.bind(this)
        this.randomNumber = this.random.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        if(this.state.count < 30) {
            this.setState({
                count: this.state.count + 1
            })
        }
        
        
    }

    dicrement() {
        if(this.state.count > -30){
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    random() {
        
        this.setState({
            count: this.state.count + 3
        })
      }

      reset() {
        if(this.state.count !== 0) {
            this.setState({
                count: this.state.count = 0
            })
        }
            
        }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.increment}>INC</button>
                <button onClick = {this.dicrement}>DEC</button>
                <button onCLick = {this.random}>RND</button>
                <button onCLick = {this.reset}>RESET</button>
            </div>
            
        )
    }
}

export default Counter