import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Аренда премиальных автомобилей в Калининграде | AutoCar",
  description: "Прокат премиальных автомобилей в Калининграде. Mercedes, Lexus и другие люксовые автомобили. Выгодные условия аренды, быстрое оформление.",
};

export default function Home() {
  return (
    <div className="gallery">
      <div className="image-container">
        <img
          src="/photo_2025-03-25 7.36.48 PM.jpeg"
          alt="Автомобиль 1"
        />
      </div>

      <div className="image-container">
        <img
          src="/photo_2025-03-25 7.36.52 PM.jpeg"
          alt="Автомобиль 2"
        />
      </div>

      <div className="image-container">
        <img
          src="/photo_2025-03-25 7.36.54 PM.jpeg"
          alt="Автомобиль 3"
        />
      </div>

      <div className="image-container">
        <img
          src="/photo_2025-03-25 7.36.56 PM.jpeg"
          alt="Автомобиль 4"
        />
      </div>
    </div>
  );
}
