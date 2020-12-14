import { ThemeStates } from "../types"
import { ThemeActionTypes, CHANGE_THEME } from "./types"


export function handleThemeChange(theme : ThemeStates) : ThemeActionTypes {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}