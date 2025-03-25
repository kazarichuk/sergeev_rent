'use client';

import Image from "next/image";
import { useState } from "react";

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

export default function CarList() {
  const [selectedCategory, setSelectedCategory] = useState("Бизнес");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryClick = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 500);
  };

  const filteredCars = selectedCategory === "Все" 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  return (
    <>
      {/* Categories - Scrollable on mobile */}
      <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 pb-4 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0">
        <button
          onClick={() => handleCategoryClick("Все")}
          className={`flex-none px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedCategory === "Все" ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Все
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex-none px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
              ${selectedCategory === category.name 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Car Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {isLoading ? (
          // Loading Skeleton
          [...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse bg-white rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] bg-gray-200"></div>
              <div className="p-4 sm:p-6">
                <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} 
                 className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn">
              <div className="aspect-[16/10] relative">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={car.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{car.price}</p>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span key={index} className="text-xs sm:text-sm bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-gray-600">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <a href="tel:+79622699148" 
                   className="block w-full bg-white text-black text-center py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors">
                  Узнать цену
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
} 