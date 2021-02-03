import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';
import Loader from '../components/Loader/Loader';
import './Tasks.css';
import { tasksFetchData } from '../service/tasks';
import { ITask } from '../redux/tasks/reducer';
import TaskItem from '../components/Item/TaskItem/TaskItem';

interface TasksProps {
    openModal: (id?: number, title?: string, description?: string) => void;
    openDeleteModalHandler: (id: number, title: string, description: string) => void;
}

const Tasks: React.FC<TasksProps> = ({ openModal, openDeleteModalHandler }) => {
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);
    const isLoading = useSelector((state: AppStateType) => state.taskList.isLoading);
    const dispatch = useDispatch();

    // Загрузить задачи
    useEffect(() => {
        dispatch(tasksFetchData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="tasks">
            {tasks.map((task: ITask) => {
                return (
                    task && (
                        <TaskItem
                            key={task.id}
                            task={task}
                            openModal={openModal}
                            openDeleteModal={openDeleteModalHandler}
                        />
                    )
                );
            })}
        </div>
    );
};

export default Tasks;
