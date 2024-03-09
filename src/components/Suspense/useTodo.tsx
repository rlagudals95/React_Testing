import { useState, useEffect } from "react";
import { Todo, getTodo } from "../../apis/testApi";


export function useTodo(): Todo[] {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodo().then((data) => setTodos(data));
    }, []);

    return todos;
}