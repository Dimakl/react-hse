export const ADD_TASK = "ADD_TASK"
export const COMPLETION_STATE_CHANGE = "COMPLETION_STATE_CHANGE"
export const DELETE_TASK = "DELETE_TASK"


export const handleTaskAddition = task => ({
    type: ADD_TASK,
    payload: task
})

export const handleCompletionStateChange = taskId => ({
    type: COMPLETION_STATE_CHANGE,
    payload: taskId
})

export const handleTaskDeletion = taskId => ({
    type: DELETE_TASK,
    payload: taskId
})