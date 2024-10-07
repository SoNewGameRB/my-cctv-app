// ProductList.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { products } from './products'; // 假設你有一個 products 數據文件

const ProductList = ({ addToCart, viewProductDetails, searchTerm, filterCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let updatedProducts = products;

    if (filterCategory !== 'all') {
      updatedProducts = updatedProducts.filter((product) => product.category === filterCategory);
    }

    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, filterCategory]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-2 text-xl font-bold text-blue-600">${product.price}</p>
          <button
            className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            加入購物車
          </button>
          <button
            className="mt-2 text-blue-500 underline"
            onClick={() => viewProductDetails(product)}
          >
            查看詳情
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
