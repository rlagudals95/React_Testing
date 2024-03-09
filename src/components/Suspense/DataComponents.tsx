import React from "react";
import { getTodo } from "../../apis/testApi";
import { useQuery } from "@tanstack/react-query";


export const DataComponent: React.FC = () => {

    const { data: todos, error } = useQuery({ queryKey: ['getTodo'], queryFn: getTodo });

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
