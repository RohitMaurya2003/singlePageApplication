function ErrorMessage({ message = 'Something went wrong!', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-red-300 p-10 text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
            Oops! Error
          </h3>
          <p className="text-gray-700 font-medium text-lg mb-8">{message}</p>
          
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-red-600 hover:to-pink-600 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
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
