import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { deleteTask } from '../../redux/tasks/actionCreators';
import Item from '../Item/Item';
import './Tasks.css';

const Tasks = () => {
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);
    const dispatch = useDispatch();

    const deleteItemHandler = (id: number) => {
        dispatch(deleteTask(id));
    };
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
