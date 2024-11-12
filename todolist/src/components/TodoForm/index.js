import React, { Component } from 'react';


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.addTodo(this.state.text); 
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="text-input"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Введите задачу"
        />
        <button type="submit" className="button-submit">Добавить</button>
      </form>
    );
  }
}

export default TodoForm;
