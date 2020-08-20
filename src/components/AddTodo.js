import React from 'react'
import PropTypes from 'prop-types'


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.AddTodo(this.state.title)
        this.setState({ title: '' })
    }

    // jadi dia akan bekerja realtime jika diliat di browser reactnya jadi titlenya itu
    // isinya adalah apa yang kita ketik di input

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.onSubmit} action="" style={{ display: 'flex' }}>
                <input
                type="text" 
                name="title" 
                placeholder="Add Todo"     
                style={{ flex: 10, padding: '10px' }}
                value={this.state.title}
                onChange={this.onChange}
                />

                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: 1}}
                />
             </form> 
        )
    }
}

// PropTypes
// todos itu adalah nama filenya
AddTodo.propTypes = {
    // jadi di kasi tau bahwa todos mempnya array 
    AddTodo: PropTypes.func.isRequired
}



export default AddTodo;









// import React from 'react'

// export default function AddTodo() {
    
//     state = {
//         title: ''
//     }
//     onChange = (e) => this.setState({ title: e.target.value })


//     return (
//         <form action="" style={{ display: 'flex' }}>
//             <input 
//                 type="text" 
//                 name="title" 
//                 placeholder="Add Todo"     
//                 style={{ flex: 10, padding: '10px' }}
//                 value={this.state.title}
//                 onChange={this.onChange}
//             />

//             <input 
//                 type="submit" 
//                 value="Submit" 
//                 className="btn"
//                 style={{flex: 1}}
//             />
//         </form> 
//     )
// }
