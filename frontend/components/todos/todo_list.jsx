import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_form';

const TodoList = (props) => (
  <div>
    <TodoListForm receiveTodo = {props.receiveTodo} />
    <ul>
      {props.todos.map(el => TodoListItem(el))}
    </ul>
  </div>
);

export default TodoList;

// update TodoListItem to be a React component  on line 9