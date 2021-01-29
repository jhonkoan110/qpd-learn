import React, { useState } from 'react';
import TasksModal from '../../Modal/TasksModal/TasksModal';

const TaskPage = () => {
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
                Добавить задачу
            </button>
            {activeModal && (
                <TasksModal
                    closeModal={closeModalClickHandler}
                    modalHeader="Добавить задачу"
                    modalButtonText="Создать"
                />
            )}
        </div>
    );
};

export default TaskPage;
