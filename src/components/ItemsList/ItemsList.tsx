
import TodoItem from "../TodoItem/TodoItem";

import "./ItemsList.scss"
const ItemsList = () => {
    return (
        <ul className="items-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}

export default ItemsList;