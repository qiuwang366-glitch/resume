import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 开启静态导出模式 (这是关键！)
  output: "export",

  // 2. 关闭默认的图片优化 (因为静态模式下没有服务器来压缩图片)
  // 如果你不加这一行，build 的时候会报错
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
