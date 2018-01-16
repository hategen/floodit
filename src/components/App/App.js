import React, {PureComponent} from 'react';
import './App.css';

import AppHeader from '../Header/Header';
import AppFooter from '../Footer/Footer';

import FieldContainer from '../../containers/FieldContainer';
import GameSettingsContainer from '../../containers/GameSettingsContainer';
import ColorControlsContainer from '../../containers/ColorControlsContainer';

class App extends PureComponent {
    render() {
        const {won} = this.props;
        const classNames = ["App"];
        return (
            <div className={classNames}>
                <AppHeader
                    won={won}
                />
                <GameSettingsContainer/>
                <FieldContainer/>
                <ColorControlsContainer/>
                <AppFooter/>
            </div>
        );
    }
}

export default App;
