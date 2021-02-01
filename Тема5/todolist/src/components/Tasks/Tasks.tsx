import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { deleteTaskFetchData, tasksFetchData } from '../../redux/tasks/actionCreators';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
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
        return <Loader />;
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
