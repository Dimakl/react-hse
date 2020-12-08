import React from 'react'
import { RootState, ThemeStates } from '../../types'
import { ProjectAddForm } from '../ProjectAddForm/ProjectAddForm'
import { ProjectList } from '../ProjectList/ProjectList'
import { ThemeChanger } from '../ThemeChanger/ThemeChanger'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'

const styles = require('./css/ProjectPage.scss')

var cx = classNames.bind(styles)

interface ProjectPageProps {
    theme : ThemeStates
}

const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme
});

const ProjectPageComponent = ({ theme } : ProjectPageProps) => {
    return (
        <div className = {cx("page",{[`page-${theme}-theme`]:true})}>
            <ThemeChanger className="sideBar"/>
            <ProjectList />
            <ProjectAddForm className="sideBar"/>
        </div>
    )
}

export const ProjectPage = connect(mapStateToProps)(ProjectPageComponent)