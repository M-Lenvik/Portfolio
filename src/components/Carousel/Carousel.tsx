import { useState } from 'react';
import './Carousel.scss';

type CarouselProps = {
  images: string[];
  altPrefix?: string;
  imageClassName?: string;
};

export const Carousel = ({ images, altPrefix = 'bild', imageClassName = '' }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel__track">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const isPrev = index < currentIndex;
          const isNext = index > currentIndex;
          const directionClass = isPrev ? 'carousel__rotation--prev' : isNext ? 'carousel__rotation--next' : '';
          return (
          <div
            key={index}
            className={`carousel__rotation ${isActive ? 'carousel__rotation--active' : ''} ${directionClass}`}
          >
            <img
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              className={imageClassName || undefined}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
        })}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__btn carousel__btn--prev"
            onClick={goToPrev}
            aria-label="Föregående bild"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            className="carousel__btn carousel__btn--next"
            onClick={goToNext}
            aria-label="Nästa bild"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
          <div className="carousel__dots" role="tablist" aria-label="Bildindikatorer">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Gå till bild ${index + 1}`}
                className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
