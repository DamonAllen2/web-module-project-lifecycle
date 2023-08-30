import React from 'react'

export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.todos.map((item) => {
          return (<p key={item.id}>{item.name}</p>)
        })}
      </div>
    )
  }
}
