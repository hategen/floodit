import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from '../Header/Header';
import AppFooter from '../Footer/Footer';

import FieldContainer from '../../containers/FieldContainer';

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <AppHeader/>
                <FieldContainer/>
                <AppFooter/>
            </div>
        );
    }
}

export default App;
