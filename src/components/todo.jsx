import React, { Component } from 'react'


class Todo extends Component {
state = {
    count: 0,
};

handleIncrement = () => {
    // Count increment in State Object --> Update the State
    this.setState({count: this.state.count + 1}); // when state changes, render
}

handleDecrement = () => {
    // Count decrement in State Object --> Update the State
    const count = this.state.count - 1;
    this.setState({count: count < 0 ? 0 : count}); // restrict -1
}

handleDelete = () => {
    // Count decrement in State Object --> Update the State
    const count = this.state.count - 1;
    this.setState({count: count < 0 ? 0 : count}); // when state changes, render
}

    render() {
        return(      
            <li className="todo">      
            <span className="todo-title">English Reading</span>           
            <span className="todo-count">{this.state.count}</span>  
            <button className="todo-button todo-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>          
            <button className="todo-button todo-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>            
            <button className="todo-button todo-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
            </li>         
        )}
}

export default Todo;