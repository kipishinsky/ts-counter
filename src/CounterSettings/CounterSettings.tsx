import React from "react";
import Button from "../Button/Button";
import style from "../Button/Button.module.scss"


type PropsType = {
    setMaxValue: (valueAsNumber: number)=> void
    setStartValue: (valueAsNumber: number)=> void
    minAndMax: () => void
    maxValue: number
    startValue: number
}

function CounterSettings (props:PropsType) {

const value = props.maxValue === props.startValue || props.maxValue  < 0 || props.startValue > props.maxValue

    return (
        <div className="counter">
            <div className="title__wrapper">
                <div className="item">
                    <span>max value:</span>
                    <input className={value
                        ? style.startInputError:style.maxInput}
                           type="number"
                           value={props.maxValue}
                           onChange={e => {props.setMaxValue(e.currentTarget.valueAsNumber)}} />
                </div>
                <div className="item">
                    <span>start value:</span>
                    <input className={ props.maxValue === props.startValue
                    || props.startValue <= -1
                    || props.startValue > props.maxValue ||
                    props.maxValue < 0
                        ? style.startInputError : style.startInput}
                           type="number"
                           value={props.startValue}
                           onChange={e => {props.setStartValue(e.currentTarget.valueAsNumber)}}/>
                </div>

            </div>
            <div className="counter__btn">
                <Button disabled={props.startValue === props.maxValue
                || props.startValue <= -1
                || props.maxValue <= -1
                || props.maxValue < props.startValue}
                        onClick={props.minAndMax}
                        className={props.startValue === props.maxValue
                        || props.startValue <= -1
                        || props.maxValue <= -1
                        || props.startValue > props.maxValue
                            ? style.btnBlock : style.btn} title="set" />
            </div>
        </div>
    );
}

export default CounterSettings;