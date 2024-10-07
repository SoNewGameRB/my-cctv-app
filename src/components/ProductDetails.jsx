// ProductDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProductDetails = ({ product, onBack }) => {
  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <button
        className="text-blue-500 underline mb-4"
        onClick={onBack}
      >
        返回商品列表
      </button>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded"
        />
        <div className="md:ml-8">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-4 text-xl font-bold text-blue-600">${product.price}</p>
          <button
            className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700"
            onClick={() => onBack()}
          >
            返回
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
