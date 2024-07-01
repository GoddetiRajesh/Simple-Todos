import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isMarked: false,
    isEdit: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isMarked: false,
    isEdit: false,
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, todoItem: ''}

  updateTodoItem = event => {
    this.setState({todoItem: event.target.value})
  }

  addTodoItem = () => {
    const {todoItem} = this.state
    const arr = todoItem.split(' ')
    let noOfTodos = arr[arr.length - 1]
    // if (isNaN(noOfTodos)) {
    //   noOfTodos = 1
    // }
    const numbers = '0123456789'
    if (!numbers.includes(noOfTodos[noOfTodos.length - 1])) {
      noOfTodos = 1
    }
    noOfTodos = parseInt(noOfTodos)
    console.log(noOfTodos)
    const newTodoList = []
    let todoTitle = arr.slice(0, arr.length - 1).join(' ')
    if (noOfTodos === 1) {
      todoTitle = todoItem
    }
    for (let i = 0; i < noOfTodos; i += 1) {
      const newTodo = {
        id: uuidv4(),
        title: todoTitle,
        isMarked: false,
        isEdit: false,
      }
      newTodoList.push(newTodo)
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodoList],
      todoItem: '',
    }))
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const result = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: result})
  }

  updateCheckbox = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {...eachTodo, isMarked: !eachTodo.isMarked}
        }
        return eachTodo
      }),
    }))
  }

  updateIsEditValue = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {...eachTodo, isEdit: !eachTodo.isEdit}
        }
        return eachTodo
      }),
    }))
  }

  updateTodoTitle = (id, text) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {...eachTodo, title: text, isEdit: !eachTodo.isEdit}
        }
        return eachTodo
      }),
    }))
  }

  render() {
    const {todosList, todoItem} = this.state
    return (
      <div className="page-container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-container">
            <input
              onChange={this.updateTodoItem}
              className="text-input"
              type="text"
              placeholder="Enter Todo Item"
              value={todoItem}
            />
            <button
              onClick={this.addTodoItem}
              type="button"
              className="add-button"
            >
              Add
            </button>
          </div>
          <ul className="todos-container">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todo={eachTodo}
                deleteTodo={this.deleteTodo}
                updateCheckbox={this.updateCheckbox}
                updateIsEditValue={this.updateIsEditValue}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
