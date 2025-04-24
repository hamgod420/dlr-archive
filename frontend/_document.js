// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/runtime-config.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  )
}