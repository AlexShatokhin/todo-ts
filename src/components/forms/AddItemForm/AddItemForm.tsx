import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"


import "../Form.scss"
const AddItemForm = () => {
    return (
        <button className="add-item-form">
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

export default AddItemForm 