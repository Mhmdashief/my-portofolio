import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Untuk gambar dari folder public/ atau local
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // Tambahkan domain untuk deployment
      {
        protocol: "https",
        hostname: "**.vercel.app", // Domain Vercel Anda
      },
      {
        protocol: "https",
        hostname: "**.vercel.dev", // Domain preview Vercel
      },
    ],
    // Izinkan gambar dari sumber lain (saat development)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Tambahkan untuk optimasi

};

export default nextConfig;