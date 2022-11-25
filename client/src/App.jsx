/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Preloader from './componentes/Preloader'
import { crearTarea, readTareas, deleteTodo, updateTodo } from './funciones'
// import { TodoContext } from "./TodoContext";

function App () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ title: '', content: '' })
  const [currentId, setCurrentId] = useState(0)
  // const [currentTodo, setCurrentTodo] = useState(null);
  const clear = () => {
    setCurrentId(0)
    setTodo({ title: '', content: '' })
  }
  useEffect(() => {
    const currentTodo = currentId !== 0 ? todos.find(todo => todo._id === currentId) : {}
    setTodo(currentTodo)
  }, [currentId])
  useEffect(() => {
    const fetchData = async () => {
      const result = await readTareas()
      console.log(result)
      setTodos(result)
    }
    fetchData()
    // console.log(readTareas())
  }, [currentId, todos])
  useEffect(() => {
    const clearField = (e) => {
      if (e.keyCode === 27) {
        clear()
      }
    }
    window.addEventListener('keydown', clearField)
    return () => window.removeEventListener('keydown', clearField)
  }, [])
  //     window.addEventListener('keydown', close)
  //     return () => window.removeEventListener('keydown', close)
  // }, [])
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (currentId === 0) {
      console.log('submit')
      const result = await crearTarea(todo)
      console.log('createTodo result', result)
      setTodos([...todos, todo])
      clear()
    } else {
      const result = await updateTodo(currentId, todo)
      clear()
    }
  }
  const removeTodo = async (id) => {
    await deleteTodo(id)
    const todosCopy = [...todos]
    todosCopy.filter(todo => todo._id !== id)
    setTodos(todosCopy)
    clear()
  }

  const newLocal = <div className="container">
        <div className="row">
            <form className="col s12" onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">title</i>
                        <input id="icon_prefix" type="text" className="validate" value={todo.title}
                            onChange={e => setTodo({ ...todo, title: e.target.value })} />
                        <label htmlFor="icon_prefix">Title</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">description</i>
                        <input id="icon_telephone" type="tel" className="validate" value={todo.content}
                            onChange={e => setTodo({ ...todo, content: e.target.value })} />
                        <label htmlFor="icon_telephone">Content</label>
                    </div>
                    <div className="row right-align">
                        <button className="waves-effect waves-light btn">submit</button>
                    </div>
                </div>
            </form>
            {!todos.length
              ? <Preloader />
              : <ul className="collection"> {todos.map(todo => (
                    <li key={todo._id}
                        onClick={() => setCurrentId(todo._id)} className="collection-item">{todo.title} {todo.content}
                        <a href="#!" onClick={() => removeTodo(todo._id)} className="secondary-content">
                            <i className="material-icons">delete</i>
                        </a>
                    </li>))}</ul>}
        </div>
    </div>
  return (newLocal)
}
export default App
