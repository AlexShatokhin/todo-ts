import { Deal } from "../interfaces/interfaces"

const data = localStorage.getItem("deals");

const initialState = {
    isShowAddForm: false,
    isShowFilterForm: false,
    items: data !== null ? JSON.parse(data) : [],
    filterItems: data !== null ? JSON.parse(data) : []
}


const reducer= (state = initialState, action: {type: string, payload: unknown}) => {
    let dealsList: any[];
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
            dealsList = [...state.items, action.payload];
            localStorage.setItem("deals", JSON.stringify(dealsList))            
            return {
                ...state,
                items: dealsList,
                filterItems: dealsList
            }
        case "DELETE_DEAL":
            dealsList = state.items.filter((item:Deal) => item.id !== action.payload)
            localStorage.setItem("deals", JSON.stringify(dealsList))
            return {
                ...state,
                items: dealsList,
                filterItems: dealsList
            }
        case "EDIT_DEAL":
            dealsList = state.items.map((item: Deal) => item.id === (action.payload as Deal).id ? action.payload : item)
            localStorage.setItem("deals", JSON.stringify(dealsList))
            return {
                ...state,
                items: dealsList,
                filterItems: dealsList

            }
        case "FITLER_DEAL":
            const filterObj = action.payload as {name: string, priority: string};

            let filterItems: Deal[] = state.items.filter((item: Deal) => item.title.indexOf(filterObj.name) !== -1 || filterObj.name === "");
            filterItems = filterItems.filter((item: Deal) => item.priority === filterObj.priority || filterObj.priority === "");
            return {
                ...state,
                filterItems
            }

        default: return state
    }
}

export default reducer