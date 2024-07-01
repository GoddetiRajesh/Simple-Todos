import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {editedValue: ''}

  componentDidMount() {
    const {todo} = this.props
    const {title} = todo
    this.setState({editedValue: title})
  }

  onDelete = () => {
    const {todo, deleteTodo} = this.props
    const {id} = todo
    deleteTodo(id)
  }

  onClickCheckbox = () => {
    const {todo, updateCheckbox} = this.props
    const {id} = todo
    updateCheckbox(id)
  }

  onClickEditButton = () => {
    const {todo, updateIsEditValue} = this.props
    const {id} = todo
    updateIsEditValue(id)
  }

  updateTodoValue = event => {
    this.setState({editedValue: event.target.value})
  }

  onClickSaveButton = () => {
    const {editedValue} = this.state
    const {todo, updateTodoTitle} = this.props
    const {id} = todo
    updateTodoTitle(id, editedValue)
  }

  render() {
    const {todo} = this.props
    const {title, isMarked, isEdit} = todo
    const isCompleted = isMarked ? 'strike' : ''
    const {editedValue} = this.state

    return (
      <li className="card-container">
        <div className="checkbox-container">
          <input
            onClick={this.onClickCheckbox}
            type="checkbox"
            className="checkbox-input"
          />
          {isEdit ? (
            <>
              <input
                onChange={this.updateTodoValue}
                type="text"
                className="edit-text-input"
                value={editedValue}
              />
              <button
                onClick={this.onClickSaveButton}
                type="button"
                className="custom-button"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className={`description ${isCompleted}`}>{title}</p>
              <button
                onClick={this.onClickEditButton}
                type="button"
                className="custom-button"
              >
                Edit
              </button>
            </>
          )}
        </div>
        <button type="button" className="card-button" onClick={this.onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
