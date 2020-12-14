import React from 'react'
import styles from './css/Task.scss'
import classNames from 'classnames/bind'

var cx = classNames.bind(styles)

function Task(props) {

  var taskButtonColors = {
    green: "#196F3D",
    red: "#922B21"
  } 

  let buttonTextStyle =  {color: props.completed ? taskButtonColors.green : taskButtonColors.red}
  const changeThisTaskCompletionState = () => {
    props.changeCompletionStateFunction(props.id)
    console.log(`Task ${props.id} completed status = ${!props.completed}`)
  }
  return (
    <div className = {cx("task",{[`task-${props.theme}-theme`]:true})}>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div><div className='buttonText' style={buttonTextStyle}>{props.completed ? "DONE" : "TODO"}</div></div>
      <button className={cx("taskButton",{[`taskButton-${props.theme}-theme`]:true})} onClick={changeThisTaskCompletionState}>
      {props.completed ? "Unc" : "C"}omplete task!
      </button>
  </div>
  )
}


  export default Task