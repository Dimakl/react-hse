
import { ThemeActionTypes, CHANGE_THEME } from "../actions/types"
import { StateThemeReducer } from "./types"

const initialState : StateThemeReducer = {
    theme: "light"
}


export function themeReducer(state = initialState, action : ThemeActionTypes) : StateThemeReducer {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state
    }
}