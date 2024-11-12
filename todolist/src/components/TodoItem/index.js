import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        {this.props.todo.text}
        <button
          className="button-delete"
          onClick={() => this.props.deleteTodo(this.props.todo.id)}
        >
          Удалить
        </button>
      </li>
    );
  }
}

export default TodoItem;
