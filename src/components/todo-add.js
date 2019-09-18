import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../actions/index";


class TodoAdd extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = { value: "" };
  //   this.addValue = this.addValue.bind(this);
  //   this.updateInput = this.updateInput.bind(this);
  // }

  constructor(props){
    super(props)
    this.state = { input : ""};
  }

  handleAddTodo = () => {
    // dispatches actions to add todo
    //debugger;
    this.props.addTodo(this.state.input)
    console.log("propshandle", this.props)
    // sets state back to empty string
    this.setState({ input: '' })
  }

  updateInput(val){
    console.log("currentInput", val)
    this.setState({ input: val })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
} 



function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  // return //({selectTodo : selectTodo} , dispatch)
  return { addTodo: bindActionCreators(addTodo, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd);
