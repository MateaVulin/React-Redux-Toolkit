import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import "./App.css";

function App() {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux</h1>
      <div>Number: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        IncrementByAmount
      </button>
    </div>
  );
}

export default App;
