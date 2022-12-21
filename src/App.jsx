import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
function App() {
  return (
    <>
      <Header></Header>
      <TodoContainer />
      <AddForm />
      <h2>Hello</h2>
    </>
  );
}

export default App;
