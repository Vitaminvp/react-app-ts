import React, {ButtonHTMLAttributes} from "react";
import style from "./Button.module.scss";
import classnames from "classnames"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onButtonClick: () => void;
    className?: string
}

export const Button: React.FunctionComponent<Props> = ({onButtonClick, children, className}) => {

    return <div className={style.wrapper}>
        <button className={classnames(style.readMore, className)} onClick={onButtonClick}>{children}</button>
    </div>;

};

