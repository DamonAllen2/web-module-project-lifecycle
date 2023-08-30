import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
    .then(res => this.setState({ todos: res.data.data }))
    .catch(err => console.error(err));
  }

  onSubmit = name => {
    axios.post('');
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
      <h2>Todos:</h2>
      <TodoList todos={this.state.todos} />
      </div>
    )
  }
}