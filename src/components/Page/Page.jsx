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
    
    
    //   changeTaskCompletionState = (taskId) => {
    //     const indexOfTaskToChangeCompletionState = this.state.tasks.findIndex((taskData) => taskData["id"] === taskId)
    //     const prevStateOfTask = this.state.tasks[indexOfTaskToChangeCompletionState]
    //     let editedTasks = [...this.state.tasks]
    //     editedTasks[indexOfTaskToChangeCompletionState] = {
    //       id: taskId,
    //       name: prevStateOfTask.name,
    //       description: prevStateOfTask.description,
    //       completed: !prevStateOfTask.completed
    //     }
    //     this.setState({
    //       tasks: editedTasks
    //     })
    //   }
    
    //   changeAppTheme = () => {
    //     var newTheme = this.state.theme === 'light' ? 'dark' : 'light'
    //     this.setState({theme: newTheme})
    //   }
      
    //   addTask = (name, description) => {
    //     this.setState(prevState => ({
    //       tasks: [
    //           ...prevState.tasks, 
    //           {
    //               id: this.state.tasks.length,
    //               name: name,
    //               description: description,
    //               completed: false
    //           }
    //       ] 
    //   }))
    //   }

    return (
        <div className = {cx("page",{[`page-${theme}-theme`]:true})}>
            <TaskList />
            <div id="sideMenu" >
            <TaskAddForm />
            <div className="line"/>
            <ThemeChanger  />
            <div className="line"/>
            </div>
        </div>
    )
}

export const Page = connect(mapStateToProps)(PageComponent)