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
  <div className="card bg-white shadow-xl overflow-hidden max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-6">
        <figure className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </figure>
      </div>
      <div className="md:w-3/5 p-6">
        <div className="card-body p-0">
          <h3 className="card-title text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            {description}
          </p>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
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
    <Slider {...settings}>
      {concepts.map((concept, index) => (
        <ConceptCard key={index} {...concept} />
      ))}
    </Slider>
  );
};

export default ConceptCarousel;