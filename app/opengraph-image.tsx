import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "cheevo — find what's on, be there"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 64,
            height: 8,
            borderRadius: 4,
            background: "#f15a22",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 132,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            color: "#0a0a0a",
          }}
        >
          cheevo
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#52525b",
            marginTop: 16,
          }}
        >
          Every event Nigeria is throwing — in one app.
        </div>
      </div>
    ),
    { ...size }
  )
}
