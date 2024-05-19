// app/layout.tsx

import "./globals.css";
import { fonts } from './utils/fonts'
import { Providers } from './providers'

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en' className={`${fonts.rubik.variable} ${fonts.roboto.variable} ${fonts.shadowsIntoLight.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}