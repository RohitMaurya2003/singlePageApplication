function ErrorMessage({ message = 'Something went wrong!', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-md w-full">
        {/* Animated error icon */}
        <div className="text-center mb-6">
          <div className="inline-block animate-bounce">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl">⚠️</span>
            </div>
          </div>
        </div>
        
        {/* Error content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border-2 border-red-100">
          <h3 className="text-2xl font-black text-gray-900 mb-3">
            Oops! Something Went Wrong
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{message}</p>
          
          {/* Retry Button */}
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>🔄</span>
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
