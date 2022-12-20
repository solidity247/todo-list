import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {

  return (
    <div>
      <h1>This is our FIRST REACT PROJECT!</h1>
      <Header/>
      <Todos/>
      <AddForm/>
    </div>

    // <Header></Header> // Chynara, Begimai  html, CSS
    // <TodoContainer></TodoContainer> Diana, Akcholpon - html, css
    // <AddForm></AddForm> Ermek Takhir, 
  );
}

export default App;
