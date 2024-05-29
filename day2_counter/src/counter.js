import { useState } from "react";

const CounterComp = (props) => {
    const initialCount = props.count ? props.count : 0;
    const [count, setCounter] = useState(initialCount);
    //increase counter
    const incrementCount = () => {
        if (count < 20)
            setCounter(count => count + 1);
    };

    //decrease counter
    const decrementCount = () => {
        if (count > 0 && count>initialCount) {
            setCounter(count => count - 1);
        }
    };
    //reset counter 
    const reset = () => {
        setCounter(initialCount);
    }

    // const count = props.count;
    return (
        <div className="counter">
            <h1>React Counter from {initialCount}</h1>
            <span className={count > 10 ? "counter__output_10" : "counter__output"}>{count}</span>
            <div className="btn__container">
                <button className="control__btn" onClick={incrementCount}>Increment</button>
                <button className="control__btn" onClick={decrementCount}>Decrement</button>
                <button className="reset" onClick={reset} style={{display:(count == initialCount ? "none" : "")}}>Reset</button>
            </div>
        </div>

    );
}
export default CounterComp;