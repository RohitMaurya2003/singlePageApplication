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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12 flex items-start justify-center">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
            Our Products
          </h1>
          <p className="text-xl text-white/90 font-medium drop-shadow-lg">Discover amazing deals on quality items</p>
        </div>

        {/* Search, Filter, and Sort Section */}
        {!loading && !error && (
          <div className="mb-10 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 animate-slideIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Search Bar */}
              <div className="md:col-span-2">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all text-gray-800 font-medium text-lg placeholder-purple-400"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all appearance-none bg-white cursor-pointer text-gray-800 font-semibold text-lg"
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
              <label className="text-lg font-bold text-gray-800">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all appearance-none bg-white cursor-pointer text-gray-800 font-semibold"
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
          <div className="mb-8 text-center">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg">
              {filteredAndSortedProducts.length} Products Found
            </span>
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
          <div className="text-center py-20 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30">
            <p className="text-2xl text-white font-bold mb-6 drop-shadow-lg">No products found</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSortBy('default')
              }}
              className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:bg-yellow-300 hover:text-purple-700 transition-all shadow-xl transform hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Empty State - No Products at All */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30">
            <p className="text-2xl text-white font-bold drop-shadow-lg">No products available</p>
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
