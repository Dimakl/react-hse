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
      return (
        <div>
        <Task {...this.state.tasks[0]}/>
        </div>
      );
    }
}

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      completed: props.completed
    }
  }



  render() {
    return (
      <div className="task">
      <div className="name">{this.state.name}</div>
      <div className="description">{this.state.description}</div>
      <div className="completed">{this.state.completed}</div>
      </div>
    );
  }
}


export default TaskList;