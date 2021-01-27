import React from 'react';
import { CategoryType } from '../../redux/categories/reducer';
import './Categories.css';
import Item from '../Item/Item';

interface IProps {
    categories: Array<CategoryType>;
    cssId: string;
    heading: string;
    deleteHeading: string;
    deleteCssId: string;
    deleteHandler: (id: number) => void;
}

const Categories: React.FC<IProps> = ({
    categories,
    cssId,
    heading,
    deleteCssId,
    deleteHeading,
    deleteHandler,
}) => {
    return (
        <div className="categories">
            {categories.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cssId={cssId + item.id}
                        heading={heading}
                        deleteCssId={deleteCssId + item.id}
                        deleteHeading={deleteHeading}
                        isTask={false}
                        description={item.description}
                        categoryId={item.id}
                        deleteHandler={deleteHandler}
                    />
                );
            })}
        </div>
    );
};

export default Categories;
