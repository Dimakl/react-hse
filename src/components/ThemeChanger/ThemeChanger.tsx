import React, { ChangeEvent, Dispatch } from 'react'
import { connect } from 'react-redux'
import './css/ThemeChanger.css'
import { handleThemeChange } from '../../actions/theme' 
import { RootState, ThemeStates } from '../../types'
import { ThemeActionTypes } from './../../actions/types'

const mapStateToProps = (state : RootState) =>({
	theme: state.theme.theme
})

const mapDispatchToProps = (dispatch : Dispatch<ThemeActionTypes>)  => ({ // можно ли поменять ThemActionTypes на более строгое ограничение
    dispatchOnThemeChange : (theme : ThemeStates) => dispatch(handleThemeChange(theme))
})

interface ThemeChangerProps {
    theme: ThemeStates,
    dispatchOnThemeChange: Function // как по-нормальному это сделать?
}



const ThemeChangerComponent = ({ theme, dispatchOnThemeChange } : ThemeChangerProps & React.HTMLAttributes<HTMLDivElement>) => {

    const changeTheme = (e : ChangeEvent<HTMLInputElement>) => {
        dispatchOnThemeChange(e.target.value as ThemeStates)
    }

    return (
        <div id="themeChanger">
            <h1>CHANGE THEME:</h1>
            <div id="themeChangeRadio">
            <input type="radio" id="light" value="light" name="theme" checked = {theme === "light"} onChange = {changeTheme}></input>
            <label>Light theme</label>
            <input type="radio" id = "dark" value="dark" name="theme" checked={theme === "dark"} onChange = {changeTheme}></input>
            <label>Dark theme</label>
            </div>
        </div>
    )
}

export const ThemeChanger = connect(mapStateToProps, mapDispatchToProps)(ThemeChangerComponent)