import React from 'react'
import TodoItem from './TodoItem'


// proptypes ini adalah validation untuk properti yang setiap component mempunyainya
// kita bisa set required
import PropTypes from 'prop-types'



class Todos extends React.Component {
 
    // markComplete = (e) => {
    //     console.log('hello');
    // }


    render() {
        return this.props.todos.map((todo) => (
            // karena di bawah ada props todo maka di file todoitem juga harus di buat PropTypesnya
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
            // markcomplete itu ada di ambil dari onchange file todoitem dan 
            // this markcomplete itu kita buat sendiri
        ))
    }
}



// PropTypes
// todos itu adalah nama filenya
Todos.propTypes = {
    // jadi di kasi tau bahwa todos mempnya array 
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
