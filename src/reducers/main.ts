import { Deal } from "../interfaces/interfaces"

const data = localStorage.getItem("deals");

const initialState : {
    isShowAddForm: boolean,
    isShowFilterForm: boolean,
    items: Deal[],
    filterData : {name: string, priority: string, isComplete: "" | boolean},
    filterItems: Deal[]
} = {
    isShowAddForm: false,
    isShowFilterForm: false,
    items: data !== null ? JSON.parse(data) : [],
    filterData : {name: "", priority: "", isComplete: ""},
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
                filterItems: dealsList.filter((deal: Deal) => (state.filterData.name === "" || deal.title.indexOf(state.filterData.name) !== -1) && (state.filterData.priority === "" || state.filterData.priority === deal.priority) && (state.filterData.isComplete === "" || state.filterData.isComplete === deal.isComplete))
            }
        case "DELETE_DEAL":
            dealsList = state.items.filter((item:Deal) => item.id !== action.payload)
            localStorage.setItem("deals", JSON.stringify(dealsList))
            return {
                ...state,
                items: dealsList,
                filterItems: dealsList.filter((deal: Deal) => (state.filterData.name === "" || deal.title.indexOf(state.filterData.name) !== -1) && (state.filterData.priority === "" || state.filterData.priority === deal.priority) && (state.filterData.isComplete === "" || state.filterData.isComplete === deal.isComplete))
            }
        case "EDIT_DEAL":
            dealsList = state.items.map((item: Deal) => item.id === (action.payload as Deal).id ? action.payload : item)
            localStorage.setItem("deals", JSON.stringify(dealsList))
            return {
                ...state,
                items: dealsList,
                filterItems: dealsList.filter((deal: Deal) => (state.filterData.name === "" || deal.title.indexOf(state.filterData.name) !== -1) && (state.filterData.priority === "" || state.filterData.priority === deal.priority) && (state.filterData.isComplete === "" || state.filterData.isComplete === deal.isComplete))

            }
        case "FITLER_DEAL":
            const filterObj = action.payload as {name: string, priority: string, isComplete: "" | boolean};

            return {
                ...state,
                filterData: action.payload,
                filterItems: state.items.filter((deal: Deal) => (filterObj.name === "" || deal.title.indexOf(filterObj.name) !== -1) && (filterObj.priority === "" || filterObj.priority === deal.priority) && (filterObj.isComplete === "" || filterObj.isComplete === deal.isComplete))
            }

        default: return state
    }
}

export default reducer