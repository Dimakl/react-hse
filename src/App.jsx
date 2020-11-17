import React from 'react'
import styles from './css/App.scss'
import TaskAddForm from './TaskAddForm/TaskAddForm.jsx'
import TaskList from './TaskList/TaskList.jsx'
import classNames from 'classnames/bind'

var cx = classNames.bind(styles)

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
    ],
    theme: 'light'
  }


  changeTaskCompletionState = (taskId) => {
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

  changeAppTheme = () => {
    var newTheme = this.state.theme === 'light' ? 'dark' : 'light'
    this.setState({theme: newTheme})
  }
  
  addTask = (name, description) => {
    this.setState(prevState => ({
      tasks: [
          ...prevState.tasks, 
          {
              id: this.state.tasks.length,
              name: name,
              description: description,
              completed: false
          }
      ] 
  }))
  }


  render () {
    return (
      <div className = {cx("app",{[`app-${this.state.theme}-theme`]:true})}>
      <div id = "themeChangeRadio">
				<input type="radio" id="light" value="light" name="theme" checked = {this.state.theme === "light"} onChange = {this.changeAppTheme}></input>
				<label>Light theme</label>
				<input type="radio" id = "dark" value="dark" name="theme" checked={this.state.theme === "dark"} onChange = {this.changeAppTheme}></input>
				<label>Dark theme</label>
			</div>
      <TaskAddForm addTask={this.addTask} theme={this.state.theme}/>
      <TaskList tasks={this.state.tasks} theme={this.state.theme} changeCompletionStateFunction={this.changeTaskCompletionState}/>
      
      </div>
    )
  }
}


export default App