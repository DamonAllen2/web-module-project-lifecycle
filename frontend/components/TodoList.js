import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {
        this.props.todos.reduce((acc, todo) => {
          if(this.props.showCompleted || !todo.completed) return acc.concat(<Todo item={todo} onClick={this.props.onClick}/>)
          return acc
        }, [])
        }
      </div>
    )
  }
}

