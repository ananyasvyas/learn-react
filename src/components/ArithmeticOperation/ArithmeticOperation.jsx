import './ArithmeticOperation.css'
import { useState } from "react";

export default function ArithmeticOperation({ type }) {
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [result, setResult] = useState();
    let symbol;
    switch (type) {
        case 'add':
            symbol = '+';
            break;
        case 'subtract':
            symbol = '-';
            break;
        case 'divide':
            symbol = '/';
            break;
        case 'multiply':
            symbol = '*';
            break;
        default:
            symbol = '+';
            break;
    }
    function updateFirstValue(event) {
        setFirst(Number(event.target.value));
    }
    function updateSecondValue(event) {
        setSecond(Number(event.target.value));
    }
    function calculateClickHandler() {
        let result;
        console.log(first);
        switch (type) {
            case 'add':
                result = first + second;
                break;
            case 'subtract':
                result = first - second;
                break;
            case 'divide':
                result = first / second;
                break;
            case 'multiply':
                result = first * second;
                break;
            default:
                result = first + second;
                break;
        }
        setResult(result)
    }
    return (
        <>
        <div className='input-container'>
        <input type="number"
                value={first}
                onChange={(event) => updateFirstValue(event)} /> {symbol}
                <input type="number"
                value={second}
                onChange={(event) => updateSecondValue(event)} />
                <button onClick={calculateClickHandler}>Calculate</button>
                Result is {result}
        </div>
        </>
    );
}