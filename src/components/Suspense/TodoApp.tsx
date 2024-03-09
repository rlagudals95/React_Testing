import { Suspense } from "react";
import { DataComponent } from "./DataComponents";
import { LoadingFallback } from "./LoadingFallback";
import { useTodo } from "./useTodo";

export const TodoApp: React.FC = () => {

    const todos = useTodo();

    return (
        <Suspense fallback={<LoadingFallback />}>
            <DataComponent todos={todos} />
        </Suspense>
    );
};