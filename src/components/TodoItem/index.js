import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="card-container">
      <p className="description">{title}</p>
      <button type="button" className="card-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
