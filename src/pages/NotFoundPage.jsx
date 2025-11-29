import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="text-center px-6 relative z-10 animate-fadeInUp">
        {/* 404 Number */}
        <div className="mb-10">
          <h1 className="text-[12rem] md:text-[16rem] font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl leading-none">
            404
          </h1>
        </div>
        
        {/* Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 drop-shadow-lg">
            Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl hover:bg-yellow-300 hover:text-purple-700 transition-all shadow-2xl hover:shadow-yellow-300/50 transform hover:scale-105 hover:-translate-y-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
