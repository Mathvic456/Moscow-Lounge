"use client"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { EventComponent } from './EventComponents';
register();

export const EventCarousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      pagination="true"
      className={"text-red-400"}
      style={{
        '--swiper-pagination-color': "#ea202069"
      }}
    >
      <swiper-slide className={"py-10"}><EventComponent></EventComponent></swiper-slide>
      <swiper-slide><EventComponent></EventComponent></swiper-slide>
      <swiper-slide><EventComponent></EventComponent></swiper-slide>
      ...
    </swiper-container>
  );
};