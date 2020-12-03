import React from 'react'
import { TaskList } from '../TaskList/TaskList'
import classNames from 'classnames/bind'
import { ThemeChanger } from '../ThemeChanger/ThemeChanger'
import { TaskAddForm } from '../TaskAddForm/TaskAddForm'

import { connect } from "react-redux";
import { RootState, ThemeStates } from '../../types.js'

const styles = require('./css/Page.scss') // как написать нормально?

var cx = classNames.bind(styles)

interface PageProps {
    theme : ThemeStates
}



const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme
});

function PageComponent({ theme } : PageProps) {
    return (
        <div className = {cx("page",{[`page-${theme}-theme`]:true})}>
            <ThemeChanger className="sideBar"/>
            <TaskList />
            <TaskAddForm className="sideBar"/>
        </div>
    )
}

export const Page = connect(mapStateToProps)(PageComponent)