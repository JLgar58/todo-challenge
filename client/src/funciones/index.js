import * as api from '../api';
export const readTareas = async() => {
    try {
        const { data } = await api.readTareas()
        return data
    } catch (error) {
        console.log(error)
    }
}
export const crearTarea = async(todo) => {
    try {
        console.log('crearTarea at clientside', )
        const { data } = await api.crearTarea(todo);
        console.log('functions', data)
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const editarStatuts = async(todo) => {
    try {
        console.log("crearTarea at clientside");
        const { data } = await api.editarStatuts(todo);
        console.log("functions", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const updateTodo = async(id, todo) => {
    try {
        const { data } = await api.updateTodo(id, todo);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};
export const deleteTodo = async(id) => {
    console.log('delete todo', id)
    try {
        await api.deleteTodo(id)
    } catch (error) {
        console.log(error)
    }
}