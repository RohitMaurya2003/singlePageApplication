import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="text-center px-4 relative z-10 max-w-6xl mx-auto">
        {/* Animated emoji with glow */}
        <div className="relative inline-block mb-8">
          <div className="text-8xl mb-6 animate-bounce hover:animate-spin transition-all duration-300 cursor-pointer">
            🛍️
          </div>
          <div className="absolute inset-0 text-8xl opacity-30 blur-xl animate-pulse">🛍️</div>
        </div>
        
        {/* Main heading with gradient and glow */}
        <h1 className="text-7xl md:text-9xl font-black mb-8 relative">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x relative">
            ShopSphere
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl opacity-30 animate-gradient-x"></div>
          </span>
        </h1>
        
        {/* Subheading with typewriter effect */}
        <div className="relative mb-6">
          <p className="text-2xl md:text-4xl text-white/90 font-light mb-4 typewriter">
            Where Shopping Meets Innovation
          </p>
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 animate-pulse mx-auto"></div>
        </div>
        
        {/* Description with fade in */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
          Experience the future of e-commerce with our AI-powered platform. Discover curated collections, 
          intelligent recommendations, and seamless shopping like never before.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            to="/products"
            className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              🚀 Explore Universe 
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
          
          {/* Stats card with glass morphism */}
          <div className="px-8 py-5 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform" style={{transitionDelay: '0.1s'}}></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform" style={{transitionDelay: '0.2s'}}></div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">500+ Products</p>
                <p className="text-sm text-gray-300">Live Inventory</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🤖', title: 'AI Powered', desc: 'Smart recommendations' },
            { icon: '⚡', title: 'Lightning Fast', desc: 'Instant search results' },
            { icon: '🎯', title: 'Precision', desc: 'Advanced filters' }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Floating action badge */}
        <div className="fixed bottom-8 right-8">
          <div className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl animate-bounce">
            <span className="text-white font-semibold text-sm">✨ New Features Live!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage