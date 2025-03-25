import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аренда премиальных автомобилей в Калининграде | AutoCar",
  description: "Прокат премиальных автомобилей в Калининграде. Mercedes, Lexus и другие люксовые автомобили. Выгодные условия аренды, быстрое оформление.",
};

export default function Home() {
  return (
    <main className="container">
      <h1>AutoCar - Аренда премиальных автомобилей в Калининграде</h1>
      
      <div className="car-card">
        <h2>Mercedes S-Class</h2>
        <img 
          src="photo_2025-03-25 7.36.48 PM.jpeg"
          alt="Mercedes S-Class" 
          className="car-image"
        />
        <p>Автомат • 3.0L V6 • Панорамная крыша</p>
        <p><strong>от 12000₽/сутки</strong></p>
      </div>

      <div className="car-card">
        <h2>Lexus LS</h2>
        <img 
          src="photo_2025-03-25 7.36.52 PM.jpeg"
          alt="Lexus LS" 
          className="car-image"
        />
        <p>Автомат • 3.5L V6 • Премиум аудио</p>
        <p><strong>от 11000₽/сутки</strong></p>
      </div>

      <div className="car-card">
        <h2>Хотите арендовать автомобиль?</h2>
        <p>Свяжитесь с нами прямо сейчас и получите лучшие условия аренды</p>
        
        <div>
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
