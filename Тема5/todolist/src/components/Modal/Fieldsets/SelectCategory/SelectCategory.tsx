import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';

const SelectCategory = () => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    return (
        <fieldset className="modal__fieldset modal__fs1 task-modal__fieldset">
            <legend className="modal__legend task-modal__legend">Категория</legend>
            <select name="" id="" placeholder="Выберите категорию">
                <option value=""></option>
                {categories.map((item) => {
                    return (
                        <option key={item.id} value={item.title}>
                            {item.title}
                        </option>
                    );
                })}
            </select>
        </fieldset>
    );
};

export default SelectCategory;
