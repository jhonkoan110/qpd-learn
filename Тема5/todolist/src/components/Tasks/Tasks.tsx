import { debug } from 'console';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import {
    deleteTask,
    deleteTaskFetchData,
    setTasks,
    tasksFetchData,
    tasksIsLoading,
} from '../../redux/tasks/actionCreators';
import IndexedDb from '../../services/IndexedDB';
import Item from '../Item/Item';
import './Tasks.css';

const Tasks = () => {
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);
    const isLoading = useSelector((state: AppStateType) => state.taskList.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksFetchData());
    }, []);

    const deleteItemHandler = (id: number) => {
        dispatch(deleteTaskFetchData(id));
    };

    if (isLoading) {
        return <div className="tasks">Загрузка...</div>;
    }

    return (
        <div className="tasks">
            {tasks.map((task) => {
                return (
                    <Item
                        isTask={true}
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        deleteModalText="задачу"
                        deleteItem={deleteItemHandler}
                    />
                );
            })}
        </div>
    );
};

export default Tasks;
