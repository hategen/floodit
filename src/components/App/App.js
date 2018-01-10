import React, {PureComponent} from 'react';
import './App.css';

import AppHeader from '../Header/Header';
import AppFooter from '../Footer/Footer';

import FieldContainer from '../../containers/FieldContainer';
import GameSettingsContainer from '../../containers/GameSettingsContainer';

class App extends PureComponent {
    render() {
        const {backgroundColor, won} = this.props;
        const classNames = ["App", `color-${backgroundColor}`].join(' ');
        return (
            <div className={classNames}>
                <AppHeader
                    won={won}
                />
                <GameSettingsContainer/>
                <FieldContainer/>
                <AppFooter/>
            </div>
        );
    }
}

export default App;
