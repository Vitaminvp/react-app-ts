import React, {SyntheticEvent} from "react";
import style from "./Form.module.scss";
import Input, { InputTypes } from "../input/Input";
import {log} from "util";


// interface Props {
//
// }
// interface State {
//
// }

class Form extends React.Component<{}, {}>{
    handleInputChange = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(EventTarget)
    };
    render(){

        return <form className={style.comicsForm}>
            <Input type={ InputTypes.TEXT ||'text' } onChange={this.handleInputChange}>Input</Input>
        </form>

    }
};

export default Form;