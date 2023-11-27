export interface Deal {
    id: string,
    title: string, 
    priority: string, 
    isComplete: boolean
}

export enum Priority{
    HIGH = "High",
    MEDIUM = "Medium",
    LOW = "Low",
    NONE = "none"
}