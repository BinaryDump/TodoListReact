// import React, { Component } from 'react'
// import { connect } from 'react-redux';

// class TodoAdd extends Component {

    
//     render () {
//         let { todos } = this.props;
//         return (
            
//             <div>
//                 <input type="text" placeholder="Add here ..." /><button onClick={AddTodo} > Add ... </button>
//             </div>
//         )
//     }
// }

// function     AddTodo(state){
//     debugger;
//     console.log("stateAdd", this.props.todos)
//    // this.setState({ todos : todos.push( {id : "1",desc : "todo1"} ) }) ;
// }

// const mapStateToProps = state => {
//     console.log("state", state);
//   return {
//     todos: state.todos
//   };
// };

// export default connect(mapStateToProps) (TodoAdd)