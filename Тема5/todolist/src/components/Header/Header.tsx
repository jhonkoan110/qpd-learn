import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

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
            </div>
        </header>
    );
};

export default Header;
