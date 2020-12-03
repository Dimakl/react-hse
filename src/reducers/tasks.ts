import { ADD_TASK, COMPLETION_STATE_CHANGE, DELETE_TASK, TasksActionTypes } from '../actions/types'
import { StateTasksReducer } from './types'


const initialState : StateTasksReducer = {
    currentProject: 0,
    projects: [
      {
        id: 0,
        name: 'First project',
        tasks: 
        [
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
    ]
}


export function tasksReducer(state : StateTasksReducer = initialState, action : TasksActionTypes) : StateTasksReducer {
    switch (action.type) {
        case ADD_TASK: {
          let pseudoRandom = Date.now() + Math.random()
          console.log(state)
          // eslint-disable-next-line no-loop-func
          while (state.projects[state.currentProject].tasks.find(task => task.id === pseudoRandom) !== undefined)
            pseudoRandom = Date.now() + Math.random()
            const newProjects = {...state.projects}
            newProjects[state.currentProject].tasks = 
            [
              ...newProjects[state.currentProject].tasks,
                {
                  id: pseudoRandom,
                  name: action.payload.name,
                  description: action.payload.description,
                  completed: false
              }
            ]
            return {
                ...state,
                projects: newProjects
            }
        }
        case COMPLETION_STATE_CHANGE: {
            const indOfTask = state.projects[state.currentProject].tasks.findIndex((taskData) => taskData["id"] === action.payload)
            const newProjects = {...state.projects} 
            let task = newProjects[state.currentProject].tasks[indOfTask]
            task = {
              ...task,
              completed: !task.completed
            }
            newProjects[state.currentProject].tasks[indOfTask] = task

            return {
                ...state,
                projects: newProjects 
            }
        }
        case DELETE_TASK: {
          const newProjects = {...state.projects} 
          newProjects[state.currentProject].tasks = [...newProjects[state.currentProject].tasks.filter(task => task.id !== action.payload)]
          return {
            ...state,
            projects: newProjects
          }
        }
        default:
            return state
    }
}