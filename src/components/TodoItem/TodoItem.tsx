

import "./TodoItem.scss"
const TodoItem = () => {
    return (
        <div className="todo-item">
            <div className="todo-item-is_completed">
                <input type="checkbox" name="complete" id="complete" />
            </div>
            <div className="todo-item-title">Title</div>
            <div className="todo-item-priority">High</div>
        </div>
    )
}

export default TodoItem