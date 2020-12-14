import React from 'react'
import './css/ThemeChanger.css'

function ThemeChanger(props) {

    return (
        <div id="themeChanger">
            <h1>CHANGE THEME:</h1>
            <div id="themeChangeRadio">
            <input type="radio" id="light" value="light" name="theme" checked = {props.theme === "light"} onChange = {props.changeAppTheme}></input>
            <label>Light theme</label>
            <input type="radio" id = "dark" value="dark" name="theme" checked={props.theme === "dark"} onChange = {props.changeAppTheme}></input>
            <label>Dark theme</label>
            </div>
        </div>
    )
}

export default ThemeChanger