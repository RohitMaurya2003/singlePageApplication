import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to ShopSphere
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-4">
            Your One-Stop Shopping Destination
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover a wide range of quality products at competitive prices. 
            Browse through our collection and find exactly what you need.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wide Selection</h3>
              <p className="text-gray-600">Browse through hundreds of products</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Search</h3>
              <p className="text-gray-600">Find what you need quickly</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Filters</h3>
              <p className="text-gray-600">Sort and filter with ease</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage