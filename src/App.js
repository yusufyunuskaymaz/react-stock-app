import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { store } from "./redux";
import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
// import reducer from "./redux";

function App() {
  // const store = createStore(reducer);
  return (
    <div className="app">
        <Counter />
      <Todo />
    </div>
  );
}

export default App;
