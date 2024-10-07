// App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import FilterBar from "./components/FilterBar";
import AboutUs from "./components/AboutUs"; // 引入公司介紹組件

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false); // 控制購物車顯示狀態
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showMenu, setShowMenu] = useState(false); // 控制導航選單顯示狀態

  // 點擊購物車外部時隱藏購物車
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCart && !document.getElementById("cart-container").contains(event.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);

  // 添加商品到購物車
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // 移除購物車中的商品
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 清空購物車
  const clearCart = () => {
    setCartItems([]);
  };

  // 查看商品詳情
  const viewProductDetails = (product) => {
    setSelectedProduct(product);
  };

  // 返回商品列表
  const handleBackToProductList = () => {
    setSelectedProduct(null);
  };

  // 處理搜索
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 處理篩選
  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  // 設置定時器顯示 Intro 畫面
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showIntro ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <Intro />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 導航欄 */}
          <nav className="fixed top-0 left-0 w-full bg-blue-600 p-4 text-white z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">杰崴企業有限公司</h1>
              
              {/* 漢堡菜單按鈕（移動端顯示） */}
              <div className="md:hidden">
                <button
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {showMenu ? '關閉' : '導覽'}
                </button>
              </div>

              {/* 導航選單（桌面端顯示） */}
              <ul className="hidden md:flex space-x-4">
                <li>
                  <Link to="intro" smooth={true} className="cursor-pointer hover:text-gray-300">
                    首頁
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth={true} className="cursor-pointer hover:text-gray-300">
                    商品
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} className="cursor-pointer hover:text-gray-300">
                    公司介紹
                  </Link>
                </li>
                <li>
                  <Link to="smart" smooth={true} className="cursor-pointer hover:text-gray-300">
                    智能功能
                  </Link>
                </li>
                <li>
                  <Link to="remote" smooth={true} className="cursor-pointer hover:text-gray-300">
                    遠端監控
                  </Link>
                </li>
              </ul>

              {/* 購物車按鈕 */}
              <button
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
                onClick={() => setShowCart(true)} // 點擊時顯示購物車
              >
                購物車 ({cartItems.length})
              </button>
            </div>

            {/* 手機端導航選單 */}
            {showMenu && (
              <ul className="md:hidden bg-blue-600 text-white flex flex-col items-center space-y-2 py-4">
                <li>
                  <Link
                    to="intro"
                    smooth={true}
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => setShowMenu(false)} // 點擊後隱藏菜單
                  >
                    首頁
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    smooth={true}
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => setShowMenu(false)}
                  >
                    商品
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => setShowMenu(false)}
                  >
                    公司介紹
                  </Link>
                </li>
                <li>
                  <Link
                    to="smart"
                    smooth={true}
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => setShowMenu(false)}
                  >
                    智能功能
                  </Link>
                </li>
                <li>
                  <Link
                    to="remote"
                    smooth={true}
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => setShowMenu(false)}
                  >
                    遠端監控
                  </Link>
                </li>
              </ul>
            )}
          </nav>

          {/* 顯示購物車 */}
          <AnimatePresence>
            {showCart && (
              <>
                {/* 遮罩層，點擊可隱藏購物車 */}
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setShowCart(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* 購物車容器 */}
                <div id="cart-container" className="fixed top-0 right-0 w-full md:w-80 h-full bg-white shadow-lg z-50 overflow-y-auto">
                  <Cart
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                    onClose={() => setShowCart(false)} // 傳遞 onClose 回調函數
                  />
                </div>
              </>
            )}
          </AnimatePresence>

          {selectedProduct ? (
            <ProductDetails
              product={selectedProduct}
              onBack={handleBackToProductList}
            />
          ) : (
            <>
              {/* 首頁背景介紹 */}
              <section
                id="intro"
                className="relative min-h-screen flex flex-col items-center justify-center text-white"
              >
                <div className="video-background">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="https://www.youtube.com/embed/v5qpT8K1ORM?autoplay=1&mute=1&controls=0&loop=1&playlist=v5qpT8K1ORM"
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative z-10 text-center">
                  <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-4 text-5xl font-bold"
                  >
                    歡迎來到 CCTV 監控商城
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="mt-4 text-xl"
                  >
                    提供最先進的監控解決方案與設備，隨時保障您的財產安全。
                  </motion.p>
                </div>
              </section>

              {/* 商品展示 */}
              <section id="products" className="min-h-screen py-16 bg-white">
                <div className="container mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">精選商品</h2>
                  <FilterBar onSearch={handleSearch} onFilter={handleFilter} />
                  <ProductList
                    addToCart={addToCart}
                    viewProductDetails={viewProductDetails}
                    searchTerm={searchTerm}
                    filterCategory={filterCategory}
                  />
                </div>
              </section>

              {/* 公司介紹 */}
              <AboutUs />

            </>
          )}

          {/* 頁腳 */}
          <footer className="bg-gray-900 text-white py-8 text-center">
            <p>&copy; 2024 杰崴企業有限公司. 保留所有權利.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
