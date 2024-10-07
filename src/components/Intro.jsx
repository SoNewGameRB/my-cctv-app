import React, { useState, useEffect } from "react";

const Intro = () => {
  // 定義多個 GIF 圖片的路徑
  const gifs = [
    "/images/0046.gif_wh300.gif",
    "/images/3413.gif_wh300.gif",
    "/images/c08105a16da34b0984fcccf3626b6fa3.gif",
    
  ];

  // 使用 useState 儲存隨機選擇的 GIF 圖片
  const [selectedGif, setSelectedGif] = useState("");

  // 使用 useEffect 在組件掛載時隨機選擇一個 GIF
  useEffect(() => {
    // 隨機選擇 GIF 的索引
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setSelectedGif(gifs[randomIndex]);
  }, []); // 空依賴陣列表示只在組件掛載時執行一次

  return (
    <div
      className="w-screen h-screen bg-black flex justify-center items-center relative"
      style={{
        backgroundImage: `url("${selectedGif}")`, // 使用隨機選擇的 GIF
        backgroundSize: "contain", // 圖像適應容器大小，保持圖像完整
        backgroundRepeat: "no-repeat", // 禁止背景重複
        backgroundPosition: "center", // 保持背景居中
      }}
    >
      <h1 className="text-black text-5xl z-10 bg-white">
        Jeaway
        <p>杰崴企業有限公司</p>
      </h1>
    </div>
  );
};

export default Intro;
