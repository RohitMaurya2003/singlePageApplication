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
