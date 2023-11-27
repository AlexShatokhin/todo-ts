import { FC } from "react"
import "./PriorityItem.scss"

interface PriorityProps {
    value: string
}

const PriorityItem : FC<PriorityProps> = ({value}) => {
    switch(value){
        case "High": return <span className="priority-item high">{value}</span>
        case "Low": return <span className="priority-item low">{value}</span>
        case "Medium": return <span className="priority-item medium">{value}</span>
        default: return <span className="priority-item none">{value}</span>
    }
}

export default PriorityItem