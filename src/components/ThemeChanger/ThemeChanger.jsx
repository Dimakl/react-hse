import React from 'react'
import { connect } from 'react-redux'
import './css/ThemeChanger.css'
import { handleThemeChange } from '../../actions/theme' 

const mapStateToProps = (state) =>({
	theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) =>({
    dispatchOnThemeChange : (theme) => dispatch(handleThemeChange(theme))
})



const ThemeChangerComponent = ({ theme, dispatchOnThemeChange }) => {

    const changeTheme = e => {
        dispatchOnThemeChange(e.target.value)
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