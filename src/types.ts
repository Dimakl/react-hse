import { rootReducer } from './reducers/index'

export interface Task {
    id: number
    name: string
    description: string
    completed: boolean
}

export interface TaskBasis {
    name: string,
    description: string
}

export interface Project {
    id: number
    name: string
    tasks: Array<Task>

}

export type ThemeStates = "light" | "dark"

export type RootState = ReturnType<typeof rootReducer>