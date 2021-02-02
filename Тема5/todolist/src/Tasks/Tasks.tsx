import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';
import Loader from '../components/Loader/Loader';
import './Tasks.css';
import { deleteTaskFetchData, tasksFetchData } from '../redux/tasks/service';
import { ITask } from '../redux/tasks/reducer';
import TaskItem from '../components/Item/TaskItem/TaskItem';

const Tasks = () => {
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);
    const isLoading = useSelector((state: AppStateType) => state.taskList.isLoading);
    // const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksFetchData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteItemHandler = (id: number) => {
        dispatch(deleteTaskFetchData(id));
        dispatch(tasksFetchData());
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="tasks">
            {tasks.map((task: ITask) => {
                return (
                    task && (
                        <TaskItem
                            isTask={true}
                            categoryTitle={task.categoryTitle}
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            deleteModalText="задачу"
                            deleteItem={deleteItemHandler}
                        />
                    )
                );
            })}
        </div>
    );
};

export default Tasks;
