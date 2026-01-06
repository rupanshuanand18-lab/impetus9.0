"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/iam/iam1.jpg",
  "/iam/iam2.jpg",
  "/iam/iam3.jpg",
  "/iam/iam4.jpg",
  "/iam/iam5.jpg",
  "/iam/iam6.jpg",
];

export default function CarouselComp() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cinema-frame scale-140 md:scale-100 ">
      <div
        className="track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="slide" key={i}>
            <Image
              src={src}
              alt="cinematic slide"
              fill
              priority={i === 0}
              className="image"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
  .cinema-frame {
    width: clamp(290px, 64vw, 820px);
    aspect-ratio: 18 / 9; /* flatter → reduced height */
    margin: 5px auto;
    background: #000;
    overflow: hidden;
  }

  .track {
    display: flex;
    height: 100%;
    transition: transform 0.7s ease-in-out;
  }

  .slide {
    position: relative;
    min-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    object-fit: contain;
  }
`}</style>

    </div>
  );
}
