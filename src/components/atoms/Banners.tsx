// components/atoms/Banners.tsx

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface BannerIMGProps {
  image?: string;
  alt?: string;
}

const PLACEHOLDER = '/PlaceholderImage.svg';

export function BannerIMG({ image, alt = 'Banner image' }: BannerIMGProps) {
  const [imgSrc, setImgSrc] = useState(image || PLACEHOLDER);

  useEffect(() => {
    setImgSrc(image || PLACEHOLDER);
  }, [image]);

  return (
    <div className="relative w-full h-32 overflow-hidden select-none">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
        draggable={false}
        onError={() => setImgSrc(PLACEHOLDER)}
      />
    </div>
  );
}