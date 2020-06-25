import React, {useEffect, useState} from 'react';
import './App.sass';
import Counter from './Counter/Counter';
import CounterSettings from './CounterSettings/CounterSettings';


function App() {


    let [startValue, setStartValue] = useState();
    let [finalValue , setFinalValue] = useState(0);
    let [maxValue, setMaxValue] = useState();

    let [count, setCount] = useState <number> (0);
    let [message, setMessage] = useState <string> ('');


    let minAndMax = () => {
        reWriteMax(maxValue)
        reWriteCounter(startValue)
        setMessage('')
    };

    let reWriteMax = (maxValue: number) => {
        setFinalValue(maxValue)
    };

    let changeCount = () => {
        setCount(count + 1);
    };

    let resetCount = () => {
        setCount(startValue)
    };


    let reWriteCounter = (startValue: number) => {
        setCount(startValue)
    };

    useEffect(() => {
        if (startValue === maxValue ||
            startValue < 0 || maxValue < 0 ||
            startValue > maxValue) {
            setMessage('INCORRECT VALUE')
        } else {
            setMessage(' ENTER VALUES AND PRESS SET')
        }
    }, [startValue, maxValue])


    return (
        <div className="App">
            <CounterSettings
                startValue={startValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                minAndMax={minAndMax}/>
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                maximum={finalValue}
                count={count}
                message={message}
                changeCount={changeCount}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App;
