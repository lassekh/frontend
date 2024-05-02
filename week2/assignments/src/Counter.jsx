import { useState, useEffect } from "react";

export default ({initialValue, inValue, deValue}) => {
    const [count, setCount] = useState(initialValue)
    const handleClick = (e) => {
        if (e.target.id === "increase") {
            setCount(count + inValue)
        } else if (e.target.id === "decrease") {
            setCount(count - deValue)
        }
    }

    useEffect(
        () => {
            localStorage.setItem("count", count);
            Number(localStorage.getItem("count")) //Returns value as a string
        }
    )

    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button id="increase" onClick={handleClick}>Increase count</button>
            <button id="decrease" onClick={handleClick}>Decrease count</button>
        </>
    )
}