export const ADD_TASK = "ADD_TASK"
export const COMPLETION_STATE_CHANGE = "COMPLETION_STATE_CHANGE"


export const handleTaskAddition = task => ({
    type: ADD_TASK,
    payload: task
})

export const handleCompletionStateChange = taskId => ({
    type: COMPLETION_STATE_CHANGE,
    payload: taskId
})