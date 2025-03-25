import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аренда премиальных автомобилей в Калининграде | AutoCar",
  description: "Прокат премиальных автомобилей в Калининграде. Mercedes, Lexus и другие люксовые автомобили. Выгодные условия аренды, быстрое оформление.",
};

export default function Home() {
  return (
    <div>
      <h1>Аренда премиальных автомобилей в Калининграде</h1>

      <div className="car">
        <h2>Mercedes S-Class</h2>
        <img src="/photo_2025-03-25 7.36.48 PM.jpeg" alt="Mercedes S-Class" />
        <p>Автомат • 3.0L V6 • Панорамная крыша</p>
        <p className="price">от 12000₽/сутки</p>
      </div>

      <div className="car">
        <h2>Lexus LS</h2>
        <img src="/photo_2025-03-25 7.36.52 PM.jpeg" alt="Lexus LS" />
        <p>Автомат • 3.5L V6 • Премиум аудио</p>
        <p className="price">от 11000₽/сутки</p>
      </div>

      <div className="car">
        <img src="/photo_2025-03-25 7.36.54 PM.jpeg" alt="Автомобиль 3" />
        <p className="price">от 10000₽/сутки</p>
      </div>

      <div className="car">
        <img src="/photo_2025-03-25 7.36.56 PM.jpeg" alt="Автомобиль 4" />
        <p className="price">от 9000₽/сутки</p>
      </div>

      <div className="buttons">
        <a href="tel:+79622699148" className="button green">
          Позвонить: +7 (962) 269-91-48
        </a>
        <a href="https://t.me/persmeet" className="button blue">
          Написать в Telegram
        </a>
      </div>
    </div>
  );
}
