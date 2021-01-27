export const DELETE_CATEGORY: string = 'DELETE_CATEGORY';
export const EDIT_CATEGORY: string = 'EDIT-CATEGORY';

export type DeleteCategoryActionType = {
    type: typeof DELETE_CATEGORY,
    id: number
}