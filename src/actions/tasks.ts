import { TaskBasis } from "../types"
import { TasksActionTypes, ADD_TASK, COMPLETION_STATE_CHANGE, DELETE_TASK } from "./types"



export function handleTaskAddition(task : TaskBasis) : TasksActionTypes  {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function handleCompletionStateChange(taskId : number) : TasksActionTypes {
    return {
        type: COMPLETION_STATE_CHANGE,
        payload: taskId
    }
}

export function handleTaskDeletion(taskId : number) : TasksActionTypes {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}