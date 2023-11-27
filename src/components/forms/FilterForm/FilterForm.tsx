import { FC, useState } from "react";

import {useSelector, useDispatch} from "react-redux"
import { filterDeal } from "../../../actions/actions";
import { Priority } from "../../../interfaces/interfaces";

import { motion } from "framer-motion";
import "../Form.scss"

const hide = {
    opacity: 0,
    transition: {
        duration: .3
    },
    transitionEnd: {
        display: "none"
    }
}

const show = {
    opacity: 1,
    transition: {
        duration: 0.2
    },
    display: "block"
}


const FilterForm:FC = () => {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");

    const isShowFilterForm = useSelector((state: {isShowFilterForm: boolean}) => state.isShowFilterForm);
    const dispatch = useDispatch();

    function sendItem(){
        dispatch(filterDeal({name: title, priority}))
        setTitle("");
        setPriority("");
    }

    return (
        <motion.div animate = {isShowFilterForm ? show : hide} className="add-form filter-form">
            <input onChange = {(e) => setTitle(e.target.value)} value = {title} placeholder="Type to find deal here" type="text" name="title" id="title" className="add-form-title" />

            <select onChange = {(e) => setPriority(e.target.value)} value = {priority} name="priority" id="priority" className="add-form-select">
                <option value="">Choose needed priority</option>
                <option value={Priority.NONE}>none</option>
                <option value={Priority.LOW} className="add-form-select-item">Low</option>
                <option value={Priority.MEDIUM} className="add-form-select-item">Medium</option>
                <option value={Priority.HIGH} className="add-form-select-item">High</option>
            </select>

            <button onClick={sendItem} className="add-form-create">Create deal</button>

        </motion.div>
    )
    
}

export default FilterForm;