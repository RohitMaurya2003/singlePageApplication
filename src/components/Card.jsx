import { Link } from 'react-router-dom'

function Card({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Product Image */}
        <div className="h-64 bg-gray-50 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category */}
          <div className="text-sm text-gray-500 mb-2 uppercase">
            {product.category}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 flex-1">
            {product.title}
          </h3>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium text-gray-700 ml-1">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          )}
          
          {/* Price */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-blue-600 font-medium">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card