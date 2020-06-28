import React, { Component } from 'react' ;
import Todos from './Todos'
import AddTod from './AddForm'

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'Complete React/Redux playlist'},
      {id:2, content: 'Complete The Last of Us 2 game play'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    }) ;

    this.setState({
      // todos: todos  // this is also correct
      todos // if names are same we can write this way as well
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random() ;
    let todos = [...this.state.todos, todo] ;
    this.setState({
      todos 
    })
  }

  render () {
    return (
      <div className='todo-app container'>
        <h1>Todo's</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTod addTodo={this.addTodo}/>
        <div class="footer">
          <p>Created By: Muhammad Raahim Khan</p>
        </div>
      </div>
    ) ;
  }
}

export default App ;