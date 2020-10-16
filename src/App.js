import React from 'react';

class TaskList extends React.Component {
  state = {
    cnt: 0,
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
        name: 'Very loooooooooooooooooooooooooooooong task',
        description: '!!!!!!!!',
        completed: true
      },
      {
        id: 1238,
        name: 'last task',
        description: '??????????????',
        completed: false
      }
    ]
  };
    
    render() {
      const taskIterator = this.state.tasks.map((l) => <Task {...l}/>)

      return (
        <div>
        {taskIterator}
        </div>
      );
    }
}

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }



  render() {
    const onButtonClick = () => console.log(`Task ${this.state.id} completed status = ${this.state.completed}`)

    return (
      <div className="task">
        <div className="taskName">{this.state.name}</div>
        <div className="taskDescription">{this.state.description}</div>
        <div className="taskCompleted">{String(this.state.completed)}</div>
        <button className="taskButton" onClick={onButtonClick}>
          Complete task!
        </button>
      </div>
    );
  }
}


export default TaskList;