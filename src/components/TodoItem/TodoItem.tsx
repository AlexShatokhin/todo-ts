
import { useDispatch } from "react-redux"
import { deleteDeal } from "../../actions/actions"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "./TodoItem.scss"

interface DealProp {
    id: string,
    title: string,
    priority: string,
    isComplete: boolean
}

const TodoItem = ({id, title, priority, isComplete}:DealProp) => {

    const dispatch = useDispatch();

    return (
        <div className="todo-item">
            <div className="todo-item-is_completed">
                <input type="checkbox" name="complete" id="complete" checked = {isComplete} />
            </div>
            <div className="todo-item-title">{title}</div>
            <div className="todo-item-priority">{priority}</div>
            <div onClick={() => dispatch(deleteDeal(id))} className="todo-item-delete">
                <FontAwesomeIcon icon={faTrash} />            
            </div>
        </div>
    )
}

export default TodoItem