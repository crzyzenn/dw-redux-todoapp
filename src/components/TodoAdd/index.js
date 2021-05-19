import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todoSlice";

export default function TodoAdd() {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log("From todo add component", state);

  return (
    <button
      onClick={() => {
        dispatch(addTodo());
      }}
    >
      Add Todo
    </button>
  );
}
