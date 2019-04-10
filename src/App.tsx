import React, {Component, Suspense, SyntheticEvent} from 'react';
import './App.module.scss';
import { getComicsList } from './Components/api';
import Form from "./Components/form";
import style from "./App.module.scss";
import {Data, Result} from "./Components/types/apitypes";
import Button from "./Components/button";


const Comics = React.lazy(() => import('./Components/comics'));

class App extends Component {
    state={
        value: '',
        comics: [],
        limit: 40,
        total: 0
    };
    async componentDidMount() {
        const offset:number= -1;
        const comics: Data = await getComicsList(offset);
        console.log({comics});
        this.setState(state => ({
            ...state,
            comics: comics.results,
            total: comics.total
        }));

    }
    private handleSubmit = (value:string) => {
        console.log("value", value);
    };

     private handleInputChange = (value: string) => {
        this.setState(state => ({
            ...state, value
        }));
    };
    handleButtonClick = () => {

        const { limit, comics } = this.state;

        console.log('nextComicsList', limit);
        getComicsList(limit).then(newComics => {
            console.log("newComics", newComics);
            console.log("comics", comics);
            this.setState({
                comics: newComics.results,
                limit: (20+limit)
            });
            console.log('this.state', this.state);
        });
    };

    render() {
        const { comics, value, total, limit } = this.state;


        const filteredComics: Array<Result> = comics.filter(item => {
            const regex = new RegExp(value, 'gi');
            // @ts-ignore
            return item['title'].match(regex);
        });

        return (
            <div className="App">
                <header className="App-header">

                    <Form onSubmit={this.handleSubmit} onInputChange={this.handleInputChange} value={value}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className={style.App__comicsWrapper}>
                            {
                                filteredComics.map(item => <Comics key={ item['id'] } { ...item } />)
                            }
                        </div>
                        <Button text={`Read more ${ total-limit > 0 ? `(left: ${total-limit})`:''}`} onButtonClick={this.handleButtonClick}/>
                    </Suspense>

                </header>
            </div>
        );
    }
}

export default App;
