import React, {PureComponent} from "react";
import style from "./Button.module.scss";
import {Thumbnail} from "../types/apitypes";


interface Props {
    onButtonClick: () => void;
    text: string;
}

class Button extends PureComponent<Props, {}>{


    render(){
        return <div className={style.wrapper}>
            <button className={style.readMore} onClick={this.props.onButtonClick}>{this.props.text}</button>
        </div>;

    }
};

export default Button;