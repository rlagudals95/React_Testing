import React from "react";
import { Todo, getTodo } from "../../apis/testApi";
import { useQuery } from "react-query";

export const DataComponent: React.FC = () => {

    const { data: todos, error } = useQuery<Todo[]>('todos', getTodo);

    if (error) {
        throw error
    }

    return (
        <div>
            {(todos || []).map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    );
};
