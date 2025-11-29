import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Explore Products Button - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <Link
          to="/products"
          className="group px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-2xl hover:bg-yellow-300 hover:text-purple-700 transition-all shadow-2xl hover:shadow-yellow-300/50 transform hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
        >
          Explore Products
          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      <div className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-semibold animate-slideIn">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            New Products Added Daily
          </div>
          
          {/* Main heading */}
          <h1 className="text-7xl md:text-9xl font-extrabold text-white leading-tight drop-shadow-2xl text-center">
            Shop Smart,
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Shop Sphere
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl font-medium drop-shadow-lg leading-relaxed text-center">
            Discover thousands of amazing products at unbeatable prices.
            Your perfect shopping experience starts here.
          </p>
          
          {/* CTA Button */}
          <button className="px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-xl font-bold rounded-3xl hover:bg-white/20 transition-all shadow-xl transform hover:scale-110">
            Learn More
          </button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 transform hover:scale-110 hover:-translate-y-2 transition-all text-center">
              <div className="text-6xl font-extrabold text-white mb-3">500+</div>
              <div className="text-white/90 font-semibold text-lg">Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 transform hover:scale-110 hover:-translate-y-2 transition-all text-center">
              <div className="text-6xl font-extrabold text-white mb-3">50K+</div>
              <div className="text-white/90 font-semibold text-lg">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 transform hover:scale-110 hover:-translate-y-2 transition-all text-center">
              <div className="text-6xl font-extrabold text-white mb-3">4.9</div>
              <div className="text-white/90 font-semibold text-lg">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage