import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <p key={this.props.item.id}>{this.props.item.name} </p>
    )
  }
}
