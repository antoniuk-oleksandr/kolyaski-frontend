import React from "react";
import ErrorBoundaryLayout from "@/common-components/ErrorBoundary/ErrorBoundaryLayout";

class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props)

        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: any) {
        return {hasError: true}
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log({error, errorInfo})
    }

    render() {
        if ((this.state as any).hasError) {
            return (
                <ErrorBoundaryLayout>
                    <h2>На жаль, виникла помилка!</h2>
                </ErrorBoundaryLayout>
            )
        }
        return (this.props as any).children;
    }
}

export default ErrorBoundary