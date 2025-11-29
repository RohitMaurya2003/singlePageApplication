function Loader({ size = 'md', message = 'Loading...' }) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Modern spinner with gradient */}
      <div className="relative">
        <div className={`${sizes[size]} rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 absolute`}></div>
        <div
          className={`${sizes[size]} rounded-full border-4 border-transparent bg-gradient-to-tr from-indigo-600 to-purple-600 animate-spin`}
          style={{
            borderTopColor: 'transparent',
            backgroundClip: 'padding-box',
          }}
        ></div>
        {/* Inner glow */}
        <div className={`${sizes[size]} rounded-full absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-400 blur-md opacity-50 animate-pulse`}></div>
      </div>
      
      {message && (
        <div className="mt-6 space-y-2">
          <p className="text-gray-700 font-semibold text-lg animate-pulse">{message}</p>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loader
