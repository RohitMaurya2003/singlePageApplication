import { useState, useEffect } from 'react'
import { productAPI } from '../api/client'
import Card from '../components/Card'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function ProductsPage() {
  // State management
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [categories, setCategories] = useState([])

  // Fetch products function
  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await productAPI.getAllProducts()
      setProducts(data)
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map(p => p.category))]
      setCategories(uniqueCategories)
    } catch (err) {
      setError(err.message || 'Failed to fetch products')
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts()
  }, [])

  // Filter and sort products
  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return (b.rating?.rate || 0) - (a.rating?.rate || 0)
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Products
          </h1>
          <p className="text-gray-600">Browse our collection of products</p>
        </div>

        {/* Search, Filter, and Sort Section */}
        {!loading && !error && (
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Search Bar */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredAndSortedProducts.length} of {products.length} products
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && <Loader message="Loading products..." />}

        {/* Error State */}
        {error && !loading && (
          <ErrorMessage message={error} onRetry={fetchProducts} />
        )}

        {/* Empty State - No Results */}
        {!loading && !error && filteredAndSortedProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No products found</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSortBy('default')
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Empty State - No Products at All */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products available</p>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && filteredAndSortedProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage

  // Filter and sort products
  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return (b.rating?.rate || 0) - (a.rating?.rate || 0)
      return 0 // default order
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="w-full px-6 pt-8 relative z-10">
        {/* Enhanced Header - Full Width */}
        <div className="mb-12 text-center relative w-full">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-20 blur-sm">✨</div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Product Universe
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Discover our curated collection of premium products with intelligent search and AI-powered recommendations
          </p>
        </div>

        {/* Enhanced Search, Filter, and Sort Section - Full Width */}
        {!loading && !error && (
          <div className="mb-12 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8 max-w-7xl mx-auto">
              {/* Search Bar - Made Bigger */}
              <div className="xl:col-span-7">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative flex items-center">
                    <span className="absolute left-7 text-3xl z-10">🔍</span>
                    <input
                      type="text"
                      placeholder="Search products across the universe..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="relative w-full pl-20 pr-8 py-6 text-lg bg-slate-800/60 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all font-medium placeholder:text-gray-400 text-white shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="xl:col-span-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative flex items-center">
                    <span className="absolute left-6 text-2xl z-10">📦</span>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="relative w-full pl-16 pr-6 py-6 text-lg bg-slate-800/60 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all font-medium text-white shadow-2xl cursor-pointer appearance-none"
                    >
                      <option value="all">All Galaxies</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-6 text-2xl z-10 pointer-events-none">▼</span>
                  </div>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="xl:col-span-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative flex items-center">
                    <span className="absolute left-6 text-2xl z-10">🎯</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="relative w-full pl-16 pr-6 py-6 text-lg bg-slate-800/60 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 transition-all font-medium text-white shadow-2xl cursor-pointer appearance-none"
                    >
                      <option value="default">Sort</option>
                      <option value="price-asc">💰 Low to High</option>
                      <option value="price-desc">💎 High to Low</option>
                      <option value="rating">⭐ Top Rated</option>
                    </select>
                    <span className="absolute right-6 text-2xl z-10">▼</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Active Filters Display */}
            {(searchTerm || selectedCategory !== 'all' || sortBy !== 'default') && (
              <div className="max-w-7xl mx-auto flex items-center gap-3 flex-wrap backdrop-blur-xl bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
                <span className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  Active Filters:
                </span>
                {searchTerm && (
                  <span className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 group hover:scale-105 transition-transform">
                    🔍 "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="hover:bg-white/20 rounded-full p-1 transition-colors w-6 h-6 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 group hover:scale-105 transition-transform">
                    🌟 {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="hover:bg-white/20 rounded-full p-1 transition-colors w-6 h-6 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {sortBy !== 'default' && (
                  <span className="px-4 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 group hover:scale-105 transition-transform">
                    📊 {sortBy.replace('-', ' ')}
                    <button
                      onClick={() => setSortBy('default')}
                      className="hover:bg-white/20 rounded-full p-1 transition-colors w-6 h-6 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSortBy('default')
                  }}
                  className="ml-auto px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 border border-slate-600/50"
                >
                  Clear All
                  <span className="text-lg">✨</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Enhanced Results Count */}
        {!loading && !error && (
          <div className="mb-8 flex items-center gap-3 max-w-7xl mx-auto">
            <div className="px-6 py-3 backdrop-blur-xl bg-slate-800/40 rounded-2xl border border-slate-700/50 shadow-2xl">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-cyan-400 text-lg">📊</span>
                Showing {filteredAndSortedProducts.length} of {products.length} cosmic products
              </span>
            </div>
            {filteredAndSortedProducts.length > 0 && (
              <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-sm font-bold shadow-lg animate-pulse">
                🎯 Live Results
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20 w-full">
            <div className="relative inline-block">
              <div className="text-8xl mb-6 animate-spin">🌌</div>
              <div className="absolute inset-0 text-8xl opacity-30 blur-md animate-pulse">🌌</div>
            </div>
            <p className="text-2xl text-cyan-400 font-light mb-4">Exploring the product universe...</p>
            <p className="text-gray-400">Loading amazing products for you</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20 w-full">
            <div className="text-8xl mb-6 animate-bounce">🚨</div>
            <h3 className="text-3xl font-bold text-red-400 mb-4">Cosmic Connection Lost</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{error}</p>
            <button
              onClick={fetchProducts}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🚀 Retry Connection
            </button>
          </div>
        )}

        {/* Empty State - No Results */}
        {!loading && !error && filteredAndSortedProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-24 w-full">
            <div className="text-9xl mb-8 animate-float">🔭</div>
            <h3 className="text-4xl font-bold text-white mb-4">No Cosmic Matches</h3>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Our telescopes couldn't find products matching your criteria. Try expanding your search across the universe.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSortBy('default')
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
            >
              🌟 Reset Cosmic Filters
            </button>
          </div>
        )}

        {/* Empty State - No Products at All */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-24 w-full">
            <div className="text-9xl mb-8 animate-pulse">🌠</div>
            <h3 className="text-3xl font-bold text-white mb-4">Universe Under Construction</h3>
            <p className="text-gray-400 text-lg">Our products are traveling through space and time...</p>
          </div>
        )}

        {/* Success State - Enhanced Product Grid - FULL WIDTH */}
        {!loading && !error && filteredAndSortedProducts.length > 0 && (
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-[95vw] mx-auto">
              {filteredAndSortedProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="transform hover:scale-105 transition-all duration-500"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating Action Button */}
        {!loading && !error && filteredAndSortedProducts.length > 0 && (
          <div className="fixed bottom-8 right-8 z-20">
            <div className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl shadow-2xl animate-bounce hover:animate-none hover:scale-110 transition-transform cursor-pointer">
              <span className="text-white font-bold text-sm flex items-center gap-2">
                ✨ {filteredAndSortedProducts.length} Products
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage