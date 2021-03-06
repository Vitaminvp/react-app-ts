import React, {PureComponent} from "react";
import style from "./Comics.module.scss";
import {Thumbnail} from "../types/apitypes";


interface Props {
    id: string;
    thumbnail: Thumbnail;
    title?: string;
    description?: string;
}

class Comics extends PureComponent<Props, {}>{

    render(){
        console.log(this.props)
        const {description, thumbnail, title, id} = this.props;
        return <div className={ style.comics } data-id={id} style={{backgroundImage: `url(${thumbnail.path+'.'+thumbnail.extension})`}}>
            <h2>{ title }</h2>
            {/*<img src={`${thumbnail.path+'.'+thumbnail.extension}`} alt={title} className={style.comics__img}/>*/}
            <p>{description}</p>
        </div>;

    }
};

export default Comics;