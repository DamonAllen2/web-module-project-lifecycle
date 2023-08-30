import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.props.onSubmit}>
        <input type='text' placeholder='enter todo here' value={this.props.name} onChange={this.props.onChange} />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={this.props.toggle}>Toggle Completed</button>
      </div>
    )
  }
}
