import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Tasks from '../Tasks/Tasks';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/tasks">
                    <Tasks />
                </Route>
                <Route path="/categories">
                    <Categories />
                </Route>
            </Switch>
            {/* <Loader /> */}
        </main>
    );
};

export default Main;
