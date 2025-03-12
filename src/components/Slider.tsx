import { useState, useEffect } from 'react';
import img4 from '../assets/5.avif';
import img2 from '../assets/2.avif';
import img3 from '../assets/7.avif';
import img1 from '../assets/6.avif';

const images = [
  { url: img1, title: 'img 1' },
  { url: img2, title: 'img 2' },
  { url: img3, title: 'img 3' },
  { url: img4, title: 'img 4' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const intervalTime = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1,
        );
        setFade(false);
      }, 600); // Duration of the fade-out transition
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setFade(false);
    }, 600); // Duration of the fade-out transition
  };

  return (
    <div className="my-4">
      <div className="relative flex justify-center border shadow-lg border-slate-100 rounded-lg bg-transparent overflow-hidden mx-2">
        <img
          alt={images[currentSlide].title}
          src={images[currentSlide].url}
          className={`rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[500px] transition-opacity duration-1000 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">
            Elkood Clinic Dental
          </h1>
          <p className="text-white text-lg sm:text-xl mb-6">
            احجز موعدك الآن واحصل على أفضل رعاية لأسنانك!
          </p>
          <a
            href="/users"
            className="bg-lightPrimary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-darkPrimary transition"
          >
            الانتقال إلى المستخدمين
          </a>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`mx-2 cursor-pointer rounded-full w-3 h-3 shadow-lg border border-darkPrimary ${
              slideIndex === currentSlide ? "bg-primary" : "bg-stroke"
            }`}
            onClick={() => setCurrentSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );

};

export default Slider;
