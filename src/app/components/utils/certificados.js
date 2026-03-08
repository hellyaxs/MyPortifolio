"use strict";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

export default function CarroselCertificados() {
 
  const sources = [
    "/assets/images/certificados/APIREST.png",
    "/assets/images/certificados/aws.png",
    "/assets/images/certificados/certificado1.png",
    "/assets/images/certificados/DDD.png",
    "/assets/images/certificados/github.png",
    "/assets/images/certificados/kafka.png",
    "/assets/images/certificados/testes.png",
    "/assets/images/certificados/seguranca.png",
    "/assets/images/certificados/hexagonal.png",
    "/assets/images/certificados/microservices.png",
    
  ];

  return (
    <>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {sources.map((source, index) => (
          <SwiperSlide key={index}>
            <Image src={source} alt={`certificado${index}`} objectFit="cover" width={520} height={340} />
          </SwiperSlide>
        ))}
       
       
      </Swiper>
    </>
  );
}
