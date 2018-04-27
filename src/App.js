import React, { Component } from 'react';
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => this.setState({todos:data}, function(){
      console.log(this.state)
    }))
  }

  handleAddTodo(todo){
    console.log("what is being sent to us")
    console.log(todo)

    let todos  = this.state.todos;
    todos.push(todo);
    this.setState({todos:todos})
  }

  render() {

    console.log(this.state)
    
    return (
      <div >
        
        <Addtodo addtodo={this.handleAddTodo.bind(this)} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
