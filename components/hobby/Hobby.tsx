import { Highlight, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "@chakra-ui/next-js";
import { apps } from "info/apps";

export const Hobby = () => {
  return (
    <VStack width="100%">
      <Text display="flex" fontSize={32} alignItems="center">
        <Highlight
          query={["My hobby projects"]}
          styles={{ bg: "green.500", rounded: "lg", px: 1 }}
        >
          My hobby projects
        </Highlight>
      </Text>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        grabCursor={true}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        style={{
          backgroundColor: "black",
          width: "1200px",
          height: "600px",
          marginTop: "auto",
          // @ts-ignore: Pagination styling
          "--swiper-pagination-color": "#38A169",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
        }}
      >
        {apps.map((app) => (
          <SwiperSlide key={app.id} style={{ position: "relative" }}>
            <Image src={app.img} alt="app image" fill priority />
            <Link
              href={app.link}
              target="_blank"
              color="white"
              bg="black"
              p={2}
              textAlign="center"
              position="absolute"
              bottom={0}
              left={0}
            >
              {app.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};
