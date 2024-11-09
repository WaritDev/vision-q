'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface ConceptCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto my-8">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5">
        <div className="relative h-64 md:h-full">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="md:w-3/5 p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
        <button className="mt-6 bg-[#8B7355] text-white px-6 py-2 rounded-full hover:bg-[#6B4423] transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

interface ConceptCarouselProps {
  concepts: ConceptCardProps[];
}

const ConceptCarousel: React.FC<ConceptCarouselProps> = ({ concepts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative pb-4">
      <Slider {...settings}>
        {concepts.map((concept, index) => (
          <ConceptCard key={index} {...concept} />
        ))}
      </Slider>
    </div>
  );
};

export default ConceptCarousel;