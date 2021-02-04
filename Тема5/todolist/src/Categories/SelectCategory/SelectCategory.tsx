import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import './SelectCategory.css';

interface SelectCategoryProps {
    selectedCategory: string;
    onCategoryClick: (categoryId: number, categoryTitle: string) => void;
    onClearCategoriesClick: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({
    selectedCategory,
    onCategoryClick,
    onClearCategoriesClick,
}) => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);

    return (
        <fieldset className="modal__fieldset  task-modal__fieldset ml-24">
            <legend className="modal__legend task-modal__legend">Категория</legend>

            <div className="dropdown">
                <div className="dropdown-select">
                    <div className="select">
                        {selectedCategory || (
                            <span className="select-placeholder">Выберите категорию</span>
                        )}
                    </div>
                    <div className="triangle"></div>
                </div>
                <div className="dropdown-list">
                    <div className="dropdown-list__item" onClick={onClearCategoriesClick}>
                        Очистить категорию
                    </div>
                    {categories.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="dropdown-list__item"
                                onClick={() => onCategoryClick(item.id, item.title)}>
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            </div>
        </fieldset>
    );
};

export default SelectCategory;
