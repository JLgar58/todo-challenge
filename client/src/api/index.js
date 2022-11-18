import axios from 'axios';
const url = "http://localhost:5000/todos";
export const readTareas = () => axios.get(url);
export const crearTarea = (newTodo) => axios.post(url, newTodo)
export const editarStatuts = (newTodo) => axios.post(url, newTodo)
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);