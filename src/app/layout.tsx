import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AutoCar - Аренда премиальных автомобилей в Калининграде',
  description: 'Аренда Mercedes S-Class и Lexus LS в Калининграде. Премиальные автомобили для любых мероприятий.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}
