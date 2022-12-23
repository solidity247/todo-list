import React from "react";
import "./TodoContainer.css";
import TodoNote from "./TodoNote";
import Wrapper from "./Wrapper";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    console.log(this.props, "props of todoContainer");
    return (
      //we should map this for each object
      <Wrapper>
        {/* // logic to dynamically render all data */}
        {this.state.data.map((todo) => {
          return (
            <TodoNote
              name={todo.name}
              desc={todo.description}
              isDone={todo.isDone}
              date={todo.date}
              key={todo.id}
            ></TodoNote>
          );
        })}
      </Wrapper>
      // add delete, edit functions . add save button
    );
  }
}
