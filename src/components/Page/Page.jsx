import React from 'react'
import styles from './css/Page.scss'
import { TaskList } from './../TaskList/TaskList.jsx'
import classNames from 'classnames/bind'
import { ThemeChanger } from './../ThemeChanger/ThemeChanger'
import { TaskAddForm } from './../TaskAddForm/TaskAddForm.jsx'

import { connect } from "react-redux";



var cx = classNames.bind(styles)

const mapStateToProps = (state) => ({
    theme:  state.theme.theme
});

function PageComponent({ theme }) {
    return (
        <div className = {cx("page",{[`page-${theme}-theme`]:true})}>
            <ThemeChanger className="sideBar"/>
            <TaskList />
            <TaskAddForm className="sideBar"/>
        </div>
    )
}

export const Page = connect(mapStateToProps)(PageComponent)