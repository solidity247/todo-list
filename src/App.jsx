import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
function App() {
  // const data = [{ text: "ABC", isDone: true }];
  return (
    <div className="main">
      <Header></Header>
      <TodoContainer />
      <AddForm />
    </div>
  );
}

export default App;
