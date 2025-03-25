import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Бизнес");
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { name: "Premium", active: false },
    { name: "Спорткары", active: false },
    { name: "Бизнес", active: true },
    { name: "Комфорт", active: false },
    { name: "Кабриолеты", active: false },
  ];

  const cars = [
    {
      id: 1,
      image: '/photo_2025-03-25 7.36.48 PM.jpeg',
      name: 'BMW 7 Series',
      category: 'Premium',
      price: 'от 15000₽/сутки',
      features: ['Автомат', '4.4L V8', 'Кожаный салон']
    },
    {
      id: 2,
      image: '/photo_2025-03-25 7.36.52 PM.jpeg',
      name: 'Mercedes S-Class',
      category: 'Бизнес',
      price: 'от 12000₽/сутки',
      features: ['Автомат', '3.0L V6', 'Панорамная крыша']
    },
    {
      id: 3,
      image: '/photo_2025-03-25 7.36.54 PM.jpeg',
      name: 'Audi A8',
      category: 'Premium',
      price: 'от 13000₽/сутки',
      features: ['Автомат', '3.0L V6', 'Массаж сидений']
    },
    {
      id: 4,
      image: '/photo_2025-03-25 7.36.56 PM.jpeg',
      name: 'Lexus LS',
      category: 'Бизнес',
      price: 'от 11000₽/сутки',
      features: ['Автомат', '3.5L V6', 'Премиум аудио']
    }
  ];

  const handleCategoryClick = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    // Имитация загрузки для лучшего UX
    setTimeout(() => setIsLoading(false), 500);
  };

  const filteredCars = selectedCategory === "Все" 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <span className="font-bold text-xl">AutoCar</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">О нас</a>
              <a href="#cars" className="text-gray-600 hover:text-black transition-colors">Автомобили</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://t.me/persmeet" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.02-1.75 6.69-2.9 8.03-3.46 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                </svg>
              </a>
              <a href="tel:+79622699148" 
                 className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                +7 (962) 269-91-48
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fadeIn">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-gray-600 hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg">О нас</a>
                <a href="#cars" className="text-gray-600 hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg">Автомобили</a>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg">Контакты</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6" id="about">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <p className="text-gray-600 font-medium mb-4">ТОЛЬКО ЛУЧШИЕ АВТОМОБИЛИ</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наш автопарк</h1>
            <p className="text-xl text-gray-600 mb-8">
              Мы предоставляем нашим клиентам самые невероятные впечатления от вождения.
              Именно поэтому в нашем парке только автомобили премиум-класса.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => handleCategoryClick("Все")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === "Все" ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Все
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category.name 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Gallery */}
      <section className="py-16 px-6 bg-gray-50" id="cars">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading Skeleton
              [...Array(3)].map((_, index) => (
                <div key={index} className="animate-pulse bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))
            ) : (
              filteredCars.map((car) => (
                <div key={car.id} 
                     className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={car.id <= 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{car.price}</p>
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature, index) => (
                        <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a href="tel:+79622699148" className="block w-full bg-white text-black text-center py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      Узнать цену
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6" id="contact">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Хотите арендовать автомобиль?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами прямо сейчас и получите лучшие условия аренды
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79622699148" 
               className="group relative bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить сейчас
              </span>
            </a>
            <a href="https://t.me/persmeet" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.89.03-.24.37-.49 1.02-.75 4.02-1.75 6.69-2.9 8.03-3.46 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                </svg>
                Написать в Telegram
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">AC</span>
                </div>
                <span className="font-bold text-xl">AutoCar</span>
              </div>
              <p className="text-gray-400">
                Аренда премиальных автомобилей в Калининграде
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <a href="tel:+79622699148" className="text-gray-400 hover:text-white transition-colors block mb-2">
                Телефон: +7 (962) 269-91-48
              </a>
              <a href="https://t.me/persmeet" className="text-gray-400 hover:text-white transition-colors block">
                Telegram: @persmeet
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-4">Адрес</h3>
              <p className="text-gray-400 mb-2">г. Калининград</p>
              <p className="text-gray-400">© 2025 Аренда Авто Калининград</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
