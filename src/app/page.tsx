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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">AC</span>
              </div>
              <span className="font-bold text-lg sm:text-xl">AutoCar</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base">О нас</a>
              <a href="#cars" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base">Автомобили</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base">Контакты</a>
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://t.me/persmeet" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="default" className="hidden sm:flex items-center gap-2" asChild>
                <a href="tel:+79622699148">
                  <PhoneCall className="h-4 w-4" />
                  <span>+7 (962) 269-91-48</span>
                </a>
              </Button>
              
              <MobileMenu />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20" id="about">
        <div className="container">
          <div className="text-center max-w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center rounded-full bg-muted px-3 py-1 text-sm font-semibold">
              ТОЛЬКО ЛУЧШИЕ АВТОМОБИЛИ
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Наш автопарк
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Мы предоставляем нашим клиентам самые невероятные впечатления от вождения.
              Именно поэтому в нашем парке только автомобили премиум-класса.
            </p>
          </div>
        </div>
      </section>

      {/* Car Section */}
      <section className="py-16 sm:py-20 bg-muted/50" id="cars">
        <div className="container">
          <CarList />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20" id="contact">
        <div className="container">
          <div className="text-center max-w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Хотите арендовать автомобиль?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Свяжитесь с нами прямо сейчас и получите лучшие условия аренды
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:+79622699148">
                  <PhoneCall className="h-5 w-5" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://t.me/persmeet" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 sm:py-16 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm sm:text-base">AC</span>
                </div>
                <span className="font-bold text-lg sm:text-xl">AutoCar</span>
              </div>
              <p className="text-muted-foreground">
                Аренда премиальных автомобилей в Калининграде
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2">
                <a href="tel:+79622699148" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Телефон: +7 (962) 269-91-48
                </a>
                <a href="https://t.me/persmeet" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Telegram: @persmeet
                </a>
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Адрес</h3>
              <p className="text-muted-foreground mb-2">г. Калининград</p>
              <p className="text-muted-foreground">© 2025 Аренда Авто Калининград</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
