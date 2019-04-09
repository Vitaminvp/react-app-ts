import React, {Component, Suspense} from 'react';
import './App.css';
import { getComicsList } from './Components/api';
import Form from "./Components/form";


const Comics = React.lazy(() => import('./Components/comics'));

class App extends Component {
    state={
        comics: []
    };
    async componentDidMount() {

        const comics = await getComicsList();
        console.log({comics});
        this.setState(state => ({...state, comics: comics.results}))

    }

    render() {
        const { comics } = this.state;

        console.log('comic', comics);

        return (
            <div className="App">
                <header className="App-header">
                    <Form />
                    <Suspense fallback={<div>Loading...</div>}>
                        {
                            comics.map(item => <Comics key={ item['id'] } { ...item } />)
                        }
                    </Suspense>

                </header>
            </div>
        );
    }
}

export default App;
