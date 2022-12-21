import React from "react";
import "./TodoContainer.css";
import TodoNote from "./TodoNote";
import Wrapper from "./Wrapper";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //we should map this for each object
      <Wrapper>
        <TodoNote></TodoNote>
        <hr></hr>
        <TodoNote></TodoNote>
        <hr></hr>
        <TodoNote></TodoNote>
        <hr></hr>
      </Wrapper>
      // add delete, edit functions . add save button
    );
  }
}
