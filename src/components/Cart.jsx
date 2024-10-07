// Cart.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Cart = ({ cartItems, removeFromCart, clearCart, onClose }) => {
  const [showContactForm, setShowContactForm] = useState(false); // 控制聯絡表單顯示狀態
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactTime: "",
    city: "",
    district: "",
    selectedItems: cartItems
      .map((item) => `${item.name} (${item.quantity} x $${item.price})`)
      .join(", "),
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 處理表單數據變更
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 提交表單
  const handleSubmit = (e) => {
    e.preventDefault();
    // 此處可以進行 API 調用處理
    console.log("Form submitted:", formData);
    alert("表單已提交！");
    setShowContactForm(false); // 提交後隱藏表單
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg p-4 overflow-auto z-50"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      {/* 關閉購物車按鈕 */}
      <button
        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 z-50"
        onClick={onClose}
      >
        關閉
      </button>

      <h2 className="text-2xl font-bold mb-4">購物車</h2>
      {cartItems.length === 0 ? (
        <p>購物車是空的。</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <div className="w-3/4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">
                  {item.quantity} x ${item.price}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                移除
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              總價: ${totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              清空購物車
            </button>
          </div>

          {/* 聯絡我們按鈕 */}
          <button
            onClick={() => setShowContactForm(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            聯絡我們
          </button>
        </>
      )}

      {/* 聯絡表單顯示區域 */}
      {showContactForm && (
        <form
          className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-bold mb-4">聯絡我們</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">聯絡人姓名</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">聯絡電話</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">聯絡時間</label>
            <input
              type="text" // 改為 text 類型
              name="contactTime"
              value={formData.contactTime}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              placeholder="例如: 上午 9 點到 11 點"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">縣市</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">選擇縣市</option>
              <option value="台北市">台北市</option>
              <option value="新北市">新北市</option>
              <option value="桃園市">桃園市</option>
              <option value="台中市">台中市</option>
              <option value="台南市">台南市</option>
              <option value="高雄市">高雄市</option>
              <option value="基隆市">基隆市</option>
              <option value="新竹市">新竹市</option>
              <option value="嘉義市">嘉義市</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗縣">苗栗縣</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="屏東縣">屏東縣</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="台東縣">台東縣</option>
              <option value="澎湖縣">澎湖縣</option>
              <option value="金門縣">金門縣</option>
              <option value="連江縣">連江縣</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">地區</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">選購的商品</label>
            <textarea
              name="selectedItems"
              value={formData.selectedItems}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              readOnly
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            提交
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default Cart;
