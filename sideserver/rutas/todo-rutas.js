import express from 'express';
import { crearTarea, readTareas, editarStatuts, updateTodo, deleteTodo } from '../controlador/todos.js';
const router = express.Router();
router.get('/', readTareas);
router.post('/', crearTarea);
router.post('/', editarStatuts);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
export default router;