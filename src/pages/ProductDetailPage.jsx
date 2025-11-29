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
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Loader message="Loading product details..." />
        </div>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Button 
            onClick={() => navigate('/products')} 
            variant="outline" 
            className="mb-6"
          >
            ← Back to Products
          </Button>
          <ErrorMessage message={error} onRetry={fetchProduct} />
        </div>
      </div>
    )
  }

  // No product found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Button 
            onClick={() => navigate('/products')} 
            variant="outline" 
            className="mb-6"
          >
            ← Back to Products
          </Button>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
            <p className="text-gray-600">This product doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/products')} 
          variant="outline" 
          className="mb-6"
        >
          ← Back to Products
        </Button>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 w-auto object-contain"
              />
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col">
              {/* Category */}
              <div className="text-sm text-gray-500 uppercase mb-2">
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xl ${i < Math.floor(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors">
                  Add to Wishlist
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
