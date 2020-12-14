import React, { Dispatch } from 'react'
import { TaskList } from '../TaskList/TaskList'
import classNames from 'classnames/bind'
import { ThemeChanger } from '../ThemeChanger/ThemeChanger'
import { TaskAddForm } from '../TaskAddForm/TaskAddForm'

import { connect } from "react-redux";
import { Project, RootState, ThemeStates } from '../../types.js'
import { Redirect, RouteComponentProps } from 'react-router'
import { TasksActionTypes } from '../../actions/types'
import { handleChangingOfCurrentProject } from '../../actions/tasks'

const styles = require('./css/Page.scss')

var cx = classNames.bind(styles)

interface PageProps {
    theme : ThemeStates
    projects : Array<Project>
    dispatchOnCurrentProjectChange : (newCurrentProject : number) => void
}

interface RouteParams{
    projectId : string
}


const mapDispatchToProps = (dispatch : Dispatch<TasksActionTypes>)  => ({ 
    dispatchOnCurrentProjectChange : (newCurrentProject : number) => dispatch(handleChangingOfCurrentProject(newCurrentProject))
})

const mapStateToProps = (state : RootState) => ({
    theme:  state.theme.theme,
    projects: state.tasks.projects
});

const PageComponent = ({theme, match, projects, dispatchOnCurrentProjectChange } : RouteComponentProps<RouteParams> & PageProps) => {
   
    
    
    const id : number =  +match.params.projectId
    
    if (projects.find((project) => project.id === id) === undefined)
        return (
            <Redirect to="/"/>
        )
    
    dispatchOnCurrentProjectChange(id)
    return (
        <div className = {cx("page",{[`page-${theme}-theme`]:true})}>
            <ThemeChanger className="sideBar"/>
            <TaskList />
            <TaskAddForm className="sideBar"/>
        </div>
    )
}

export const Page = connect(mapStateToProps, mapDispatchToProps)(PageComponent)