import IndexedDb from './IndexedDB';
import { setCategories } from '../redux/categories/actionCreators';
import {
    addTask,
    deleteTask,
    editTask,
    setTasks,
    tasksIncrementId,
    tasksIsLoading,
} from '../redux/tasks/actionCreators';
import { ITask } from '../redux/tasks/reducer';
import { CategoryType } from '../redux/categories/reducer';

// Загрузка всех задач из базы данных в редакс
export const tasksFetchData = () => (dispatch: any) => {
    dispatch(tasksIsLoading(true));

    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        const tasks = await indexedDb.getAllValue('tasks');
        const categories = await indexedDb.getAllValue('categories');

        // Добавление задачам категорий
        const tasksWithCategories = tasks.map((task: ITask) => {
            categories.map((category: CategoryType) => {
                const categoryId = category.id;
                const categoryTitle = category.title;

                if (task.categoryId === categoryId) {
                    task = { ...task, categoryTitle };
                }
            });
            return task;
        });

        dispatch(setTasks(tasksWithCategories));
        dispatch(setCategories(categories));
        dispatch(tasksIsLoading(false));
    };
    runIndexedDb();
};

// Добавление новой задачи в редакс и в базу данных
export const addTaskFetchData = (newTask: ITask) => (dispatch: any) => {
    dispatch(tasksIncrementId());
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putValue('tasks', newTask);
    };
    runIndexedDb();
    dispatch(addTask(newTask));
};

// Удаление задачи по ID из базы данных и из редакса
export const deleteTaskFetchData = (id: number) => (dispatch: any) => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.deleteValue('tasks', id);
    };
    runIndexedDb();
    dispatch(deleteTask(id));
};

// Редактирование задачи в базе данных и в редаксе
export const editTaskFetchData = (newTask: ITask) => (dispatch: any) => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putValue('tasks', newTask);
    };
    runIndexedDb();
    dispatch(editTask(newTask));
};

// Обновление всех задач в БД
export const updateAllTasksFetchData = (tasks: Array<ITask>) => () => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putBulkValue('tasks', tasks);
    };

    runIndexedDb();
};
