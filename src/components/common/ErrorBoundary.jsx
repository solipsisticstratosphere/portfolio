import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-300 mb-6">
              We're sorry, but an error occurred while rendering this component.
            </p>

            {this.state.error && (
              <div className="mb-4">
                <p className="font-medium text-red-400 mb-2">Error:</p>
                <pre className="bg-gray-900 p-3 rounded text-sm overflow-auto max-h-40 text-gray-300">
                  {this.state.error.toString()}
                </pre>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="w-full py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
