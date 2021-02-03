import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';
import Loader from '../components/Loader/Loader';
import './Categories.css';
import { categoriesFetchData } from '../service/categories';
import CategoryItem from '../components/Item/CategoryItem/CategoryItem';

interface CategoriesProps {
    setId: Dispatch<SetStateAction<number>>;
    openModal: (id?: number, title?: string, description?: string) => void;
    openDeleteModalHandler: (id: number, title: string, description: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ setId, openModal, openDeleteModalHandler }) => {
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    const isLoading = useSelector((state: AppStateType) => state.categoryList.isLoading);
    const dispatch = useDispatch();

    // Загрузить категории
    useEffect(() => {
        dispatch(categoriesFetchData());
        // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="categories">
            {categories.map((category) => {
                return (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        openModal={openModal}
                        openDeleteModal={openDeleteModalHandler}
                    />
                );
            })}
        </div>
    );
};

export default Categories;
