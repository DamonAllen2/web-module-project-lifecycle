import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div key={this.props.item.id} onClick={this.props.onClick(this.props.item.id)}>{this.props.item.name} {this.props.item.completed ? '✔' : ''} </div>
    )
  }
}
