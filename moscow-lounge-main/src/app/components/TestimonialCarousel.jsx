"use client"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { EventComponent } from './EventComponents';
import { TestimonialComponent } from './TestimonialComponent';
register();

export const TestimonialCarousel = () => {
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
      <swiper-slide className={"py-10"}>
        <div className='flex xl:flex-row flex-col'>
            <TestimonialComponent
            testimony={`Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.`}
            testifier={'John Larson'}
            description={'Entrepreneur'}
            ></TestimonialComponent>
            <TestimonialComponent
            testimony={`Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.`}
            testifier={'John Larson'}
            description={'Entrepreneur'}
            ></TestimonialComponent>
            <TestimonialComponent
            testimony={`Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.`}
            testifier={'John Larson'}
            description={'Entrepreneur'}
            ></TestimonialComponent>
        </div>
      </swiper-slide>
      <swiper-slide><EventComponent></EventComponent></swiper-slide>
      <swiper-slide><EventComponent></EventComponent></swiper-slide>
      ...
    </swiper-container>
  );
};