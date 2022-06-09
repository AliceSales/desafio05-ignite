import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Flex } from '@chakra-ui/react';
import { Slide } from './Slide';
import db from '../../../db.json';

import 'swiper/css/bundle';

const { continents } = db;

export function Slider() {
  return (
    <Flex w="100%" maxW={1120} h="100%" maxH={450} mt={10} mb="8">
      <Swiper
        pagination
        navigation
        modules={[Pagination, Navigation]}
        id="swiper-color"
        loop
        autoplay
      >
        {continents.map(continent => (<SwiperSlide key={`slide-${continent.id}`}>
          <Slide
            id={continent.id}
            title={continent.name}
            description={continent.description} 
            imgUrl={continent.Image}
          />
        </SwiperSlide>))}

      </Swiper>
    </Flex>
  );
}