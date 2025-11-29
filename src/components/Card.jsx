import { Link } from 'react-router-dom'

function Card({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden hover:shadow-cyan-500/20 hover:-translate-y-3 transition-all duration-500 h-full flex flex-col group">
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-700 z-10 pointer-events-none"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 blur-xl transition-all duration-1000 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

        {/* Product Image Container */}
        <div className="relative h-72 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center p-8 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <img
            src={product.image}
            alt={product.title}
            className="relative max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl z-20"
          />
          
          {/* Enhanced Rating Badge */}
          {product.rating && (
            <div className="absolute top-5 right-5 px-4 py-2 bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 flex items-center gap-2 group-hover:border-cyan-400/50 transition-all duration-300">
              <span className="text-yellow-400 text-lg animate-pulse">⭐</span>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white">
                  {product.rating.rate}
                </span>
                <span className="text-xs text-cyan-400 font-semibold">
                  {product.rating.count} reviews
                </span>
              </div>
            </div>
          )}

          {/* Hover Action Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-600/50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
              View Details 
              <span className="group-hover:translate-x-1 transition-transform duration-300">✨</span>
            </span>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6 flex-1 flex flex-col relative z-20">
          {/* Enhanced Category Badge */}
          <div className="inline-block w-fit px-4 py-2 text-sm font-black text-cyan-400 bg-cyan-500/10 rounded-2xl uppercase tracking-wider mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
            {product.category}
          </div>
          
          {/* Enhanced Title */}
          <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 flex-1 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
            {product.title}
          </h3>
          
          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
            <div>
              <p className="text-sm text-cyan-400 font-semibold mb-1 flex items-center gap-2">
                <span className="text-lg">💰</span>
                Cosmic Price
              </p>
              <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                ${product.price}
              </span>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/25 group-hover:scale-110 transition-all duration-500 border border-cyan-400/20">
                <span className="text-white text-2xl group-hover:rotate-45 transition-transform duration-500">→</span>
              </div>
            </div>
          </div>

          {/* Stock Status */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.rating?.count > 100 ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
              <span className="text-xs text-gray-400 font-semibold">
                {product.rating?.count > 100 ? '🔥 Hot Item' : '⭐ Popular'}
              </span>
            </div>
            <span className="text-xs text-purple-400 font-semibold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              🚀 Free Shipping
            </span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
        <div className="absolute top-3 right-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
      </div>
    </Link>
  )
}

export default Card