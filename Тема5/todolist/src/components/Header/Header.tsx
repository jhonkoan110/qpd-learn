import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './Header.css';

interface IProps {}

const Header: React.FC<IProps> = () => {
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
                            <a href="#open-create-task-modal" className="header__add-item">
                                Добавить задачу
                            </a>
                            <Modal
                                heading="Добавить задачу"
                                cssId="open-create-task-modal"
                                isTask={true}
                            />
                        </Route>
                        <Route path="/categories">
                            <a href="#open-create-category-modal" className="header__add-item">
                                Добавить категорию
                            </a>
                            <Modal
                                heading="Добавить категорию"
                                cssId="open-create-category-modal"
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </header>
    );
};

export default Header;
