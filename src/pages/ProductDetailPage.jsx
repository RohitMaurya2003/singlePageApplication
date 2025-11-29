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

  // Mock multiple images for demonstration
  const productImages = product ? [
    product.image,
    product.image,
    product.image,
    product.image
  ] : []

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
        <div className="relative z-10">
          <Loader message="Exploring product universe..." />
        </div>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
        <div className="relative z-10 w-full px-6">
          <Button 
            onClick={() => navigate('/products')} 
            variant="outline" 
            className="mb-6 group backdrop-blur-xl bg-slate-800/50 border-slate-700/50 text-white hover:bg-slate-700/50"
          >
            <span className="inline-flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">🚀</span>
              Back to Universe
            </span>
          </Button>
          <ErrorMessage message={error} onRetry={fetchProduct} />
        </div>
      </div>
    )
  }

  // No product found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
        <div className="relative z-10 w-full px-6">
          <Button 
            onClick={() => navigate('/products')} 
            variant="outline" 
            className="mb-6 group backdrop-blur-xl bg-slate-800/50 border-slate-700/50 text-white hover:bg-slate-700/50"
          >
            <span className="inline-flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">🚀</span>
              Back to Universe
            </span>
          </Button>
          <div className="text-center py-24">
            <div className="text-9xl mb-8 animate-float">🔭</div>
            <h2 className="text-4xl font-black text-white mb-4">Product Lost in Space</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              This product seems to have drifted out of our cosmic inventory. Let's explore other amazing products in the universe!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      <div className="w-full px-6 relative z-10">
        {/* Enhanced Back Button */}
        <div className="w-full mb-8">
          <Button 
            onClick={() => navigate('/products')} 
            variant="outline" 
            className="group backdrop-blur-xl bg-slate-800/50 border-slate-700/50 text-white hover:bg-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
          >
            <span className="inline-flex items-center gap-3">
              <span className="text-xl group-hover:-translate-x-1 transition-transform">🌌</span>
              Back to Product Universe
            </span>
          </Button>
        </div>

        {/* FULL WIDTH Product Details - No max-width constraints */}
        <div className="w-full backdrop-blur-xl bg-slate-800/40 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="grid xl:grid-cols-2 gap-0 w-full">
            {/* Left Column - Enhanced Image Gallery - FULL HEIGHT */}
            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8 xl:p-12 min-h-[80vh] flex flex-col justify-between">
              {/* Glow Effects */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Main Image Container - Centered and Large */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-2xl">
                  <img
                    src={productImages[selectedImage]}
                    alt={product.title}
                    className="w-full h-auto max-h-[50vh] object-contain hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>

              {/* Image Thumbnails - Bottom Section */}
              <div className="mt-8">
                <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <span>🖼️</span>
                  Product Views
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-2xl border-2 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                        selectedImage === index 
                          ? 'border-cyan-500 bg-cyan-500/20 shadow-lg shadow-cyan-500/25 transform scale-105' 
                          : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-20 object-contain"
                      />
                      {selectedImage === index && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Details - FULL HEIGHT */}
            <div className="flex flex-col p-8 xl:p-12 bg-slate-800/20 backdrop-blur-lg min-h-[80vh]">
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Category Badge */}
                <div className="inline-block w-fit px-6 py-3 text-sm font-black text-cyan-400 bg-cyan-500/10 rounded-2xl uppercase tracking-widest mb-8 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300">
                  🌟 {product.category}
                </div>

                {/* Title */}
                <h1 className="text-4xl xl:text-5xl font-black text-white mb-8 leading-tight">
                  {product.title}
                </h1>

                {/* Rating with Enhanced Design */}
                {product.rating && (
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-slate-800/50 rounded-2xl border border-slate-700/50">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-2xl ${i < Math.floor(product.rating.rate) ? 'text-yellow-400 animate-pulse' : 'text-slate-600'}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="text-2xl font-black text-white">
                        {product.rating.rate}
                      </span>
                    </div>
                    <span className="text-lg text-cyan-400 font-semibold">
                      ({product.rating.count} cosmic reviews)
                    </span>
                  </div>
                )}

                {/* Enhanced Price Display */}
                <div className="mb-8 p-8 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
                  <p className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                    💰 Cosmic Price
                  </p>
                  <span className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30">
                      🚀 Free Shipping
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold border border-purple-500/30">
                      ⚡ In Stock
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30">
                      🔥 Best Seller
                    </span>
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">📖</span>
                    Product Story
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg backdrop-blur-sm bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
                    {product.description}
                  </p>
                </div>

                {/* Product Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">✨</span>
                    Key Features
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Premium Quality Materials",
                      "Advanced Technology",
                      "Eco-Friendly Packaging",
                      "Lifetime Support",
                      "Fast Shipping",
                      "Easy Returns"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 backdrop-blur-sm bg-slate-800/30 rounded-xl border border-slate-700/50">
                        <span className="text-cyan-400 text-lg">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fixed Bottom Action Section */}
              <div className="border-t border-slate-700/50 pt-8 mt-8">
                {/* Enhanced Action Buttons */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <button className="group relative px-8 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                      🛒 Add to Cart
                      <span className="group-hover:scale-125 transition-transform">✨</span>
                    </span>
                  </button>
                  
                  <button className="group relative px-8 py-5 backdrop-blur-xl bg-slate-800/50 border-2 border-slate-700/50 text-white rounded-2xl font-bold hover:border-pink-500/50 hover:bg-pink-500/10 transform hover:scale-105 transition-all duration-500">
                    <span className="flex items-center justify-center gap-3 text-lg">
                      ❤️ Wishlist
                      <span className="group-hover:scale-125 transition-transform">🌟</span>
                    </span>
                  </button>
                </div>

                {/* Additional Features */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 backdrop-blur-sm bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="text-2xl mb-2">🛡️</div>
                    <p className="text-sm text-cyan-400 font-semibold">2-Year Warranty</p>
                  </div>
                  <div className="text-center p-4 backdrop-blur-sm bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                    <div className="text-2xl mb-2">🚚</div>
                    <p className="text-sm text-cyan-400 font-semibold">Free Delivery</p>
                  </div>
                  <div className="text-center p-4 backdrop-blur-sm bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300">
                    <div className="text-2xl mb-2">↩️</div>
                    <p className="text-sm text-cyan-400 font-semibold">30-Day Return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section - FULL WIDTH */}
        <div className="w-full mt-12">
          <h2 className="text-3xl font-black text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🌟 You Might Also Like
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Placeholder for related products */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="backdrop-blur-xl bg-slate-800/40 rounded-2xl border border-slate-700/50 p-4 hover:border-cyan-500/30 transition-all duration-300">
                <div className="bg-slate-700/30 rounded-xl h-32 mb-3 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <p className="text-white text-sm font-semibold text-center">Related Product {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage