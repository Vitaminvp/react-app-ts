import React, {ButtonHTMLAttributes, Suspense} from "react";
import style from "./Button.module.scss";
import classnames from "classnames"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onButtonClick: () => void;
    className?: string
}

export const Button: React.FunctionComponent<Props> = ({onButtonClick, children, className}) => {

    return <div className={style.wrapper}>
        <Suspense fallback={<div>Loading...</div>}>
            <button className={classnames(style.readMore, className)} onClick={onButtonClick}>{children}</button>
        </Suspense>
    </div>;

};

