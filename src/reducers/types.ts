import { Project, ThemeStates } from "../types";

export interface StateTasksReducer {
    currentProject: number
    projects: Array<Project>
}

export interface StateThemeReducer {
    theme: ThemeStates
}