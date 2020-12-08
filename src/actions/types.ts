import { TaskBasis, ThemeStates } from "../types"

export const ADD_TASK = "ADD_TASK"
export const COMPLETION_STATE_CHANGE = "COMPLETION_STATE_CHANGE"
export const DELETE_TASK = "DELETE_TASK"
export const CHANGE_CURRENT_PROJECT = "SET_CURRENT_PROJECT"
export const ADD_PROJECT = "ADD_PROJECT"

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

interface HandleChangingOfCurrentProjectAction {
    type: typeof CHANGE_CURRENT_PROJECT
    payload: number
}

interface HandleProjectAdditionAction {
    type: typeof ADD_PROJECT
    payload: string
}
export type TasksActionTypes = HandleTaskAdditionAction | HandleCompletionStateChangeAction | HandleTaskDeletionAction | HandleChangingOfCurrentProjectAction | HandleProjectAdditionAction


export const CHANGE_THEME = "CHANGE_THEME"


interface HandleThemeChangeAction {
    type: typeof CHANGE_THEME
    payload: ThemeStates
}

export type ThemeActionTypes = HandleThemeChangeAction