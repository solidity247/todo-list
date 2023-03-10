import React, { useState } from "react";
import "./Header.css";
import TodoContainer from "./TodoContainer";
import Wrapper from "./Wrapper";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  // props = {
  // abc: "123"
  // }

  render() {
    return (
      <Wrapper>
        <header>
          <a href="#" className="house">
            <h2>
              {" "}
              <i className="fa-solid fa-house"></i>
              &nbsp; To-Do List
            </h2>
          </a>

          <div className="search">
            <input
              className="find"
              type="checkbox"
              placeholder="&#xF002; &nbsp; filter by completion"
            />
            <input
              className="find"
              type="text"
              placeholder="&#xF002; &nbsp; search by name"
            />
            <div className="searchIcon"></div>
          </div>
        </header>
      </Wrapper>
    );
  }
}

// const data = [
//   {
//     isDone: true,
//     name: "First todo",
//     text: "This is my first todo",
//     date: "March 21 2022"
//   },
//   {
//     isDone: false,
//     name: "Second todo",
//     text: "This is my second todo",
//     date: "May 21 2022"
//   }
// ];

//  5 * map(el=> <ToDo></ToDo>)

/*
 
    1. Add todo: name , description , date , add button, cancel button 
2. Edit ,delete , priority functions 
3. Header: sorting 
4. Todo list rendering(showing tasks and date)  , checkbox feature if the task is completed


 */
