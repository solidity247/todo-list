import React from "react";
import "./TodoContainer.css";
import TodoNote from "./TodoNote";
import Wrapper from "./Wrapper";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  transitFunctionContainer = (id) =>{
    // console.log(id, "from container")
    this.props.transitFunctionApp(id)   
  }
  

  render() {
    // console.log(this.props.searchCreterias, "search criterias in container")
    // console.log(this.props, "props of todoContainer");
    return (
      //we should map this for each object
      <Wrapper>
        {this.props.data.filter(el=>el.name.includes(this.props.searchCreterias)).map((todo) => {
          // console.log(todo)
          return (
            <TodoNote
              name={todo.name}
              desc={todo.description}
              isDone={todo.isDone}
              date={todo.date}
              key={todo.id}
              id={todo.id}
              transitFunctionNote={this.transitFunctionContainer}
              
            ></TodoNote>
          );
        })}
      </Wrapper>
      // add delete, edit functions . add save button
    );
  }
}
