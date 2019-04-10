import React, {SyntheticEvent} from "react";
import style from "./Form.module.scss";
import Input, { InputTypes } from "../input/Input";


interface Props {
    onSubmit: (value: string) => void
}
interface State {
    value: string
}

class Form extends React.Component<Props, State>{
    public state = {
        value: 'qwe'
    };
    private handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState(state => ({
            ...state, value: e.currentTarget.value
        }));
    };
    private onSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };
    render(){
        const {value} = this.state;
        return <form className={style.comicsForm} onSubmit={this.onSubmit}>
            <Input type={ InputTypes.TEXT ||'text' } value={ value } onChange={this.handleInputChange}>Input</Input>
        </form>
    }
};

export default Form;