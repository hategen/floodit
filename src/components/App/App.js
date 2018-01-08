import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from '../Header/Header';
import AppFooter from '../Footer/Footer';

import FieldContainer from '../../containers/FieldContainer';
import GameSettingsContainer from '../../containers/GameSettingsContainer';

class App extends Component {
    render() {
        return (
            <div
                className="App"
                style={{backgroundColor: this.props.backgroundColor}}
            >
                <AppHeader
                    won={this.props.won}
                />
                <GameSettingsContainer/>
                <FieldContainer/>
                <AppFooter/>
            </div>
        );
    }
}

export default App;
