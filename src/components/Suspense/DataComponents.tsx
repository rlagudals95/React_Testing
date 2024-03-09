import React from "react";
import { Todo } from "../../apis/testApi";

export const DataComponent: React.FC<{ todos: Todo[] }> = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    );
};
