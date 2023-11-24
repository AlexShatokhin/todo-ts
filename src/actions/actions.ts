interface Deal {
    id: string,
    title: string, 
    priority: string, 
    isComplete: boolean
}

export const toggleAddForm = () => ({
    type: "TOGGLE_ADD_FORM"
});

export const togleeFilterForm = () => ({
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