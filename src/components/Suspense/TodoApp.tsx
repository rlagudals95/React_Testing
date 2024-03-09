import { Suspense } from "react";
import { DataComponent } from "./DataComponents";
import { LoadingFallback } from "./LoadingFallback";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

export const TodoApp: React.FC = () => {
    return (
        <ErrorBoundary
            FallbackComponent={fallbackProps => <ErrorFallback {...fallbackProps} />}
        >
            <Suspense fallback={<LoadingFallback />}>
                <DataComponent />
            </Suspense>
        </ErrorBoundary>

    );
};