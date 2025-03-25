import Image from "next/image";
import { Metadata } from "next";
import CarList from "@/components/CarList";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Аренда премиальных автомобилей в Калининграде | AutoCar",
  description: "Прокат премиальных автомобилей в Калининграде. BMW, Mercedes, Audi и другие люксовые автомобили. Выгодные условия аренды, быстрое оформление.",
  keywords: "аренда авто, прокат автомобилей, Калининград, премиум авто, бизнес класс, BMW, Mercedes, Audi",
  openGraph: {
    title: "Аренда премиальных автомобилей в Калининграде | AutoCar",
    description: "Прокат премиальных автомобилей в Калининграде. BMW, Mercedes, Audi и другие люксовые автомобили. Выгодные условия аренды.",
    images: ['/photo_2025-03-25 7.36.48 PM.jpeg'],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sergeev-rent.vercel.app',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">AC</span>
              </div>
              <span className="font-bold text-lg sm:text-xl">AutoCar</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm lg:text-base">О нас</a>
              <a href="#cars" className="text-gray-600 hover:text-black transition-colors text-sm lg:text-base">Автомобили</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm lg:text-base">Контакты</a>
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="https://t.me/persmeet" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.02-1.75 6.69-2.9 8.03-3.46 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                </svg>
              </a>
              <a href="tel:+79622699148" 
                 className="hidden sm:block bg-black text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                +7 (962) 269-91-48
              </a>
              
              <MobileMenu />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-6" id="about">
        <div className="container mx-auto">
          <div className="text-center max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto animate-fadeIn">
            <p className="text-gray-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">ТОЛЬКО ЛУЧШИЕ АВТОМОБИЛИ</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Наш автопарк</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Мы предоставляем нашим клиентам самые невероятные впечатления от вождения.
              Именно поэтому в нашем парке только автомобили премиум-класса.
            </p>
          </div>
        </div>
      </section>

      {/* Car Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 bg-gray-50" id="cars">
        <div className="container mx-auto">
          <CarList />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" id="contact">
        <div className="container mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Хотите арендовать автомобиль?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Свяжитесь с нами прямо сейчас и получите лучшие условия аренды
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:+79622699148" 
               className="group relative bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить сейчас
              </span>
            </a>
            <a href="https://t.me/persmeet" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.02-1.75 6.69-2.9 8.03-3.46 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                </svg>
                Написать в Telegram
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm sm:text-base">AC</span>
                </div>
                <span className="font-bold text-lg sm:text-xl">AutoCar</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Аренда премиальных автомобилей в Калининграде
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-base sm:text-lg">Контакты</h3>
              <a href="tel:+79622699148" className="text-gray-400 hover:text-white transition-colors block mb-2 text-sm sm:text-base">
                Телефон: +7 (962) 269-91-48
              </a>
              <a href="https://t.me/persmeet" className="text-gray-400 hover:text-white transition-colors block text-sm sm:text-base">
                Telegram: @persmeet
              </a>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold mb-4 text-base sm:text-lg">Адрес</h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">г. Калининград</p>
              <p className="text-gray-400 text-sm sm:text-base">© 2025 Аренда Авто Калининград</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
