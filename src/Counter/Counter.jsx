import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterAction";

const Counter = () => {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    };

    const handleDecrement = () => {
        dispatch(decrement())
    };

    return (
        <div>
            <h2>Counter Value: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;