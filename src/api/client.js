import axios from 'axios'

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

// API functions
export const productAPI = {
  // Get all products
  getAllProducts: async () => {
    const response = await apiClient.get('/products')
    return response.data
  },

  // Get single product by ID
  getProductById: async (id) => {
    const response = await apiClient.get(`/products/${id}`)
    return response.data
  },

  // Get all categories
  getCategories: async () => {
    const response = await apiClient.get('/products/categories')
    return response.data
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    const response = await apiClient.get(`/products/category/${category}`)
    return response.data
  },
}

export default apiClient
