import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';
import Loader from '../components/Loader/Loader';
import './Categories.css';
import { categoriesFetchData, deleteCategoryFetchData } from '../redux/categories/service';
import CategoryItem from '../components/Item/CategoryItem/CategoryItem';
import { deleteCategoryId } from '../redux/tasks/actionCreators';
import { updateAllTasksFetchData } from '../redux/tasks/service';

const Categories: React.FC = () => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    const isLoading = useSelector((state: AppStateType) => state.categoryList.isLoading);
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesFetchData());
        // eslint-disable-next-line
    }, []);

    const deleteItemHandler = (id: number) => {
        dispatch(deleteCategoryId(id));
        dispatch(updateAllTasksFetchData(tasks));
        dispatch(deleteCategoryFetchData(id));
        dispatch(categoriesFetchData());
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="categories">
            {categories.map((category) => {
                return (
                    <CategoryItem
                        deleteModalText="категорию"
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
