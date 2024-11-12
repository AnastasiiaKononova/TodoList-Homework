import React, { Component } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import Modal from '../../components/Modal';

class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isModalOpen: false,
      todoToDelete: null,
    };
  }

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  confirmDelete = (id) => {
    this.setState({ isModalOpen: true, todoToDelete: id });
  };

  handleDelete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== this.state.todoToDelete),
      isModalOpen: false,
      todoToDelete: null,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, todoToDelete: null });
  };

  render() {
    return (
      <div className="todo-container">
        <h1>Список задач</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.confirmDelete} />
        <Modal
          isOpen={this.state.isModalOpen}
          onConfirm={this.handleDelete}
          onCancel={this.closeModal}
        />
      </div>
    );
  }
}

export default PageList;
