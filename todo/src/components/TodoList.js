import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleCompletedTask } from '../actions'

class TodoList extends React.Component {
    state = {
        newTodos: ''
    };

    handleChanges = e => {

        this.setState({
            newTodos: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault()
        this.props.addNewTodo(this.state.newTodos);
        this.setState({
            newTodos: ''
        })
    }

    toggleCompleted = (e, index) => {
        e.preventDefault()
        this.props.toggleCompletedTask(index)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Todo</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Enter New Todo'
                        value={this.state.newTodos}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.addTodo}>Add Todo</button>
                </form>
                <div>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <div
                                className={todo.completed ? 'completed' : ''}
                                key={index}
                                id={index}
                                onClick={e => this.toggleCompleted(e, index)}
                            >
                                {todo.value}
                            </div>
                        )

                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, { addNewTodo, toggleCompletedTask })(TodoList);