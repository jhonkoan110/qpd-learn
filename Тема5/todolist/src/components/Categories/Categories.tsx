import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    categoriesFetchData,
    deleteCategory,
    deleteCategoryFetchData,
} from '../../redux/categories/actionCreators';
import { AppStateType } from '../../redux/store';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import './Categories.css';

const Categories: React.FC = () => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    const isLoading = useSelector((state: AppStateType) => state.categoryList.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesFetchData());
    }, []);

    const deleteItemHandler = (id: number) => {
        dispatch(deleteCategoryFetchData(id));
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="categories">
            {categories.map((category) => {
                return (
                    <Item
                        deleteModalText="категорию"
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
