import { FC } from "react";
import {useSelector} from "react-redux"
import { Deal } from "../../interfaces/interfaces";

import TodoItem from "../TodoItem/TodoItem";

import "./ItemsList.scss"

const ItemsList:FC = () => {

    const deals = useSelector((state: {filterItems: Deal[]}) => state.filterItems); 

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