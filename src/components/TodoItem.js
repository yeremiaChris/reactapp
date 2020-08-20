import React, { Component } from 'react'
import PropTypes from 'prop-types'



export class TodoItem extends Component {

    getStyle = () => {
        
        return {
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        
        // dibawah cara yang panjang
        
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }


    inputStyle() {
        return {
            marginRight: '10px'
        }
    }


    // markComplete() {
    //     console.log(this.props);
    // }

    // kalo yang diatas itu thisnya akan undefine dan terjadi error makanya 
    // harus di bind() jika tidak mau di bind kita bisa menggunakan arrow function seperti dibawah

    // markComplete = () => {
    //     console.log(this.props);
    // }

    render() {

        const { title, id } = this.props.todo 

        return (
            // kalo mau buat stylenya bisa langsung masukan ke atribut divnya
            // kalo tidak pake variabel kurung kurawal ada 2
            // kalo pake variabel kurungnya satu
            <div /*style={styleItem}*/ style={this.getStyle()}>
                <p>
                    <input type="checkbox" style={this.inputStyle()} onChange={this.props.markComplete.bind(this,id)}/*onChange={this.markComplete.bind(this)*//>
                    {title}


                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>                
            </div>
        )
    }
}

// style
// const styleItem = {
//     backgroundColor: 'black'
// }




TodoItem.propTypes = {
    // tipe dari todo itu adalah object
    todo: PropTypes.object.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}



// PropTypes
// todos itu adalah nama filenya
TodoItem.propTypes = {
    // jadi di kasi tau bahwa todos mempnya array 
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
// 29:32

