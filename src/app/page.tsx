import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CarList from "@/components/CarList";
import MobileMenu from "@/components/MobileMenu";
import { PhoneCall, Send } from "lucide-react";

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
    <main className="container">
      <h1 className="text-3xl font-bold mb-8">AutoCar - Аренда премиальных автомобилей в Калининграде</h1>
      
      <div className="car-card">
        <h2 className="text-2xl font-bold mb-4">Mercedes S-Class</h2>
        <img 
          src="/photo_2025-03-25 7.36.48 PM.jpeg" 
          alt="Mercedes S-Class" 
          className="car-image"
        />
        <p className="text-gray-600 mb-4">Автомат • 3.0L V6 • Панорамная крыша</p>
        <p className="text-2xl font-bold text-gray-900">от 12000₽/сутки</p>
      </div>

      <div className="car-card">
        <h2 className="text-2xl font-bold mb-4">Lexus LS</h2>
        <img 
          src="/photo_2025-03-25 7.36.52 PM.jpeg" 
          alt="Lexus LS" 
          className="car-image"
        />
        <p className="text-gray-600 mb-4">Автомат • 3.5L V6 • Премиум аудио</p>
        <p className="text-2xl font-bold text-gray-900">от 11000₽/сутки</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Хотите арендовать автомобиль?</h2>
        <p className="text-gray-600 mb-6">Свяжитесь с нами прямо сейчас и получите лучшие условия аренды</p>
        
        <div className="flex flex-wrap gap-4">
          <a href="tel:+79622699148" className="phone-button">
            Позвонить сейчас
          </a>
          
          <a href="https://t.me/persmeet" className="telegram-button">
            Написать в Telegram
          </a>
        </div>
      </div>
    </main>
  );
}
