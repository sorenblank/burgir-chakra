// app/fonts.jsx
import { Rubik, Shadows_Into_Light, Roboto } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700'],
})

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  variable: '--font-shadows-into-light',
  weight: ['400'],
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const fonts = {
  rubik, shadowsIntoLight, roboto
}
