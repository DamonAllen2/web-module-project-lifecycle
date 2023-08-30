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
      name: '',
      showCompleted: true,
    }
  }
  
  getTodos = () => {
    axios.get('http://localhost:9000/api/todos')
    .then(res => this.setState({ ...this.state, todos: res.data.data }))
    .catch(err => console.error(err));
  }

  updateTodos = name => {
    axios.post('http://localhost:9000/api/todos', {
      'name': this.state.name,
      'completed': false,
    })
    .then(res => {
      this.getTodos();
    });
  }

  onClick = id => e => {
    axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(res => {
      this.getTodos();
    })
    .catch(err => console.error(err));
  }

  toggleCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted })
    console.log(this.state.showCompleted);
  }
  
  onChange = e => {
    this.setState({ ...this.state, name: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    this.updateTodos(this.state.name);
    this.setState({ name: '' });
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
      <h2>Todos:</h2>
      <TodoList todos={this.state.todos} onClick={this.onClick} showCompleted={this.state.showCompleted}/>
      <Form onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} toggle={this.toggleCompleted}/>
      </div>
    )
  }
}