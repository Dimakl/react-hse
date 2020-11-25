import React from 'react'
import styles from './css/Task.scss'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { handleCompletionStateChange, handleTaskDeletion } from '../../actions/tasks'

var cx = classNames.bind(styles)

const mapStateToProps = (state) => ({
    theme:  state.theme.theme
});

const mapDispatchToProps = (dispatch) =>({
  dispatchOncompletionStateChange : (taskId) => dispatch(handleCompletionStateChange(taskId)),
  dispatchOnTaskDeletion : (taskId) => dispatch(handleTaskDeletion(taskId))
  
})

function TaskComponent(props) {

  var taskButtonColors = {
    green: "#196F3D",
    red: "#922B21"
  } 

  const buttonTextStyle =  {color: props.completed ? taskButtonColors.green : taskButtonColors.red}
  const taskTextStyle = {textDecoration: props.completed ? "line-through" : "none" }

  const changeThisTaskCompletionState = () => {
    props.dispatchOncompletionStateChange(props.id)
    console.log(`Task ${props.id} completed status = ${!props.completed}`)
  }

  const deleteTask = () => {
    props.dispatchOnTaskDeletion(props.id)
    console.log(`Task ${props.id} was deleted`)
  }

  return (
    <div className = {cx("task",{[`task-${props.theme}-theme`]:true})}>
      <div className="taskName" style={taskTextStyle}>{props.name}</div>
      <div style={taskTextStyle}>{props.description} </div>
      <div><div className='buttonText' style={buttonTextStyle}>{props.completed ? "DONE" : "TODO"}</div></div>
      <div className="taskBottomBar">
        <button className={cx("taskButton",{[`taskButton-${props.theme}-theme`]:true})} onClick={changeThisTaskCompletionState}>
        {props.completed ? "Unc" : "C"}omplete task!
        </button>
        <span className="taskDelete" onClick={deleteTask}>Delete task!</span>
      </div>
  </div>
  )
}


  export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)