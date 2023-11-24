import { useState } from "react";

import {useSelector, useDispatch} from "react-redux"
import { addDeal } from "../../../actions/actions";

import { motion } from "framer-motion";
import "../Form.scss"

const uuid = require("uuid");


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


function Form() {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("none");

    const isShowAddForm = useSelector((state: {isShowAddForm: boolean}) => state.isShowAddForm);
    const dispatch = useDispatch();

    function sendItem(){
        const newDeal = {
            id: uuid.v1(),
            title,
            priority,
            isComplete: false
        }

        dispatch(addDeal(newDeal));
        setTitle("");
        setPriority("none");
    }

    return (
        <motion.div animate = {isShowAddForm ? show : hide} className="add-form">
            <input onChange = {(e) => setTitle(e.target.value)} value = {title} placeholder="Type your deal here" type="text" name="title" id="title" className="add-form-title" />

            <select onChange = {(e) => setPriority(e.target.value)} value = {priority} name="priority" id="priority" className="add-form-select">
                <option value="none">Choose deal's priority</option>
                <option value="Low" className="add-form-select-item">Low</option>
                <option value="Medium" className="add-form-select-item">Medium</option>
                <option value="High" className="add-form-select-item">High</option>
            </select>

            <button onClick={sendItem} className="add-form-create">Create deal</button>

        </motion.div>
    )
    
}

export default Form;