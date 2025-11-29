import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50 shadow-2xl">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo/Brand */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-500/25">
                <span className="text-white text-xl font-bold">🚀</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                ShopSphere
              </span>
              <span className="text-xs text-cyan-400 font-semibold tracking-wider">COSMIC SHOPPING</span>
            </div>
          </NavLink>

          {/* Enhanced Navigation Links */}
          <div className="flex items-center gap-[1cm]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-8 py-3 rounded-2xl font-bold transition-all duration-500 group overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl transform scale-105'
                    : 'text-gray-300 hover:text-white backdrop-blur-sm bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">🌌</span>
                    Home
                    {isActive && <span className="text-sm animate-bounce">✨</span>}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </>
              )}
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `relative px-8 py-3 rounded-2xl font-bold transition-all duration-500 group overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl transform scale-105'
                    : 'text-gray-300 hover:text-white backdrop-blur-sm bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">🛍️</span>
                    Products
                    {isActive && <span className="text-sm animate-bounce">🌟</span>}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </>
              )}
            </NavLink>
          </div>
        </div>

        {/* Animated Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform origin-left animate-gradient-x"></div>
      </div>

      {/* Floating particles for navbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </nav>
  )
}

export default Navbar