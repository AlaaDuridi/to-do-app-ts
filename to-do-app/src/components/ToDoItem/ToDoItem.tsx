import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import {Delete} from '@mui/icons-material';
import {IToDoItemProps} from "./ToDoItem.types.ts";
import {FC} from 'react';

const ToDoItem: FC<IToDoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
                    <Delete/>
                </IconButton>
            }
        >
            <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                color="primary"
            />
            <ListItemText
                primary={todo.text}
                sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            />
        </ListItem>
    );
};

export default ToDoItem;
