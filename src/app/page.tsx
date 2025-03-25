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
          src="https://i.imgur.com/REPLACE_WITH_YOUR_IMAGE_ID_1.jpg"
          alt="Автомобиль 1"
        />
      </div>

      <div className="image-container">
        <img
          src="https://i.imgur.com/REPLACE_WITH_YOUR_IMAGE_ID_2.jpg"
          alt="Автомобиль 2"
        />
      </div>

      <div className="image-container">
        <img
          src="https://i.imgur.com/REPLACE_WITH_YOUR_IMAGE_ID_3.jpg"
          alt="Автомобиль 3"
        />
      </div>

      <div className="image-container">
        <img
          src="https://i.imgur.com/REPLACE_WITH_YOUR_IMAGE_ID_4.jpg"
          alt="Автомобиль 4"
        />
      </div>
    </div>
  );
}
