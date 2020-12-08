import { ADD_TASK, COMPLETION_STATE_CHANGE, DELETE_TASK, CHANGE_CURRENT_PROJECT, TasksActionTypes, ADD_PROJECT } from '../actions/types'
import { Project, Task } from '../types'
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
      },
      {
        id: 32,
        name: 'Second project',
        tasks: 
        [
          {
            id: 8,
            name: 'taskFrom second project',
            description: '!!!!!!!!!!',
            completed: false
          }
        ]
      }
    ]
}


const exampleTasks : Array<Task> =  [
  {
    id: 0,
    name: 'First task',
    description: 'This is task from new project',
    completed: true
  },
  {
    id: 1,
    name: '2nd task',
    description: 'This is task from new project',
    completed: false
  },
  {
    id: 2,
    name: 'Long long long long long long long long long long long long long long long long long long long long long long task',
    description: 'This is task from new project',
    completed: true
  },
  {
    id: 3,
    name: '4th task',
    description: 'This is task from new project',
    completed: false
  }
]


export function tasksReducer(state : StateTasksReducer = initialState, action : TasksActionTypes) : StateTasksReducer {
    switch (action.type) {
        case ADD_TASK: {
          let pseudoRandom = Math.ceil(Date.now() + Math.random())
          // eslint-disable-next-line no-loop-func
          while (state.projects[state.currentProject].tasks.find(task => task.id === pseudoRandom) !== undefined)
            pseudoRandom = Math.ceil(Date.now() + Math.random())
            const newProjects : Array<Project> = [...state.projects]
            newProjects[state.currentProject].tasks.push(
                {
                  id: pseudoRandom,
                  name: action.payload.name,
                  description: action.payload.description,
                  completed: false
              }
            )
            return {
                ...state,
                projects: newProjects
            }
        }
        case COMPLETION_STATE_CHANGE: {
            const indOfTask = state.projects[state.currentProject].tasks.findIndex((taskData) => taskData["id"] === action.payload)
            const newProjects = [...state.projects] 
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
          const newProjects = [...state.projects] 
          newProjects[state.currentProject].tasks = [...newProjects[state.currentProject].tasks.filter(task => task.id !== action.payload)]
          return {
            ...state,
            projects: newProjects
          }
        }
        case ADD_PROJECT: {
          let pseudoRandom = Math.ceil(Date.now() + Math.random())
          // eslint-disable-next-line no-loop-func
          while (state.projects.find(project => project.id === pseudoRandom) !== undefined)
            pseudoRandom = Math.ceil(Date.now() + Math.random())
          const newProjects = [ ...state.projects ]
          newProjects[newProjects.length] = {
            id: pseudoRandom,
            name: action.payload,
            tasks: exampleTasks
          }
          return {
            ...state,
            projects: newProjects
          }
        }
        case CHANGE_CURRENT_PROJECT: {
          const newProjectIndex : number = state.projects.findIndex((project) => project.id === action.payload)
          return {
            ...state,
            currentProject: newProjectIndex
          }
        }
        default:
            return state
        
    }
}