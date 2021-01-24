import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <nav className="header__nav">
                    <h1 className="header__logo">ToDo List</h1>
                    <div className="header__nav__items-container">
                        <div className="header__nav-item">Задачи</div>
                        <div className="header__nav-item">Категории</div>
                    </div>
                </nav>
                <div className="header__nav-add-task">Добавить задачу</div>
            </div>
        </header>
    );
};

export default Header;
