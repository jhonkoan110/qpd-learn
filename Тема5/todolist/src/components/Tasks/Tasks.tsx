import React from 'react';
import { ITask } from '../../redux/tasks/reducer';
import Item from '../Item/Item';
import './Tasks.css';

interface IProps {
    tasks: Array<ITask>;
    isTask: boolean;
    cssId: string;
    heading: string;
    deleteCssId: string;
    deleteHeading: string;
    deleteHandler: (id: number) => void;
}

const Tasks: React.FC<IProps> = ({
    tasks,
    isTask,
    cssId,
    heading,
    deleteCssId,
    deleteHeading,
    deleteHandler,
}) => {
    return (
        <div className="tasks">
            {tasks.map((item) => {
                return (
                    <Item
                        isTask={isTask}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        cssId={cssId + item.id}
                        heading={heading}
                        deleteCssId={deleteCssId + item.id}
                        deleteHeading={deleteHeading}
                        categoryId={item.categoryId || undefined}
                        deleteHandler={deleteHandler}
                    />
                );
            })}
        </div>
    );
};

export default Tasks;
