import { TaskBasis, ThemeStates } from "../types"

export const ADD_TASK = "ADD_TASK"
export const COMPLETION_STATE_CHANGE = "COMPLETION_STATE_CHANGE"
export const DELETE_TASK = "DELETE_TASK"

interface HandleTaskAdditionAction {
    type: typeof ADD_TASK
    payload: TaskBasis
}

interface HandleCompletionStateChangeAction {
    type: typeof COMPLETION_STATE_CHANGE
    payload: number
}

interface HandleTaskDeletionAction {
    type: typeof DELETE_TASK
    payload: number
}

export type TasksActionTypes = HandleTaskAdditionAction | HandleCompletionStateChangeAction | HandleTaskDeletionAction


export const CHANGE_THEME = "CHANGE_THEME"


interface HandleThemeChangeAction {
    type: typeof CHANGE_THEME
    payload: ThemeStates
}

export type ThemeActionTypes = HandleThemeChangeAction