import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>Header</p>
        <button className="sortNameBtn">Sort by name</button>
        <button className="sortDateBtn">Sort by date</button>
      </div>
    )
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
