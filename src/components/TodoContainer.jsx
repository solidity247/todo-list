import React from "react";
import "./TodoContainer.css";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //we should map this for each object
      <>
        <div className="todo-container">
          <div className="checkbox">
            <label class="container">
              <input type="checkbox" />
            </label>
          </div>
          <div class="todo-card">
            <p className="date">{this.props.date} 12/11/2022</p>
            <p className="nameOfTask">{this.props.name} go to cinema</p>
            <p className="descOfTask">{this.props.desc} buy a ticket</p>
          </div>
          <div className="buttons">
            <button class="btn edit">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn delete">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <hr />
      </>
      // add delete, edit functions . add save button
    );
  }
}
