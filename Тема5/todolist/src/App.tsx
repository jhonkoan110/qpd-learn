import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
};
export default App;
