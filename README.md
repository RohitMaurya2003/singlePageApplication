# ShopSphere - Product Catalog SPA

A modern Single Page Application (SPA) built with React that fetches and displays products from the FakeStore API. Features include real-time search, category filtering, sorting, and responsive design.

## 🚀 Live Demo

Run locally with `npm run dev` and visit `http://localhost:5173`

## 📸 Features

- **Home Page**: Welcome landing page with call-to-action
- **Products List**: Grid display of all products with search, filter, and sort
- **Product Details**: Comprehensive product information page
- **404 Page**: Custom not-found page
- **Real-time Search**: Instant product search by title
- **Category Filter**: Filter products by category
- **Price Sorting**: Sort by price (low to high, high to low) or rating
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Loading States**: Beautiful loading spinners during data fetch
- **Error Handling**: User-friendly error messages with retry functionality
- **Smooth Animations**: Hover effects and page transitions

## 🛠️ Technologies Used

### Core
- **React 19.2.0** - UI library for building component-based interfaces
- **Vite 7.2.4** - Fast build tool and development server
- **React Router DOM** - Client-side routing for SPA navigation

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind

### API & Data
- **Axios** - HTTP client for API requests
- **FakeStore API** - Free REST API for e-commerce product data

## 📁 Project Structure

```
vite-project/
├── public/                 # Static assets
├── src/
│   ├── api/
│   │   └── client.js      # Axios configuration & API functions
│   ├── components/
│   │   ├── Button.jsx     # Reusable button component
│   │   ├── Card.jsx       # Product card component
│   │   ├── ErrorMessage.jsx  # Error display component
│   │   ├── Loader.jsx     # Loading spinner component
│   │   ├── Navbar.jsx     # Navigation bar with active links
│   │   └── ScrollToTop.jsx   # Scroll utility component
│   ├── pages/
│   │   ├── HomePage.jsx          # Landing page (/)
│   │   ├── ProductsPage.jsx      # Product list (/products)
│   │   ├── ProductDetailPage.jsx # Product details (/products/:id)
│   │   └── NotFoundPage.jsx      # 404 page
│   ├── App.jsx            # Main app with routes
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & Tailwind imports
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Why These Technologies?

### React
- Component-based architecture for reusable UI
- Virtual DOM for efficient updates
- Large ecosystem and community support
- Perfect for building SPAs

### Vite
- Lightning-fast development server with HMR
- Optimized production builds
- Modern ESM-based architecture
- Better DX compared to Create React App

### React Router
- Declarative routing for React
- Supports dynamic URL parameters
- Browser history API integration
- Easy nested routing

### Tailwind CSS
- Rapid UI development with utility classes
- Consistent design system
- Responsive design made easy
- Smaller bundle size than traditional CSS frameworks

### Axios
- Clean API for HTTP requests
- Automatic JSON parsing
- Request/response interceptors
- Better error handling than fetch

### FakeStore API
- Free, reliable REST API
- Real product data with images
- No authentication required
- Perfect for learning and demos

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd vite-project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🔑 Key Concepts Implemented

### 1. SPA Routing
- Multiple routes without page refresh
- Dynamic route parameters (`/products/:id`)
- Browser back/forward navigation
- Active link highlighting

### 2. State Management
- `useState` for component state
- `useEffect` for side effects (API calls)
- Props for component communication

### 3. API Integration
- Centralized Axios client
- Async/await for API calls
- Loading states during fetch
- Error handling with try/catch
- Empty state handling

### 4. Component Reusability
- Props for customization
- Composition over inheritance
- Single Responsibility Principle

### 5. Responsive Design
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg, xl)
- Flexible grid layouts
- Touch-friendly UI

## 📱 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Welcome page with CTA |
| `/products` | ProductsPage | All products with search/filter |
| `/products/:id` | ProductDetailPage | Single product details |
| `*` | NotFoundPage | 404 error page |

## 🎨 Components Reference

### Button
Reusable button with variants and sizes
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card
Product card for grid display
```jsx
<Card product={productObject} />
```

### Loader
Loading spinner with message
```jsx
<Loader size="md" message="Loading..." />
```

### ErrorMessage
Error display with retry
```jsx
<ErrorMessage message="Error text" onRetry={retryFunction} />
```

## 🌟 Features Deep Dive

### Search Functionality
- Real-time filtering as you type
- Case-insensitive search
- Searches in product titles
- Client-side implementation (fast!)

### Category Filter
- Dynamically extracted from API data
- Dropdown selection
- Combines with search
- Shows all categories available

### Sorting
- Price: Low to High
- Price: High to Low
- Highest Rated
- Client-side sorting (instant)

### Active Filters Display
- Visual badges for active filters
- Individual remove buttons
- "Clear all" option
- Results count update

## 🎓 Learning Outcomes

From this project, you'll understand:

1. **React Fundamentals**
   - Functional components
   - Hooks (useState, useEffect, useParams, useNavigate)
   - Props and component composition

2. **SPA Architecture**
   - Client-side routing
   - Dynamic pages
   - State management across routes

3. **API Integration**
   - Fetching data from REST APIs
   - Handling async operations
   - Error and loading states

4. **Modern CSS**
   - Tailwind utility classes
   - Responsive design
   - CSS transitions and animations

5. **Best Practices**
   - Component reusability
   - Code organization
   - Error handling
   - User experience considerations

## 🐛 Challenges Faced & Solutions

### Challenge 1: Tailwind CSS v4 Migration
**Problem**: Initial setup used old Tailwind syntax
**Solution**: Installed `@tailwindcss/postcss` and updated imports

### Challenge 2: Managing Multiple Filters
**Problem**: Search, category filter, and sort needed to work together
**Solution**: Chained array methods (filter → filter → sort)

### Challenge 3: Route State Persistence
**Problem**: Going back loses scroll position
**Solution**: Implemented ScrollToTop component

## 📝 Future Enhancements

- [ ] Add to cart functionality
- [ ] Wishlist with localStorage
- [ ] Dark mode toggle
- [ ] Product comparison
- [ ] Pagination for large datasets
- [ ] Advanced filters (price range, rating)
- [ ] Product reviews section

## 👨‍💻 Author

Created as part of a Single Page Application assignment.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
