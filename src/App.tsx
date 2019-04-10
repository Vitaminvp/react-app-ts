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
        offset: 0,
        total: 0
    };
    async componentDidMount() {

        const comics: Data = await getComicsList();
        console.log({comics});
        this.setState(state => ({
            ...state,
            comics: comics.results,
            total: comics.total
        }))

    }
    private handleSubmit = (value:string) => {
        console.log("value", value);
    };

    private handleInputChange = (value: string) => {
        this.setState(state => ({
            ...state, value
        }));
    };
    private handleButtonClick = () => {

        const {offset, total} = this.state;
        const nextComicsList: number = total%offset > 0 ? offset+10 : 0;

        console.log("value", this.state.offset);
    };
    render() {
        const { comics, value } = this.state;


        const filteredComics: Array<Result> = comics.filter(item => {
            const regex = new RegExp(value, 'gi');
            // @ts-ignore
            return item['title'].match(regex);
        });

        console.log('searchComics', filteredComics);

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
                        <Button text={'Read more'} onButtonClick={this.handleButtonClick}/>
                    </Suspense>

                </header>
            </div>
        );
    }
}

export default App;
