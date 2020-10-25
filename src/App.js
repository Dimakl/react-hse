import React from 'react'
import './css/App.css'
import TaskAddForm from './TaskAddForm/TaskAddForm'
import TaskList from './TaskList/TaskList.js'


class App extends React.Component {

  state = {
    tasks: [
      {
        id: 0,
        name: 'First task',
        description: 'This needs to be done',
        completed: true
      },
      {
        id: 1,
        name: '2nd task',
        description: 'task 2 needs to be done',
        completed: false
      },
      {
        id: 2,
        name: 'Long long long long long long long long long long long long long long long long long long long long long long task',
        description: '!!!!!!!!',
        completed: true
      },
      {
        id: 3,
        name: '4th task',
        description: 'aoaoaooaoaa',
        completed: false
      },
      {
        id: 4,
        name: '5th task',
        description: 'bboboboboobobob',
        completed: false
      },
      {
        id: 5,
        name: '7th task',
        description: 'cococooco',
        completed: true
      },
      {
        id: 6,
        name: '8th task',
        description: 'dodoododdod',
        completed: false
      },
      {
        id: 7,
        name: '9th task',
        description: 'fofofofofofofo',
        completed: true
      },
      {
        id: 8,
        name: 'last task',
        description: '??????????????',
        completed: false
      }
    ]
  }

  changeTaskCompletionState = (taskId) =>
  {
    const indexOfTaskToChangeCompletionState = this.state.tasks.findIndex((taskData) => taskData["id"] === taskId)
    const prevStateOfTask = this.state.tasks[indexOfTaskToChangeCompletionState]
    let editedTasks = [...this.state.tasks]
    editedTasks[indexOfTaskToChangeCompletionState] = {
      id: taskId,
      name: prevStateOfTask.name,
      description: prevStateOfTask.description,
      completed: !prevStateOfTask.completed
    }
    this.setState({
      tasks: editedTasks
    })
  }

  render () {
    return (
      <div id ="App">
      <TaskAddForm refToApp={this}/>
      <TaskList tasks={this.state.tasks} changeCompletionStateFunction={this.changeTaskCompletionState}/>
      </div>
    )
  }
}


export default App