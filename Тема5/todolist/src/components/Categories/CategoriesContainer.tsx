import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCategory } from '../../redux/categories/actions';
import { CategoryType } from '../../redux/categories/reducer';
import { AppStateType } from '../../redux/store';
import Categories from './Categories';

interface IProps {
    categories: Array<CategoryType>;
    deleteCategory: (id: number) => void;
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
        this.props.deleteCategory(id);
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
    return {
        deleteCategory: (id: number) => dispatch(deleteCategory(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
