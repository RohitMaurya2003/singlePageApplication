function ErrorMessage({ message = 'Something went wrong!', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6 text-center">
          <div className="text-red-600 text-5xl mb-4">⚠</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Error
          </h3>
          <p className="text-gray-600 mb-4">{message}</p>
          
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
