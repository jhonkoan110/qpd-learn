import { Component } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { ITask } from '../../redux/tasks/reducer';
import Tasks from './Tasks';

interface IProps {
    tasks: Array<ITask>;
}

interface IState {
    cssId: string;
    deleteCssId: string;
    heading: string;
    deleteHeading: string;
    isTask: boolean;
}

class TasksContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            cssId: 'open-edit-task-modal',
            deleteCssId: 'open-delete-task-modal',
            heading: 'Редактировать задачу',
            deleteHeading: 'Удаление задачи',
            isTask: true,
        };
    }

    deleteHandler = (id: number) => {};

    render() {
        const { tasks } = this.props;
        const { cssId, heading, isTask, deleteCssId, deleteHeading } = this.state;
        return (
            <Tasks
                tasks={tasks}
                deleteHandler={this.deleteHandler}
                isTask={isTask}
                cssId={cssId}
                heading={heading}
                deleteCssId={deleteCssId}
                deleteHeading={deleteHeading}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        tasks: state.tasks.tasks,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
