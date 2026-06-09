import type { NextConfig } from "next"

const API_ORIGIN = "https://api.cheevo.vip"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        destination: `${API_ORIGIN}/.well-known/apple-app-site-association`,
      },
      {
        source: "/.well-known/assetlinks.json",
        destination: `${API_ORIGIN}/.well-known/assetlinks.json`,
      },
    ]
  },
}

export default nextConfig
