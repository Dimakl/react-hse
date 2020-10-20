import React from 'react'
import './css/App.css'
import TaskList from './TaskList/TaskList.js'


class App extends React.Component {

  state = {
    tasks: [
      {
        id: 1235,
        name: 'First task',
        description: 'This needs to be done',
        completed: true
      },
      {
        id: 1236,
        name: '2nd task',
        description: 'task 2 needs to be done',
        completed: false
      },
      {
        id: 1237,
        name: 'Long long long long long long long long long long long long long long long long long long long long long long task',
        description: '!!!!!!!!',
        completed: true
      },
      {
        id: 1238,
        name: '4th task',
        description: 'aoaoaooaoaa',
        completed: false
      },
      {
        id: 1239,
        name: '5th task',
        description: 'bboboboboobobob',
        completed: false
      },
      {
        id: 1240,
        name: '7th task',
        description: 'cococooco',
        completed: true
      },
      {
        id: 1241,
        name: '8th task',
        description: 'dodoododdod',
        completed: false
      },
      {
        id: 1242,
        name: '9th task',
        description: 'fofofofofofofo',
        completed: true
      },
      {
        id: 1243,
        name: 'last task',
        description: '??????????????',
        completed: false
      }
    ]
  }

  render () {
    return (
      <TaskList tasks={this.state.tasks}/>
    )
  }
}


export default App