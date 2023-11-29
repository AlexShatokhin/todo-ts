import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteDeal, editDeal } from "../../actions/actions"
import { Deal } from "../../interfaces/interfaces"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import PriorityItem from "../PriorityItem/PriorityItem"

import "./TodoItem.scss"
const TodoItem:FC<Deal> = ({id, title, priority, isComplete}) => {

    const [checked, setChecked] = useState(isComplete);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editDeal({id, title, priority, isComplete: checked}))
    }, [checked])

    return (
        <div key = {id} className="todo-item">
            <div className="todo-item-is_completed">
                <input type="checkbox" name="complete" id="complete" checked = {checked} onChange={() => setChecked(!checked)} />
            </div>
            <div className="todo-item-title">{title}</div>
            <div className="todo-item-priority"><PriorityItem value={priority}/></div>
            <div onClick={() => dispatch(deleteDeal(id))} className="todo-item-delete">
                <FontAwesomeIcon icon={faTrash} />            
            </div>
        </div>
    )
}

export default TodoItem