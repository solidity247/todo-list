import React from "react";
import EditForm from "./EditForm";
import Wrapper from "./Wrapper";


import "./TodoNote.css";

const dateParser = (date) => {
  const arrDate = date.split("-");
  return arrDate;
};
export default class TodoNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOn: false,
    };
  }

  deleteHandler = () => {
    this.props.transitFunctionNote(this.props.id);
  };

  editHandler = () =>{
    this.setState( {isEditOn: !this.state.isEditOn} )
  }
  render() {
    // destructuring and assignment by array
    const [year, month, day] = dateParser(this.props.date);

    // updateName = () =>{

    // }



    return (
      <div className="todo-note">
        <div>
          {/* <input id="checkbox" type="checkbox" checked={this.props.isDone} /> */}
          <input id="checkbox" type="checkbox" />
        </div>
        <div className="todo-note-date">
          <div className="todo-note-year">{year}</div>
          <div className="todo-note-month">{month}</div>
          <div className="todo-note-day">{day}</div>
        </div>
        <div className="todo-note-content">
          <h3 className="todo-note-name"> {this.props.name} </h3>
          <p className="todo-note-description">{this.props.desc}</p>
        </div>
        <div className="buttons todo-notes-buttons">
          <button className="todo-note-btn-edit btn edit" onClick={this.editHandler}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="todo-note-btn-delete btn delete"
            id={this.props.id}
            onClick={this.deleteHandler}
          >
            <i className="fa fa-trash" id={this.props.id}></i>
          </button>
        </div>
        {this.state.isEditOn && <EditForm newName={this.updateName}></EditForm>}
      </div>
    );
  }
}
