import React from 'react';
import uniqueId from '../../util/todo_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  createTodo(e) {
    e.preventDefault();

    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: "",
      done: false
    }

    this.props.receiveTodo(todo);
  }

  render () {
    return (
      <form onSubmit={this.createTodo}>
        <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <button>button!</button>
      </form>
    );
  }

}

export default TodoForm;