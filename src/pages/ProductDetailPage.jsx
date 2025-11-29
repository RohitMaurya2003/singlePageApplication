import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { productAPI } from '../api/client'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch single product
  const fetchProduct = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await productAPI.getProductById(id)
      setProduct(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch product details')
      console.error('Error fetching product:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <Loader message="Loading product details..." />
        </div>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate('/products')}
            className="mb-8 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/30 transition-all shadow-lg inline-flex items-center gap-2 transform hover:scale-105"
          >
            ← Back to Products
          </button>
          <ErrorMessage message={error} onRetry={fetchProduct} />
        </div>
      </div>
    )
  }

  // No product found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate('/products')}
            className="mb-8 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/30 transition-all shadow-lg inline-flex items-center gap-2 transform hover:scale-105"
          >
            ← Back to Products
          </button>
          <div className="text-center py-20 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30">
            <h2 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">Product Not Found</h2>
            <p className="text-xl text-white/90 drop-shadow-lg">This product doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12 flex items-start justify-center">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="mb-8 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/30 transition-all shadow-lg inline-flex items-center gap-2 transform hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </button>

        {/* Product Details */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden animate-fadeInUp">
          <div className="grid md:grid-cols-2 gap-10 p-10">
            {/* Left Column - Image */}
            <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-2xl p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 w-auto object-contain relative z-10 transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col">
              {/* Category */}
              <div className="inline-block w-fit px-5 py-2 text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full uppercase mb-4 shadow-lg">
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {product.title}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-6 h-6 ${i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 font-bold text-lg">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6 p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-2xl border-2 border-purple-200">
                <p className="text-sm text-gray-600 mb-2 font-bold uppercase tracking-wide">Price</p>
                <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${product.price}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold shadow-md">
                    ✓ In Stock
                  </span>
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-bold shadow-md">
                    🚚 Free Shipping
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <button className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Add to Cart
                </button>
                <button className="px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-2xl font-bold hover:from-gray-200 hover:to-gray-300 transition-all shadow-lg transform hover:scale-105">
                  Wishlist ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
