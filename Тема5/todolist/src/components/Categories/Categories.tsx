import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../../redux/categories/actionCreators';
import { AppStateType } from '../../redux/store';
import Item from '../Item/Item';
import './Categories.css';

const Categories: React.FC = () => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    const dispatch = useDispatch();

    const deleteItemHandler = (id: number) => {
        dispatch(deleteCategory(id));
    };

    return (
        <div className="categories">
            {categories.map((category) => {
                return (
                    <Item
                        isCategory={true}
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        description={category.description}
                        deleteItem={deleteItemHandler}
                    />
                );
            })}
        </div>
    );
};

export default Categories;
