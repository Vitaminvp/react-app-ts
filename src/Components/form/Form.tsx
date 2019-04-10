import React, {SyntheticEvent} from "react";
import style from "./Form.module.scss";
import Input, { InputTypes } from "../input/Input";


interface Props {
    onSubmit: (value: string) => void,
    onInputChange: (value: string) => void,
    value: string

}
// interface State {
// //
// // }

class Form extends React.Component<Props, {}>{
    public state = { //not need any more
        value: ''
    };

    private handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
        this.props.onInputChange(e.currentTarget.value);
    };

    private onSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };
    render(){
        const {value} = this.props;
        return <form className={style.comicsForm} onSubmit={this.onSubmit}>
            <Input type={ InputTypes.TEXT } value={ value } onChange={this.handleInputChange}>Input</Input>
        </form>
    }
};

export default Form;