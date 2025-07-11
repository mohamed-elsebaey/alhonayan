// components/ImageMasonryGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export type ProjectImage = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  blurDataURL?: string;
};

interface Props {
  images: ProjectImage[];
}

const ImageMasonryGallery = ({ images }: Props) => {
  const [openImage, setOpenImage] = useState<ProjectImage | null>(null);
  return (
    <>
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-3 gap-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative mb-10 break-inside-avoid rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => setOpenImage(img)}
          >
            <Image
              src={`https://api.alhonayan.com/${img.src}`}
              alt={img.alt || ""}
              width={img.width || 2000}
              height={img.height || 2000}
              sizes={`
                (max-width: 640px) 100vw,
                (max-width: 1024px) 100vw,
                50vw
              `}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              placeholder={img.blurDataURL ? "blur" : undefined}
              blurDataURL={img.blurDataURL}
              priority={idx < 3} 
              loading={idx >= 3 ? "lazy" : "eager"}
            />
          </div>
        ))}
      </div>
      {openImage && (
        <div
          className="fixed inset-0 z-1000 flex items-center justify-center bg-black/60 transition-opacity duration-300"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="relative flex justify-center items-center max-w-[90vw] max-h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="animate-zoomIn">
              <Image
                src={`https://api.alhonayan.com/${openImage.src}`}
                alt={openImage.alt || ""}
                width={openImage.width || 1200}
                height={openImage.height || 1200}
                className="rounded-3xl max-h-[80vh] max-w-[90vw] w-auto h-auto shadow-2xl shadow-black/70 border-4 border-white/70 transition-transform duration-300"
                placeholder={openImage.blurDataURL ? "blur" : undefined}
                blurDataURL={openImage.blurDataURL}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageMasonryGallery;


