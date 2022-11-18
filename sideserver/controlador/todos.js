// creando controlador
import mongoose from 'mongoose';
import Todo from '../modelos/todo.js';
export const readTareas = async(req, res) => {
    try {
        const Todos = await Todo.find();
        res.status(200).json(Todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const crearTarea = async(req, res) => {
    console.log('createTodos', req.body)
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const editarStatuts = async(req, res) => {
    const todo = new Todo(req.body);
    try {
        const todos = await Todo.find();
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const updateTodo = async(req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
    const updatedTodo = { title, content, _id: id };
    await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
    res.json(updatedTodo);
}
export const deleteTodo = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
    await Todo.findByIdAndRemove(id);
    res.json({ message: 'Todo deleted successfull' });
}