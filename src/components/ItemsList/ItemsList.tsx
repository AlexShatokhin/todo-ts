
import {useSelector} from "react-redux"

import TodoItem from "../TodoItem/TodoItem";

import "./ItemsList.scss"

interface Deal {
    id: string,
    title: string,
    priority: string,
    isComplete: boolean
}

const ItemsList = () => {

    const deals = useSelector((state: {items: Deal[]}) => state.items); 

    function renderDeals(){
        return deals.map((deal: Deal) => {
            return <TodoItem  {...deal}/>
        })
    }


    const dealsList = renderDeals();
    const emptyMessage = 
        <span className="empty">
            Oh no! This list is empty
        </span>
    return (
        <ul className="items-list">
            {dealsList.length ? dealsList : emptyMessage}
        </ul>
    )
}

export default ItemsList;