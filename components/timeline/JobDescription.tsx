import { HStack, Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCreative } from 'swiper/modules';
import { Link } from "@chakra-ui/next-js";
import { Job } from "@types";

interface Props {
    currentJob: Job
}

export const JobDescription = ({ currentJob }: Props) => {
    const currentProjects = currentJob.projects
    return (
        <HStack display='flex' alignItems='start' justifyContent='space-between' marginTop={20} width='67%' spacing={10}>
            <Text color='white' whiteSpace='pre-line' textAlign='justify'>
                {currentJob.description}
            </Text>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='start'>
                {!currentJob.image ?
                    <Text fontSize={24} fontWeight={700} color='white' width={300} height={100} textAlign='center'>
                        {currentJob.name}
                    </Text>
                    :
                    <Box width={300} height={100} position='relative'>
                        <Image
                            src={currentJob.image}
                            alt="job logo"
                            fill={true}
                            objectFit="contain"
                            quality={100}
                        />
                    </Box>
                }
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination, EffectCreative]}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: [0, '100%', 0],
                        },
                    }}
                    style={{
                        backgroundColor: 'black',
                        width: '350px',
                        height: '175px',
                        marginTop: 'auto',
                        // @ts-ignore: Pagination styling
                        "--swiper-pagination-color": "#38A169",
                        "--swiper-pagination-bullet-inactive-color": "#fff",
                        "--swiper-pagination-bullet-inactive-opacity": "0.8",
                    }}
                >
                    {currentProjects.map((project) => (
                        <SwiperSlide key={project.id} style={{ position: 'relative' }}>
                            <Image
                                src={project.image}
                                alt="project image"
                                fill
                                priority
                            />
                            <Link href={project.link} target="_blank" color='white' bg='black' p={2} textAlign='center' position='absolute' bottom={0} left={0}>
                                {project.name}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </HStack>
    )
}