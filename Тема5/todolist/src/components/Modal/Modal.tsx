import React, { ChangeEvent } from 'react';
import { CategoryType } from '../../redux/categories/reducer';
import CategoryModal from './CategoryModal';
import './Modal.css';
import TaskModal from './TaskModal';

interface IProps {
    heading: string;
    cssId: string;
    titleText?: string;
    descriptionText?: string;
    categories?: Array<CategoryType>;
    isTask?: boolean;
    id?: number;
    title?: string;
    description?: string;
    changeTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    createCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CategoryCreateModal: React.FC<IProps> = ({
    heading,
    cssId,
    titleText,
    descriptionText,
    categories,
    id,
    title,
    description,
    isTask,
    changeTitleText,
    changeDescriptionText,
    createCategory,
}) => {
    return (
        <div id={cssId} className="modal">
            <div className="modal__wrapper">
                <a href="#close" title="Close" className="close-modal">
                    ×
                </a>
                <h1 className="modal__heading">{heading}</h1>
                {isTask ? (
                    <TaskModal title={title} description={description} categories={categories} />
                ) : (
                    <CategoryModal
                        title={title}
                        description={description}
                        titleText={titleText}
                        descriptionText={descriptionText}
                        changeTitleText={changeTitleText}
                        changeDescriptionText={changeDescriptionText}
                        createCategory={createCategory}
                    />
                )}
            </div>
        </div>
    );
};

export default CategoryCreateModal;
