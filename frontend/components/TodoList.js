import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.todos.map((item) => {
          return (<Todo item={item}/>)
        })}
      </div>
    )
  }
}
