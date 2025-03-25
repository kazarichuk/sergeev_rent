'use client';

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

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
      {/* Categories */}
      <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 pb-4 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0">
        <Button
          variant={selectedCategory === "Все" ? "default" : "outline"}
          onClick={() => handleCategoryClick("Все")}
          className="flex-none"
        >
          Все
        </Button>
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => handleCategoryClick(category.name)}
            className="flex-none"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Car Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {isLoading ? (
          // Loading Skeleton
          [...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse bg-card rounded-xl overflow-hidden border">
              <div className="aspect-[16/10] bg-muted"></div>
              <div className="p-6">
                <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </div>
          ))
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} 
                 className={cn(
                   "group relative bg-card rounded-xl overflow-hidden border",
                   "transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                 )}>
              <div className="aspect-[16/10] relative">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  priority={car.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-primary font-medium mb-4">{car.price}</p>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Button className="w-full gap-2" asChild>
                  <a href="tel:+79622699148">
                    <PhoneCall className="h-4 w-4" />
                    Узнать цену
                  </a>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
} 