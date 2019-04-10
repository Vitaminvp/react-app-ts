import React, {SyntheticEvent} from "react";
import style from "./Input.module.scss";

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number'
}

interface Props {
    type: InputTypes,
    value: string,
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void
}


class Input extends React.PureComponent<Props>{
    render(){
        const {value} = this.props;
        return <div className={style.comicsInputWrapper}>
              <input type={ this.props.type } value={value} className={ style.comicsInput } onChange={this.props.onChange}/>
        </div>

    }
};

export default Input;