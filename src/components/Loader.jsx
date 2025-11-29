function Loader({ size = 'md', message = 'Loading...' }) {
  const sizes = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className={`${sizes[size]} border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
      {message && (
        <p className="mt-4 text-gray-600">{message}</p>
      )}
    </div>
  )
}

export default Loader
