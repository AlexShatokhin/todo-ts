import {useDispatch, useSelector} from "react-redux"
import { toggleAddForm } from "../../../actions/actions"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"


import "../Form.scss"
const AddItemForm = () => {

    const dispatch = useDispatch();
    const isShowAddForm = useSelector((state: {isShowAddForm: Boolean}) => state.isShowAddForm)

    return (
        <button onClick = {() => dispatch(toggleAddForm())} className="add-item-form">
            <FontAwesomeIcon style = {isShowAddForm ? {transform: "rotate(225deg)", transition: ".4s transform"} : {transform: "rotate(0deg)", transition: ".4s transform"}} icon={faPlus} />
        </button>
    )
}

export default AddItemForm 