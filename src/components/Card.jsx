import { Link } from 'react-router-dom'

function Card({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden transform hover:-translate-y-3 border-2 border-transparent hover:border-purple-300 animate-fadeInUp">
        {/* Product Image */}
        <div className="relative h-64 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 flex items-center justify-center p-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 relative z-10"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg uppercase">
              {product.category}
            </span>
          </div>

          {/* Rating Badge */}
          {product.rating && (
            <div className="absolute top-4 right-4 z-20">
              <div className="flex items-center gap-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold text-gray-900">{product.rating.rate}</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 flex-1 group-hover:text-purple-600 transition-colors">
            {product.title}
          </h3>
          
          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
              <span className="text-xs text-gray-500 font-medium">Best Price</span>
            </div>
            <span className="px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl flex items-center gap-2 group-hover:from-purple-700 group-hover:to-pink-700 transition-all shadow-lg group-hover:shadow-2xl transform group-hover:scale-105">
              View
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card