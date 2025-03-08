"use client";
import slidesData from '@/data/slides.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesData.slides.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* Hero Background */}
        {slidesData.slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/55" /> {/* darkening-overlay */}
          </div>
        ))}
  
        {/* Hero Content - Adjusted position with pb-16 */}
        <div className="relative h-full flex flex-col justify-end pb-16 max-w-[80rem] mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {slidesData.slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl animate-fade-in">
            {slidesData.slides[currentSlide].description}
          </p>
          {slidesData.slides[currentSlide].buttonText && (
            <button className="px-8 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors animate-fade-in self-start">
              {slidesData.slides[currentSlide].buttonText}
            </button>
          )}
        </div>
  
        {/* Navigation Dots - Fixed position at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slidesData.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
};
