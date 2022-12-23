import React from "react";
import "./AddForm.css";
import Wrapper from "./Wrapper";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      name: "",
      description: "",
    };
  }
  // handeling name input value
  nameToDo = (event) => {
    // this.setState({...this.state, name: event.target.value})
    this.setState((prev) => {
      return { ...prev, name: event.target.value };
    });
  };
  // handeling description input value
  descriptionToDo = (event) => {
    // this.setState({...this.state, name: event.target.value})
    this.setState((prev) => {
      return { ...prev, description: event.target.value };
    });
  };
  // handeling date input value
  dateToDo = (event) => {
    this.setState((prev) => {
      return { ...prev, date: event.target.value };
    });
  };

  // handeling collected data submission to upper component
  addToDoHandler = () => {
    let temp = { ...this.state, isDone: false };
    // console.log(temp);
    this.props.customEvent(temp);
  };

  render() {
    return (
      <Wrapper id="wrap">
        <div className="input">
          <input
            type="date"
            className="create-todo"
            onChange={this.dateToDo}
            value={this.state.value}
          />
          <input
            className="create-todo"
            value={this.state.name}
            type="text"
            onChange={this.nameToDo}
            placeholder="&nbsp; Create your to do"
          />
          <input
            className="description"
            value={this.state.description}
            type="text"
            onChange={this.descriptionToDo}
            placeholder="&nbsp; Description what to do"
          />
        </div>
        <div className="btns">
          <button className="cancelBtn">Cancel</button>
          <button className="addBtn" onClick={this.addToDoHandler}>
            Add To-Do
          </button>
        </div>
      </Wrapper>
    );
  }
}

export default AddForm;
