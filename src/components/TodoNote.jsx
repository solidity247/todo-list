import React from "react";

import "./TodoNote.css";

export default class TodoNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let a = 12;
    if (a === 1) {
      return (
        <div className="todo-note">
          <div className="todo-container">
            <div className="checkbox">
              <label className="container">
                <input type="checkbox" />
              </label>
            </div>
            <div className="todo-card">
              <p className="date">{this.props.date} 12/11/2022</p>
              <p className="nameOfTask">{this.props.name} Name (hardcoded) </p>
              <p className="descOfTask">
                {this.props.desc} Hardcoded description of the task
              </p>
            </div>
            <div className="buttons">
              <button className="btn edit">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="btn delete">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="todo-note">
        <div>
          <input id="checkbox" type="checkbox" />
        </div>
        <div className="todo-note-date">
          <div className="todo-note-year">2022</div>
          <div className="todo-note-month">September</div>
          <div className="todo-note-day">12</div>
        </div>
        <div className="todo-note-content">
          <h3 className="todo-note-name"> Name (hardcoded) </h3>
          <p className="todo-note-description">
            Hardcoded description of the task or todo
          </p>
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
