import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { addCategory } from '../../redux/categories/actions';
import { CategoryType } from '../../redux/categories/reducer';
import { AppStateType } from '../../redux/store';
import { addTask } from '../../redux/tasks/actions';
import { ITask } from '../../redux/tasks/reducer';
import Modal from '../Modal/Modal';
import './Header.css';

const Header: React.FC = () => {
    const [titleText, setTitleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const dispatch = useDispatch();

    const tasks: Array<ITask> = useSelector((state: AppStateType) => state.tasks.tasks);

    const categories: Array<CategoryType> = useSelector(
        (state: AppStateType) => state.categories.categories,
    );

    const changeAddTitleTextInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setTitleText(text);
    };

    const changeAddDescriptionTextInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setDescriptionText(text);
    };

    const createCategoryButtonClickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        const newCategory: CategoryType = {
            id: categories.length + 1,
            title: titleText,
            description: descriptionText,
        };

        dispatch(addCategory(newCategory));
        setTitleText('');
        setDescriptionText('');
    };

    const createTaskButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newTask: ITask = {
            id: tasks.length + 1,
            title: titleText,
            description: descriptionText,
        };

        dispatch(addTask(newTask));
        setTitleText('');
        setDescriptionText('');
    };

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
                                id={0}
                                title=""
                                description=""
                                heading="Добавить задачу"
                                cssId="open-create-task-modal"
                                titleText={titleText}
                                descriptionText={descriptionText}
                                isTask={true}
                                categories={categories}
                                changeAddTitleText={changeAddTitleTextInputHandler}
                                changeAddDescriptionText={changeAddDescriptionTextInputHandler}
                                createTask={createTaskButtonClickHandler}
                            />
                        </Route>
                        <Route path="/categories">
                            <a href="#open-create-category-modal" className="header__add-item">
                                Добавить категорию
                            </a>
                            <Modal
                                id={0}
                                title=""
                                description=""
                                heading="Добавить категорию"
                                cssId="open-create-category-modal"
                                titleText={titleText}
                                descriptionText={descriptionText}
                                changeAddTitleText={changeAddTitleTextInputHandler}
                                changeAddDescriptionText={changeAddDescriptionTextInputHandler}
                                createCategory={createCategoryButtonClickHandler}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </header>
    );
};

export default Header;
