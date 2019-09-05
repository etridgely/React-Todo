import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Finish Lambda Project',
    id: 1, 
    completed: false
  },
  {
    task: 'Find Programming Job',
    id: 2, 
    completed: false
  },
  {
    task: 'Get Rich or Die Tryin',
    id: 3, 
    completed: false
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos,
      newTodo: ""
    };
  }
  
  addTodo = (event, todoName) => {
    event.preventDefault();
    const existing = this.state.todos.filter(
      todo => todo.task === todoName
    );
    if (existing.length === 0) {
      const newTodo = {
        task: todoName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  toggleTodo = todoId => {
    console.log("app.js: App: toggleIteam: ", todoId);
    console.log("app.js: App: this.state: ", this.state);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="Title">
          <h2>Todo List: MVP</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          newTodo
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
