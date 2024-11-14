import {ToDo} from "../../types/models/todo.model.ts";

export interface IToDoItemProps {
    todo: ToDo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
