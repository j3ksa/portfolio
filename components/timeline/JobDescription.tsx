import { HStack, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCreative, Autoplay } from "swiper/modules";
import { Link } from "@chakra-ui/next-js";
import { Job } from "@types";
import { Divider } from "@chakra-ui/react";

interface Props {
  currentJob: Job;
}

export const JobDescription = ({ currentJob }: Props) => {
  const currentProjects = currentJob.projects;

  return (
    <HStack
      display="flex"
      flexDir={{ base: "column-reverse", xl: "row" }}
      alignItems={{ base: "center", xl: "start" }}
      justifyContent="space-between"
      marginTop={20}
      width={{ base: "90%", xl: "67%" }}
      spacing={10}
      position="relative"
    >
      <Text color="white" whiteSpace="pre-line" textAlign="justify">
        {currentJob.description}
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
        position="sticky"
        top={0}
      >
        {!currentJob.image ? (
          <Text
            fontSize={24}
            fontWeight={700}
            color="white"
            width={300}
            height="auto"
            textAlign="center"
          >
            {currentJob.name}
          </Text>
        ) : (
          <Box width={300} height={100} position="relative">
            <Image
              src={currentJob.image}
              alt="job logo"
              fill={true}
              objectFit="contain"
              quality={100}
              priority
            />
          </Box>
        )}
        <Divider marginTop={4} marginBottom={4} />
        <Swiper
          direction={"vertical"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination, EffectCreative, Autoplay]}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          style={{
            backgroundColor: "black",
            width: "350px",
            height: "175px",
            marginTop: "auto",
            // @ts-ignore: Pagination styling
            "--swiper-pagination-color": "#38A169",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
          }}
        >
          {currentProjects.map((project) => (
            <SwiperSlide key={project.id} style={{ position: "relative" }}>
              <Image
                src={project.image}
                alt="project image"
                fill
                placeholder="blur"
                blurDataURL={"public/projects/auction.png"}
                style={{ objectFit: "cover", transition: "0.3s" }}
              />
              <Link
                href={project.link}
                target="_blank"
                color="white"
                bg="black"
                p={2}
                textAlign="center"
                position="absolute"
                bottom={0}
                left={0}
              >
                {project.name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </HStack>
  );
};
