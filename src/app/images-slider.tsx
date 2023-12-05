'use client';

import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import { useState } from 'react';

type ImageSliderProps = {
  images: { url: string; alt: string }[];
};

const buttonSliderClassname =
  'focus-visible:bg-[rgb(0,0,0,0.2)] hover:bg-[rgb(0,0,0,0.2)] top-0 bottom-0 absolute p-4 block transition-[background-color_100ms_ease-in-out]';

const iconButtonClassname = 'stroke-white fill-black w-10 h-10';

export const ImagesSlider = ({ images }: ImageSliderProps) => {
  const [imageIndx, setImageIndx] = useState(0);

  function nextImage() {
    setImageIndx((i) => {
      if (i === images.length - 1) return 0;

      return i + 1;
    });
  }

  function prevImage() {
    setImageIndx((i) => {
      if (i === 0) return images.length - 1;

      return i - 1;
    });
  }

  return (
    <section className="relative w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        {images.map((i, index) => (
          <img
            className="flex-grow-0 flex-shrink-0 w-full rounded-lg"
            src={i.url}
            alt={i.alt}
            key={index}
            style={{ translate: `${-100 * imageIndx}%` }}
          />
        ))}
      </div>

      <button onClick={prevImage} className={`${buttonSliderClassname} left-0`}>
        <ArrowBigLeft className={iconButtonClassname} aria-hidden />
      </button>

      <button
        onClick={nextImage}
        className={`${buttonSliderClassname} right-0`}
      >
        <ArrowBigRight className={iconButtonClassname} aria-hidden />
      </button>

      <div className="absolute flex bottom-5 gap-5 left-[50%] translate-x-[-50%]">
        {images.map((_, i) => (
          <button
            className="w-4 h-4 block transition-[scale_100ms_ease-in-out] hover:scale-[1.2] focus-visible:scale-[1.2]"
            key={i}
            onClick={() => setImageIndx(i)}
          >
            {i === imageIndx ? (
              <CircleDot className="stroke-white fill-black" aria-hidden />
            ) : (
              <Circle className="stroke-white fill-black" aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
