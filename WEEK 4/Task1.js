import React from 'react';

function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$29.99',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$49.99',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$69.99',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-semibold">MyShop</div>
          <div className="space-x-4">
            <a href="#hero" className="text-white hover:text-gray-300">Home</a>
            <a href="#products" className="text-white hover:text-gray-300">Products</a>
            <a href="#footer" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
          <p className="text-lg mb-6">Discover amazing products at unbeatable prices.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map(product => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg text-gray-700">{product.price}</p>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-blue-500 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <a href="https://facebook.com" className="mx-2 text-white hover:text-gray-300">Facebook</a>
            <a href="https://twitter.com" className="mx-2 text-white hover:text-gray-300">Twitter</a>
            <a href="https://instagram.com" className="mx-2 text-white hover:text-gray-300">Instagram</a>
          </div>
          <p>&copy; 2025 MyShop. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
