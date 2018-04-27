import React, { Component } from 'react';


class TodoItem extends Component {
  render() {
    return (
     <li>
         <b>Title: {this.props.todo.title}</b> - Userid: {this.props.todo.userId}
     </li>
    );
  }
}

export default TodoItem