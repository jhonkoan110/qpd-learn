import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <nav className="header__nav">
                    <h1 className="header__logo">
                        <Link to="/">ToDo List</Link>
                    </h1>
                    <div className="header__nav__items-container">
                        <div className="header__nav-item">
                            <Link to="/tasks">Задачи</Link>
                        </div>
                        <div className="header__nav-item">
                            <NavLink to="/categories">Категории</NavLink>
                        </div>
                    </div>
                </nav>
                <div className="header__nav-add-task">Добавить задачу</div>
            </div>
        </header>
    );
};

export default Header;
