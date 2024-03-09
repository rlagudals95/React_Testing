import axios from "axios"
import { FallbackProps } from "react-error-boundary"

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {

    const errorMessage = axios.isAxiosError(error) && error.message ? error.message : `${error}`;

    return (
        <section>
            <div>
                <p>{errorMessage}</p>
                <p>
                    동일한 현상이 계속될 경우 문의 주시기 바랍니다.
                </p>
                <button onClick={resetErrorBoundary}>
                    다시 시도하기
                </button>
            </div>
        </section>
    )
}