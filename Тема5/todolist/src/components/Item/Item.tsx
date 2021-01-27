import React from 'react';
import Modal from '../Modal/Modal';
import './Item.css';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import DeleteModal from '../Modal/DeleteModal';

interface IProps {
    title: string;
    id: number;
    description: string;
    isTask: boolean;
    categoryId: number | undefined;
    cssId: string;
    heading: string;
    deleteCssId: string;
    deleteHeading: string;
    deleteHandler: (id: number) => void;
}

const CategoryItem: React.FC<IProps> = ({
    id,
    title,
    description,
    categoryId,
    isTask,
    cssId,
    heading,
    deleteCssId,
    deleteHeading,
    deleteHandler,
}) => {
    return (
        <div className="item">
            <div className="item__content block">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="item__actions">
                <div className="item__edit">
                    <a href={`#${cssId}`}>
                        <img src={editIcon} alt="edit icon" />
                    </a>
                </div>
                <div className="item__delete">
                    <a href={`#${deleteCssId}`}>
                        <img src={deleteIcon} alt="delete icon" onClick={() => deleteHandler(id)} />
                    </a>
                </div>
            </div>
            <Modal
                heading={heading}
                cssId={cssId}
                title={title}
                description={description}
                id={id}
                isTask={isTask}
            />
            <DeleteModal
                isTask={isTask}
                title={title}
                deleteCssId={deleteCssId}
                deleteHeading={deleteHeading}
            />
        </div>
    );
};

export default CategoryItem;
