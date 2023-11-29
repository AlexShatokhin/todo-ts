import { Deal } from "../interfaces/interfaces";

export const toggleAddForm = () => ({
    type: "TOGGLE_ADD_FORM"
});

export const toggleFilterForm = () => ({
    type: "TOGGLE_FILTER_FORM"
});

export const addDeal = (deal: Deal) => ({
    type: "ADD_DEAL",
    payload: deal
})

export const deleteDeal = (id: string | number) => ({
    type: "DELETE_DEAL",
    payload: id
})

export const editDeal = (item: Deal) => ({
    type: "EDIT_DEAL",
    payload: item
})

export const filterDeal = (filter: {name: string, priority: string, isComplete: "" | boolean}) => ({
    type: "FITLER_DEAL",
    payload: filter
})