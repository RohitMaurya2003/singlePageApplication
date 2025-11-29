import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopSphere
              </span>
              <span className="text-xs text-gray-500 font-medium">Modern Shopping</span>
            </div>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-8 py-4 rounded-xl text-xl font-extrabold transition-all duration-300 overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-700 hover:text-purple-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-15">Home</span>
                  {!isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl"></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `relative px-8 py-4 rounded-xl text-xl font-extrabold transition-all duration-300 overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-700 hover:text-purple-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Products</span>
                  {!isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl"></span>
                  )}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar