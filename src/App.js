import React from 'react'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'
// import { v4 as uuidv4 } from 'uuid'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'




class App extends React.Component {

  state = {
    todos: [


      
      // {
      //   id : uuidv4(),
      //   title: 'membuang samapah',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Makan malam',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'ketemu teman',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    // link itu dari jsonplaceholder
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

 
  markComplete = (id) => {
    // console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {

        // jadi yang dibawah ini adalah logika seperti toggle
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }


  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todo/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    
  }


  // addTodo
  AddTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))

    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false
    // }

    
  }


  render() {
 

    console.log(this.state.todos);

    return (

      <Router> 

        <div className="App">

          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>

      </Router>
    )
  }
}
export default App;
