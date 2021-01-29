import React, { useState } from 'react';
import CategoryModal from '../../Modal/CategoryModal/CategoryModal';

const CategoryPage = () => {
    const [activeModal, setActiveModal] = useState(false);

    const openModalClickHadnler = () => {
        setActiveModal(true);
    };

    const closeModalClickHandler = () => {
        setActiveModal(false);
    };

    return (
        <div>
            <button className="header__add-item" onClick={openModalClickHadnler}>
                Добавить категорию
            </button>
            {activeModal && (
                <CategoryModal
                    closeModal={closeModalClickHandler}
                    modalHeader="Добавить категорию"
                    modalButtonText="Создать"
                />
            )}
        </div>
    );
};

export default CategoryPage;
