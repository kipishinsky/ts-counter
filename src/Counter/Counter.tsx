import React from "react";
import Button from "./../Button/Button";
import style from "../Button/Button.module.sass"


type PropsType = {
    startValue: number
    maxValue: number
    count: number
    changeCount: () => void
    resetCount: () => void
    maximum: number
    message: string
}


function Counter(props: PropsType) {

    return (
        <div className="counter">
            <div className="title__wrapper">
                <span className={ props.maxValue === props.startValue || props.startValue <= -1 || props.startValue > props.maxValue || props.maxValue < 0 ? "error__message" : ""}>
                {props.message ? props.message : props.count}
                </span>
            </div>
            <div className="counter__btn">
                <Button disabled={props.count === props.maximum}
                        onClick={props.changeCount}
                        className={props.count === props.maximum ? style.btnBlock : style.btn} title="INC"/>
                <Button disabled={props.count === 0}
                        onClick={props.resetCount}
                        className={props.count === 0 ? style.btnBlock : style.btn} title="RESET"/>
            </div>
        </div>
    );
}

export default Counter;