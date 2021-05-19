import TodoInput from "./components/TodoInput";
import "./styles.css";

import store from "./store";
import { Provider } from "react-redux";
import TodoAdd from "./components/TodoAdd";

// 1st exercise...
// Create a redux store...
// features/todoSlice
// initalValue -> todo -> store the input from the user
// tasks -> []

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <TodoAdd />
      </div>
    </Provider>
  );
}
