import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryPage from '../components/Header/Pages/CategoryPage';
import TaskPage from '../components/Header/Pages/TaskPage';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/tasks">
                    <TaskPage />
                </Route>
                <Route path="/categories">
                    <CategoryPage />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
