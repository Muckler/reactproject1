import React, { Component } from 'react';
import Todoitem from './Todoitem'


class Todos extends Component {
  render() {

    let todoItems;

    if(this.props.todos){
      todoItems = this.props.todos.map( todo => {
       
        //console.log(project)

          return (
            <Todoitem key={todo.title} todo={todo} />
          )
      })
    }

    return (
      <div >

      
      <h1>This is my to do list:</h1> <br />
      {todoItems}<br />
       
      </div>
    );
  }
}

export default Todos