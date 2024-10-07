// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          關於我們
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-700 mb-8"
        >
          我們是一家專業的安全監控系統供應商，致力於提供最先進的技術解決方案，為您的家庭、企業提供全面的安全保障。
          無論是高清攝像機、智能分析系統還是雲端存儲，我們都能滿足您的需求。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">公司使命</h3>
            <p className="text-gray-600">
              我們的使命是為每一個家庭和企業提供最高品質的監控解決方案，讓您隨時隨地掌握安全狀況。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">我們的團隊</h3>
            <p className="text-gray-600">
              我們擁有一支專業的團隊，專注於研發、設計和服務，確保每一位客戶都能獲得最佳的使用體驗。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">核心價值</h3>
            <p className="text-gray-600">
              誠信、創新、服務是我們的核心價值觀，我們堅持為客戶提供超出預期的產品和服務。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
