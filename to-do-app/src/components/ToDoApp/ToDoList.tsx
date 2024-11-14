import { Container, TextField, Button, Typography, List, ListItem } from '@mui/material';
import {ToDo} from "../../types/models/todo.model.ts";
import ToDoItem from "../ToDoItem";
import {FC, useState} from 'react';
const ToDoList: FC = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [newText, setNewText] = useState("");

    const handleAdd = () => {
        if (!newText.trim()) return;
        const newToDo: ToDo = {
            id: Date.now(),
            text: newText,
            completed: false
        };
        setTodos([...todos, newToDo]);
        setNewText("");
    };

    const handleToggle = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                ToDo App
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                label="Add new task"
                value={newText}
                onChange={e => setNewText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleAdd}>
                Add
            </Button>
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id} disablePadding>
                        <ToDoItem todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ToDoList;
