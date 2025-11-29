function Loader({ size = 'md', message = 'Loading...' }) {
  const sizes = {
    sm: 'w-10 h-10 border-3',
    md: 'w-16 h-16 border-4',
    lg: 'w-24 h-24 border-[6px]',
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className={`${sizes[size]} border-purple-200 border-t-purple-600 rounded-full animate-spin`}></div>
        <div className={`${sizes[size]} border-pink-200 border-t-pink-600 rounded-full animate-spin absolute inset-0`} style={{animationDirection: 'reverse', animationDuration: '0.6s'}}></div>
      </div>
      {message && (
        <p className="mt-6 text-white font-bold text-xl drop-shadow-lg">{message}</p>
      )}
    </div>
  )
}

export default Loader
