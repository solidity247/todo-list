import React from "react";
import Wrapper from "./Wrapper";

import "./TodoNote.css";

const dateParser = (date) => {
  const arrDate = date.split("-");
  return arrDate;





};
export default class TodoNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // destructuring and assignment by array
    const [year, month, day] = dateParser(this.props.date);
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
          <button className="todo-note-btn-edit btn edit">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="todo-note-btn-delete btn delete">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}
