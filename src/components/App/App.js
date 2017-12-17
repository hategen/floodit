import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from '../Header/Header';
import AppFooter from '../Footer/Footer';

import FieldContainer from '../../containers/FieldContainer';
import GameSettingsContainer from '../../containers/GameSettingsContainer';

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <AppHeader/>
                <GameSettingsContainer/>
                <FieldContainer/>
                <AppFooter/>
            </div>
        );
    }
}

export default App;
