import React, {SyntheticEvent} from "react";
import style from "./Input.module.scss";

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number'
}

interface Props {
    type: InputTypes,
    onChange: (e: SyntheticEvent) => void
}
interface State {
    value: string
}

class Input extends React.Component<Props, State>{
    render(){

        return <div className={style.comicsInputWrapper}>
              <input type={ this.props.type } className={ style.comicsInput } onChange={this.props.onChange}/>
        </div>

    }
};

export default Input;