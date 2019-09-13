import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos } from "../actions/index";

class TodoItem extends Component {

  componentWillMount() {
    console.log("willMountProps", this.props);
    console.log(this.state);
    this.props.getTodos();
  }

  

  renderTodo() {
    const { todos } = this.props;
    if (todos) {
      return todos.map(todo => {
        // return <div key={todo.id} onClick={ () => this.props.selectTodo(todo)}> {todo.desc} </div>
        return <div key={todo.id}>{todo.id}. {todo.todo} </div>;
      });
    }
  }

  render() {
    return this.renderTodo();
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  // return //({selectTodo : selectTodo} , dispatch)
  return { getTodos: bindActionCreators(getTodos, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
