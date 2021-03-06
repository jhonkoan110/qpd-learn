import '../Item.css';
import editIcon from '../../../assets/edit.png';
import deleteIcon from '../../../assets/delete.png';
import { CategoryType } from '../../../redux/categories/reducer';

interface IProps {
    category: CategoryType;
    openModal: (id?: number, title?: string, description?: string) => void;
    openDeleteModal: (id: number, title: string, description: string) => void;
}

const CategoryItem: React.FC<IProps> = ({ category, openModal, openDeleteModal }) => {
    const { id, title, description } = category;

    return (
        <div className="item">
            <div className="item__content block">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="item__actions">
                <div className="item__edit">
                    <button
                        className="item__button"
                        onClick={() => openModal(id, title, description)}>
                        <img src={editIcon} alt="edit icon" />
                    </button>
                </div>
                <div className="item__delete">
                    <button
                        className="item__button"
                        onClick={() => openDeleteModal(id, title, description)}>
                        <img src={deleteIcon} alt="delete icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;
