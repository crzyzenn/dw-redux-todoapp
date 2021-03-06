import { useDispatch, useSelector } from "react-redux";
import { storeTodoInput } from "../../features/todoSlice";

export default function TodoInput() {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log("From redux store", state);

  const handleChange = (e) => {
    let todoInput = e.target.value;
    dispatch(storeTodoInput(todoInput));
  };

  return (
    <>
      <input placeholder="Add todo" onChange={handleChange} />
    </>
  );
}
