import React, {Component, Suspense} from 'react';
import './App.css';
import { getComicsList } from './Components/api';

const Comics = React.lazy(() => import('./Components/comics'));
//import Image from "./Components/image/Image";

//const Image = ({ path, extension}) => (<img src={`${path}.${extension}`} />);
class App extends Component {
    state={
        comics: []
    }
    async componentDidMount() {

        const comics = await getComicsList();
        console.log({comics});
        this.setState(state => ({...state, comics: comics.results}))

    }

    render() {
        const { comics } = this.state;
        console.log('comic', comics);

        // @ts-ignore
        return (
            <div className="App">
                <header className="App-header">

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
