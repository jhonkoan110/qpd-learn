import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesContainer from '../Categories/CategoriesContainer';
import TasksContainer from '../Tasks/TasksContainer';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/tasks">
                    <TasksContainer />
                </Route>
                <Route path="/categories">
                    <CategoriesContainer />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
