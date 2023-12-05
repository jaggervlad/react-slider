import Image from 'next/image';

import image1 from '../../public/image-1.jpeg';
import image2 from '../../public/image-2.jpeg';
import image3 from '../../public/image-3.jpg';
import { ImagesSlider } from './images-slider';

const IMAGES = [
  { url: image1.src, alt: 'image1' },
  { url: image2.src, alt: 'image1' },
  { url: image3.src, alt: 'image1' },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto w-full py-24">
      <ImagesSlider images={IMAGES} />
    </div>
  );
}
