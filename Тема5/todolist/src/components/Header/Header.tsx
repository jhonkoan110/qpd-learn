import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Header.css';
import CategoryPage from './Pages/CategoryPage';
import TaskPage from './Pages/TaskPage';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <nav className="header__nav">
                    <h1 className="header__logo">ToDo List</h1>
                    <div className="header__nav__items-container">
                        <div className="header__nav-item">
                            <NavLink to="/tasks" activeClassName="active">
                                Задачи
                            </NavLink>
                        </div>
                        <div className="header__nav-item">
                            <NavLink to="/categories" activeClassName="active">
                                Категории
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <div className="header__nav-add-task">
                    <Switch>
                        <Route path="/tasks">
                            <TaskPage />
                        </Route>
                        <Route path="/categories">
                            <CategoryPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </header>
    );
};

export default Header;
