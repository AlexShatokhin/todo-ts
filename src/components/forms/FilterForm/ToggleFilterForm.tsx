import { FC } from "react"

import { useDispatch } from "react-redux"
import {toggleFilterForm} from "../../../actions/actions"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter} from "@fortawesome/free-solid-svg-icons"

import "../Form.scss"
const ToogleFilterForm:FC = () => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleFilterForm())} className="add-item-form">
            <FontAwesomeIcon icon={faFilter} />
        </button>
    )
}

export default ToogleFilterForm;