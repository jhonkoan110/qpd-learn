import { Component } from 'react';
import { connect } from 'react-redux';
import { CategoryType } from '../../redux/categories/reducer';
import { AppStateType } from '../../redux/store';
import Categories from './Categories';

interface IProps {
    categories: Array<CategoryType>;
}

interface IState {
    cssId: string;
    heading: string;
    deleteHeading: string;
    deleteCssId: string;
}

class CategoriesContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            cssId: 'open-edit-category-modal',
            heading: 'Редактировать категорию',
            deleteCssId: 'open-delete-category-modal',
            deleteHeading: 'Удаление категории',
        };
    }

    deleteHandler = (id: number) => {
        console.log(`Задача с id: ${id} удалена`);
    };

    render() {
        const { categories } = this.props;
        const { cssId, heading, deleteCssId, deleteHeading } = this.state;

        return (
            <Categories
                categories={categories}
                cssId={cssId}
                heading={heading}
                deleteCssId={deleteCssId}
                deleteHeading={deleteHeading}
                deleteHandler={this.deleteHandler}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        categories: state.categories.categories,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
