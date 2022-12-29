import "./App.css";
import React from 'react';
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

 // + 1 el -> rerender


// state - > data
// update state with data + 1 (push) + add ID somehow

const initialData = [
  {
    name: "Shopping for Chistmas",
    description:
      "Go to plaza and by presents. Go to plaza and by presents.Go to plaza and by presents.",
    isDone: false,
    date: "2022-12-23",
    id: 1,
  },
  {
    name: "Buy book for education",
    description: "Visit Amazon.com",
    isDone: true,
    date: "2022-12-25",
    id: 2,
  },
  {
    name: "Go to gym",
    description: "Go to Plnet Fitness",
    isDone: false,
    date: "2022-12-27",
    id: 3,
  },
];

class App extends React.Component{
constructor(){
  super()
  this.state = {
    data: initialData
  }
}
  // this function receieves data from input field comp AddForm. 
  receiveData = (passedData) => {
    const temp = {...passedData, id: this.state.data[this.state.data.length-1].id +1}
    const copyData = this.state.data
    this.setState({data: [...copyData, temp]})
  };

  render(){
    console.log(this.state.data)
    return (
      <div className="main">
        <Header></Header>
        <TodoContainer data={this.state.data} />
        <AddForm customEvent={this.receiveData} />
      </div>
    );
  }
} 

export default App;








// function addTodotoData({some obj}){ data + pushed object + ID  as array }

// Problem #1. Cancel button -> rename to reset.
// Problem #2. Clear inputs after adding new toDo.
// Problem #3. Edit / Delete Buttons functionality logic.
// Problem #4. Search functionality logic.
// Problem #5. Date formatting.
// Problem #6. Make responsive CSS
// Problem #7. Empty input validation



// let a = {x: 10}
// let c = {y: 77}
// let test = { ...a, ...c } // = {x: 10, y: 77}


