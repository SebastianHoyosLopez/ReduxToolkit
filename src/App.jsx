import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./slice/counterSlice";

function App() {
  const { valor } = useSelector((state) => state.counter);
  const [toIncrement, setToIncrement] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setToIncrement(parseInt(e.target.value));
    console.log(toIncrement);
  };

  const add = (e) => {
    dispatch(increment())
  };

  const minus = () => {
    dispatch(decrement())
  };

  const addBy = () => {
    dispatch(incrementBy(toIncrement))
  };

  return (
    <div className="container my-4">
      <h1>Redux Toolkit Counter</h1>
      <h2>Valor: {valor}</h2>
      <input
        type="number"
        name="number"
        value={toIncrement}
        onChange={handleChange}
      />
      <div className="mt-4">
        <button onClick={add} className="btn btn-primary mx-2">+1</button>
        <button onClick={minus} className="btn btn-secondary mx-2">-1</button>
        <button onClick={addBy} className="btn btn-warning mx-2">+{toIncrement}</button>
      </div>
    </div>
  );
}

export default App;
