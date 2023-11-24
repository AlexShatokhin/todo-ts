const initialState = {
    isShowAddForm: false,
    isShowFilterForm: false,
    items: []
}

interface Deal {
    id: string,
    title: string, 
    priority: string, 
    isComplete: boolean
}

const reducer = (state = initialState, action: {type: string, payload: unknown}) => {
    switch(action.type){
        case "TOGGLE_ADD_FORM":
            return {
                ...state,
                isShowAddForm: !state.isShowAddForm
            }
        case "TOGGLE_FILTER_FORM":
            return {
                ...state,
                isShowFilterForm: !state.isShowFilterForm
            }
        case "ADD_DEAL":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "DELETE_DEAL":
            return {
                ...state,
                items: state.items.filter((item:Deal) => item.id !== action.payload)
            }
        default: return state
    }
}

export default reducer