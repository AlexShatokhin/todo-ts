import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter} from "@fortawesome/free-solid-svg-icons"

import "../Form.scss"
const FilterForm = () => {
    return (
        <button className="add-item-form">
            <FontAwesomeIcon icon={faFilter} />
        </button>
    )
}

export default FilterForm;