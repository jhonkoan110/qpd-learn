import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';

interface SelectCategoryProps {
    selectedCategory: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ selectedCategory, onChange }) => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    return (
        <fieldset className="modal__fieldset  task-modal__fieldset ml-24">
            <legend className="modal__legend task-modal__legend">Категория</legend>
            <select
                name="categories"
                id="categories"
                placeholder="Выберите категорию"
                className="modal__select"
                value={selectedCategory}
                onChange={onChange}>
                <option value=""></option>
                {categories.map((item) => {
                    return (
                        <option key={item.id} value={item.title} category-id={item.id}>
                            {item.title}
                        </option>
                    );
                })}
            </select>
        </fieldset>
    );
};

export default SelectCategory;
